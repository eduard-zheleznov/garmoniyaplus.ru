#!/usr/bin/env bash
set -euo pipefail

IMAGE="${1:-}"
if [ -z "$IMAGE" ]; then
  echo "Usage: $0 IMAGE_TAG" >&2
  echo "Example: $0 lumera-app:candidate-20260601" >&2
  exit 1
fi

docker image inspect "$IMAGE" >/dev/null

echo "Backing up current production before promotion..."
/opt/garmoniyaplus/bin/gp-backup-now.sh "pre-promote-$(date -u +%Y%m%d-%H%M%S)" >/tmp/gp-pre-promote.log
cat /tmp/gp-pre-promote.log

echo "Promoting $IMAGE to production as lumera-app:latest"
docker tag "$IMAGE" lumera-app:latest
cd /opt/lumera
docker compose up -d --force-recreate app

/opt/garmoniyaplus/bin/gp-status.sh
