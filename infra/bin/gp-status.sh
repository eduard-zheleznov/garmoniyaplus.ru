#!/usr/bin/env bash
set -euo pipefail

PROD_URL="${PROD_URL:-https://garmoniyaplus.ru}"
STAGING_URL="${STAGING_URL:-https://garmoniyaplus-staging.147.45.157.76.sslip.io}"
STAGING_AUTH_FILE="${STAGING_AUTH_FILE:-/opt/garmoniyaplus/staging/STAGING_ACCESS.txt}"

curl_code() {
  local url="$1"
  shift || true
  curl -k -sS -o /dev/null -w "%{http_code}" "$@" "$url" || true
}

echo "== Docker containers =="
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}" | grep -E 'NAMES|lumera|garmoniya' || true

echo
echo "== Build IDs =="
if docker ps --format '{{.Names}}' | grep -qx 'lumera-app'; then
  printf 'production: '
  docker exec lumera-app sh -lc 'cat /app/.next/BUILD_ID' || true
fi
if docker ps --format '{{.Names}}' | grep -qx 'garmoniyaplus-staging'; then
  printf 'staging:    '
  docker exec garmoniyaplus-staging sh -lc 'cat /app/.next/BUILD_ID' || true
fi

echo
echo "== HTTP checks =="
for path in / /catalog /product/krem-protein-dlya-volos-sh-rd-protein-cream-50-ml; do
  printf 'production %-80s %s\n' "$path" "$(curl_code "$PROD_URL$path")"
done

if [ -f "$STAGING_AUTH_FILE" ]; then
  user="$(awk -F= '/^user=/{print $2}' "$STAGING_AUTH_FILE")"
  pass="$(awk -F= '/^password=/{print $2}' "$STAGING_AUTH_FILE")"
  for path in / /catalog /product/krem-protein-dlya-volos-sh-rd-protein-cream-50-ml; do
    printf 'staging    %-80s %s\n' "$path" "$(curl_code "$STAGING_URL$path" -u "$user:$pass")"
  done
else
  echo "staging auth file not found: $STAGING_AUTH_FILE"
fi

echo
echo "== Golden pointer =="
cat /opt/garmoniyaplus/CURRENT_GOLDEN 2>/dev/null || true
