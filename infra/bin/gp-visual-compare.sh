#!/usr/bin/env bash
set -euo pipefail

BASELINE="${1:-/opt/garmoniyaplus/visual-baseline/current}"
RUN="${2:-}"

if [ -z "$RUN" ]; then
  echo "Usage: $0 BASELINE_DIR RUN_DIR" >&2
  echo "Example: $0 /opt/garmoniyaplus/visual-baseline/current /opt/garmoniyaplus/visual-runs/check-20260601" >&2
  exit 1
fi

if [ ! -d "$BASELINE" ]; then
  echo "ERROR: baseline directory not found: $BASELINE" >&2
  exit 1
fi
if [ ! -d "$RUN" ]; then
  echo "ERROR: run directory not found: $RUN" >&2
  exit 1
fi

status=0
for file in "$BASELINE"/*.png; do
  name="$(basename "$file")"
  candidate="$RUN/$name"
  if [ ! -f "$candidate" ]; then
    echo "$name missing"
    status=1
  elif cmp -s "$file" "$candidate"; then
    echo "$name exact-match"
  else
    echo "$name differs"
    status=1
  fi
done

exit "$status"
