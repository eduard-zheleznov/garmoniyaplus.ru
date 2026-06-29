#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

const contactsChunk = "app-runtime/.next/server/chunks/ssr/[root-of-the-server]__0t.92g4._.js";
const contactActionsChunk = "app-runtime/.next/server/chunks/ssr/src_app_contacts_actions_ts_0lfo2z9._.js";
const contactPatchScript = "infra/bin/gp-patch-contact-links-sharing.js";
const contactStorageScript = "infra/bin/gp-update-contact-info.js";
const authLeadPatchScript = "infra/bin/gp-patch-auth-code-leads.py";
const fullRuntimeChunk = "app-runtime/.next/static/chunks/gp-runtime-full95.js";
const contactEmailLoaderChunk =
  "app-runtime/.next/static/chunks/0-60jcm20jig-.v20260629-contactemail142.js";
const contactsManifest = "app-runtime/.next/server/app/contacts/page_client-reference-manifest.js";

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function main() {
  const contacts = read(contactsChunk);
  const actions = read(contactActionsChunk);
  const patchScript = read(contactPatchScript);
  const storageScript = read(contactStorageScript);
  const authLeadPatch = read(authLeadPatchScript);
  const fullRuntime = read(fullRuntimeChunk);
  const contactEmailLoader = read(contactEmailLoaderChunk);
  const contactManifest = read(contactsManifest);

  assert(
    contacts.includes("https://2gis.ru/abakan/firm/9711414977522540"),
    "contacts page must use the correct 2GIS firm link"
  );
  assert(
    !contacts.includes("https://2gis.ru/abakan/geo/9711522351700561"),
    "contacts page must not keep the old 2GIS geo link"
  );
  assert(
    storageScript.includes("https://2gis.ru/abakan/firm/9711414977522540"),
    "storage update script must persist the correct 2GIS firm link"
  );
  assert(
    contacts.includes('target:"_blank"') || contacts.includes('target:"_blank"'),
    "address/map links must open external maps in a new tab"
  );
  assert(
    patchScript.includes(".gp-legal-details>div:first-child{display:none"),
    "requisites duplicate organization row must be hidden"
  );
  assert(
    contacts.includes("gp-consultation-link-fix-20260629") &&
      contacts.includes("gp-consultation-position-fix-20260629") &&
      contacts.includes("gp-consultation-mobile-bridge-20260629") &&
      contacts.includes("gp-contact-fallback-lead-mail-20260629") &&
      contacts.includes("gp-contact-email-runtime-guard-20260629-v2") &&
      contacts.includes("location.origin") &&
      contacts.includes("/api/gp-auth/send-lead") &&
      contacts.includes("consultation-widget:open"),
    "contacts page must include mobile consultation, fallback submit, and runtime email guards"
  );
  assert(
    actions.includes("gpLeadEmail20260629") &&
      actions.includes("/send-lead") &&
      actions.includes("AUTH_CODE_BASE_URL"),
    "consultation action must notify the existing auth/mail service about new leads"
  );
  assert(
    authLeadPatch.includes("gpLeadMail20260629") &&
      authLeadPatch.includes('/api/gp-auth/send-lead') &&
      authLeadPatch.includes("info@garmoniya-plus.ru"),
    "auth-code mail service patch must add lead notifications to info email"
  );
  assert(
    contactEmailLoader.includes("gp-runtime-full95.js?v=20260629-142") &&
      contactManifest.includes("0-60jcm20jig-.v20260629-contactemail142.js") &&
      !contactManifest.includes("0-60jcm20jig-.v20260624-speed141.js"),
    "contacts manifest must use the cache-busted contact email loader/runtime"
  );
  assert(
    fullRuntime.includes('["Abakan-sib@mail.ru","info@garmoniya-plus.ru"]') &&
      !fullRuntime.includes('["info@garmoniya-plus.ru","Abakan-sib@mail.ru"]') &&
      !fullRuntime.includes('link.href="mailto:Abakan-sib@mail.ru"') &&
      !fullRuntime.includes('link.href="tel:+79134487333"'),
    "full runtime must not overwrite current contact email/phone with stale values"
  );
}

try {
  main();
  console.log("gp-contact-current-tests: OK");
} catch (error) {
  console.error(`gp-contact-current-tests: FAIL: ${error.message}`);
  process.exit(1);
}
