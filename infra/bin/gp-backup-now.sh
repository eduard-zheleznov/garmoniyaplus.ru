#!/usr/bin/env bash
set -euo pipefail

STAMP="${1:-$(date -u +%Y%m%d-%H%M%S)}"
BASE="/opt/garmoniyaplus/backups/$STAMP"
SAVE_IMAGE="${SAVE_IMAGE:-0}"

mkdir -p "$BASE"

echo "Creating runtime backup: $BASE"
if docker ps --format '{{.Names}}' | grep -qx 'lumera-app'; then
  docker commit lumera-app "lumera-app:backup-$STAMP" >/dev/null
  docker inspect lumera-app > "$BASE/container-inspect.json"
  docker exec lumera-app sh -lc 'cat /app/.next/BUILD_ID' > "$BASE/BUILD_ID.txt" || true
else
  echo "ERROR: lumera-app container is not running" >&2
  exit 1
fi

docker image inspect "lumera-app:backup-$STAMP" > "$BASE/image-inspect.json"
cp -a /opt/lumera/docker-compose.yml "$BASE/docker-compose.yml"
cp -a /opt/lumera/.env.production "$BASE/.env.production"
cp -a /etc/caddy/Caddyfile "$BASE/Caddyfile"
tar -C /opt/lumera -czf "$BASE/storage.tgz" storage
tar -C /opt/lumera/public -czf "$BASE/uploads.tgz" uploads

if [ -d /opt/lumera-1c ]; then
  tar -C /opt -czf "$BASE/lumera-1c.tgz" lumera-1c
fi

if [ "$SAVE_IMAGE" = "1" ]; then
  docker save "lumera-app:backup-$STAMP" | gzip -1 > "$BASE/lumera-app-backup-$STAMP.tar.gz"
fi

sha256sum "$BASE"/* > "$BASE/SHA256SUMS" || true

echo "backup_tag=lumera-app:backup-$STAMP"
echo "backup_dir=$BASE"
printf "build_id="
cat "$BASE/BUILD_ID.txt" || true
