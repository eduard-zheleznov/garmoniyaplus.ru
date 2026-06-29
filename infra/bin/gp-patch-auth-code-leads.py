#!/usr/bin/env python3
"""Patch the GP auth-code mail service with lead email notifications.

The service already owns SMTP/sendmail configuration for registration/login
codes. This patch adds /api/gp-auth/send-lead so the website can send contact
requests through the same trusted mail channel without duplicating secrets in
the Next.js container.
"""

from __future__ import annotations

import sys
from pathlib import Path


DEFAULT_PATH = Path("/opt/gp-auth-code/gp_auth_code_server.py")
MARKER = "gpLeadMail20260629"


LEAD_HELPERS = r'''

def gp_lead_clean(value, limit=1200):
    text = str(value or "").replace("\r", "\n").strip()
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text[:limit]


def gp_lead_notify_to():
    value = os.getenv("GP_LEAD_NOTIFY_TO") or os.getenv("LEADS_NOTIFY_TO") or "info@garmoniya-plus.ru"
    return normalize_email(value)


def build_lead_email(payload):
    request_id = gp_lead_clean(payload.get("requestId"), 80)
    source = gp_lead_clean(payload.get("source") or "site", 80)
    name = gp_lead_clean(payload.get("name"), 160)
    phone = gp_lead_clean(payload.get("phone"), 80)
    email = gp_lead_clean(payload.get("email"), 160)
    comment = gp_lead_clean(payload.get("message"), 2000)
    if len(name) < 2:
        raise AppError(400, "Укажите имя.", "INVALID_LEAD_NAME")
    if len(phone) < 5:
        raise AppError(400, "Укажите телефон.", "INVALID_LEAD_PHONE")
    message = EmailMessage()
    message["From"] = encoded_mail_from()
    message["To"] = gp_lead_notify_to()
    message["Subject"] = str(Header("Новая заявка с сайта ГармонияПлюс", "utf-8"))
    lines = [
        "Новая заявка с сайта ГармонияПлюс",
        "",
        f"Имя: {name}",
        f"Телефон: {phone}",
        f"Email: {email or 'не указан'}",
        f"Источник: {source}",
    ]
    if request_id:
        lines.append(f"ID заявки: {request_id}")
    if comment:
        lines.extend(["", "Комментарий:", comment])
    lines.extend(["", "Письмо отправлено автоматически с сайта."])
    message.set_content("\n".join(lines), subtype="plain", charset="utf-8")
    return message


def gp_send_message(message):
    if smtp_configured():
        host = os.getenv("SMTP_HOST") or os.getenv("GP_AUTH_SMTP_HOST")
        port = int(os.getenv("SMTP_PORT") or os.getenv("GP_AUTH_SMTP_PORT") or "587")
        password = smtp_password()
        use_ssl = env_bool("SMTP_SECURE", "SMTP_SSL", "GP_AUTH_SMTP_SECURE", "GP_AUTH_SMTP_SSL", default=(port == 465))
        use_starttls = env_bool("SMTP_STARTTLS", "GP_AUTH_SMTP_STARTTLS", default=not use_ssl)
        context = ssl.create_default_context()
        last_error = None
        for user in smtp_user_candidates():
            try:
                if use_ssl:
                    with smtplib.SMTP_SSL(host, port, timeout=20, context=context) as smtp:
                        if user and password:
                            smtp.login(user, password)
                        smtp.send_message(message)
                else:
                    with smtplib.SMTP(host, port, timeout=20) as smtp:
                        if use_starttls:
                            smtp.starttls(context=context)
                        if user and password:
                            smtp.login(user, password)
                        smtp.send_message(message)
                return
            except smtplib.SMTPAuthenticationError as error:
                last_error = error
                continue
        if last_error:
            raise last_error
        return
    path = sendmail_path()
    if path:
        subprocess.run([path, "-t", "-i"], input=message.as_bytes(), check=True, timeout=20)
        return
    raise AppError(503, "Отправка заявки на email временно недоступна.", "MAIL_NOT_CONFIGURED")


def handle_send_lead(payload):
    if not mail_configured():
        raise AppError(503, "Отправка заявки на email временно недоступна.", "MAIL_NOT_CONFIGURED")
    gp_send_message(build_lead_email(payload))
    return {"ok": True, "message": "Заявка отправлена на email."}

# gpLeadMail20260629
'''


def patch(path: Path) -> bool:
    source = path.read_text("utf-8")
    changed = False

    legacy_reply_to = '''    if email and EMAIL_RE.match(email):
        message["Reply-To"] = email
'''
    if legacy_reply_to in source:
        source = source.replace(legacy_reply_to, "", 1)
        changed = True

    if MARKER not in source:
        anchor = "\n\ndef smtp_password():\n"
        if anchor not in source:
            raise RuntimeError("smtp_password anchor not found")
        source = source.replace(anchor, LEAD_HELPERS + anchor, 1)
        changed = True

    route = '''            if path == "/api/gp-auth/send-lead":
                self.send_json(200, handle_send_lead(payload))
                return
'''
    route_anchor = '''            if path == "/api/gp-auth/consume-registration-token":
                self.send_json(200, handle_consume_token(payload))
                return
'''
    if route not in source:
        if route_anchor not in source:
            raise RuntimeError("consume-registration-token route anchor not found")
        source = source.replace(route_anchor, route_anchor + route, 1)
        changed = True

    if changed:
        path.write_text(source, "utf-8")
    return changed


def main() -> None:
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PATH
    changed = patch(target)
    print(f"auth lead mail patch: {'patched' if changed else 'already patched'} {target}")


if __name__ == "__main__":
    main()
