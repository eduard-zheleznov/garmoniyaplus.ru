#!/usr/bin/env bash
set -euo pipefail

GOLDEN_TAG="${1:-$(head -n 1 /opt/garmoniyaplus/CURRENT_GOLDEN)}"
MODE="${2:-image-only}"

if [ -z "$GOLDEN_TAG" ]; then
  echo "ERROR: golden tag is empty. Pass it explicitly, for example: lumera-app:golden-20260531-172528" >&2
  exit 1
fi

docker image inspect "$GOLDEN_TAG" >/dev/null

echo "Backing up current production before rollback..."
/opt/garmoniyaplus/bin/gp-backup-now.sh "pre-rollback-$(date -u +%Y%m%d-%H%M%S)" >/tmp/gp-pre-rollback.log
cat /tmp/gp-pre-rollback.log

echo "Rolling production image back to $GOLDEN_TAG"
docker tag "$GOLDEN_TAG" lumera-app:latest
cd /opt/lumera
docker compose up -d --force-recreate app

if [ "$MODE" = "--with-data" ] || [ "$MODE" = "with-data" ]; then
  GOLDEN_DIR="$(sed -n '2p' /opt/garmoniyaplus/CURRENT_GOLDEN)"
  if [ -z "$GOLDEN_DIR" ] || [ ! -d "$GOLDEN_DIR" ]; then
    echo "ERROR: golden directory is unavailable, cannot restore data" >&2
    exit 1
  fi
  echo "Restoring storage and uploads from $GOLDEN_DIR"
  docker compose stop app
  rm -rf /opt/lumera/storage /opt/lumera/public/uploads
  tar -C /opt/lumera -xzf "$GOLDEN_DIR/storage.tgz"
  tar -C /opt/lumera/public -xzf "$GOLDEN_DIR/uploads.tgz"
  docker compose up -d app
fi

/opt/garmoniyaplus/bin/gp-status.sh
