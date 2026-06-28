# GarmoniyaPlus Site Instructions

Project: `garmoniyaplus.ru` / `ГармонияПлюс`.

## URLs

- Production: `https://garmoniyaplus.ru`
- Staging: `https://garmoniyaplus-staging.147.45.157.76.sslip.io`

## Server Commands

```bash
/opt/garmoniyaplus/bin/gp-status.sh
/opt/garmoniyaplus/bin/gp-backup-now.sh NAME
/opt/garmoniyaplus/bin/gp-set-staging-image.sh IMAGE_TAG
/opt/garmoniyaplus/bin/gp-promote-image.sh IMAGE_TAG
/opt/garmoniyaplus/bin/gp-rollback-golden.sh
```

## Current Baseline

- Git tag: `prod-20260628-baseline`
- Golden image: `lumera-app:golden-20260625-1727-1c-retail-wholesale-prices`
- Golden dir: `/opt/garmoniyaplus/golden/20260625-1727-1c-retail-wholesale-prices`
- Build ID: `ekCeUfdXZrOzvZQM8cOtF`

## Required Workflow

1. Work through GitHub branches for each task.
2. Create a server backup before changing staging/production.
3. Apply changes to staging first.
4. Verify staging before production.
5. Promote only after staging is clean.
6. Verify production.
7. Create/update a recovery point after successful production.

## Scope Safety

- Do not change visual/layout/CSS when the task is about data, 1C, import, categories or prices.
- Do not use `/opt/lumera/src` as truth without comparing against current production/golden.
- Do not overwrite live storage with repository files.
- Do not commit real `.env`, passwords, tokens, users, orders, live `storage`, backups, caches or `node_modules`.

## PWA / iPhone Cache

If runtime JS/CSS/service worker changes:

- use a new build/chunk URL or hash;
- do not modify immutable chunk content under the same URL;
- check mobile/PWA behavior;
- tell the user whether they need to close/reopen the app.

## Final Response Checklist

Always report:

- what changed;
- where checked;
- manual URLs to verify;
- backup/tag/golden created;
- whether PWA/cache was touched.

