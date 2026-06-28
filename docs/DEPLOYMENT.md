# Deployment Notes

The live server currently uses Docker image based deployment.

Important server commands:

```bash
/opt/garmoniyaplus/bin/gp-status.sh
/opt/garmoniyaplus/bin/gp-backup-now.sh NAME
/opt/garmoniyaplus/bin/gp-set-staging-image.sh IMAGE_TAG
/opt/garmoniyaplus/bin/gp-promote-image.sh IMAGE_TAG
/opt/garmoniyaplus/bin/gp-rollback-golden.sh
```

Current production runtime was exported from container:

```text
container: lumera-app
image: lumera-app:latest
build id: ekCeUfdXZrOzvZQM8cOtF
```

Current golden:

```text
lumera-app:golden-20260625-1727-1c-retail-wholesale-prices
/opt/garmoniyaplus/golden/20260625-1727-1c-retail-wholesale-prices
```

## What Is Not In Git

These are intentionally kept out of the public repository:

- `/app/storage/lumera-store.json`
- users/orders/leads;
- real `.env` files;
- 1C passwords/tokens;
- Docker image layers;
- server backups with live data.

## Current Limitation

`app-runtime/` is a built Next.js runtime snapshot. It is useful for audit, diff, emergency runtime patches and preserving the exact current deployed code, but it is not as good as a normal source repository.

Best next improvement: recover or recreate the actual source tree that produced this runtime, compare it against production/golden, then make that source tree the main development target.

