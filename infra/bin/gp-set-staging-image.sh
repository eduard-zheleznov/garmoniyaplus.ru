#!/usr/bin/env bash
set -euo pipefail

IMAGE="${1:-}"
if [ -z "$IMAGE" ]; then
  echo "Usage: $0 IMAGE_TAG" >&2
  echo "Example: $0 lumera-app:candidate-20260601-120000" >&2
  exit 1
fi

docker image inspect "$IMAGE" >/dev/null

COMPOSE="/opt/garmoniyaplus/staging/docker-compose.yml"
cp -a "$COMPOSE" "$COMPOSE.bak-$(date -u +%Y%m%d-%H%M%S)"

python3 - "$COMPOSE" "$IMAGE" <<'PY'
from pathlib import Path
import sys

path = Path(sys.argv[1])
image = sys.argv[2]
text = path.read_text()
lines = text.splitlines()
for i, line in enumerate(lines):
    if line.strip().startswith("image: "):
        indent = line[: len(line) - len(line.lstrip())]
        lines[i] = f"{indent}image: {image}"
        break
else:
    raise SystemExit("image line not found in staging compose")
path.write_text("\n".join(lines) + "\n")
PY

cd /opt/garmoniyaplus/staging
docker compose up -d --force-recreate app

/opt/garmoniyaplus/bin/gp-status.sh
