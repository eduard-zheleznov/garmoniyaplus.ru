# garmoniyaplus.ru

Production baseline for `garmoniyaplus.ru`.

This repository was initialized from the live production server on 2026-06-28.
The current app on the server is a built Next.js runtime, not a clean source tree.
For that reason, this repository is split into:

- `app-runtime/` - current production Next.js runtime snapshot from Docker container `lumera-app`.
- `onec-importer/` - current 1C CommerceML importer from `/opt/lumera-1c`.
- `infra/` - operational scripts/templates used for staging, promotion, backup and rollback.
- `tests/` - regression checks for the price/1C logic.
- `docs/` - workflow and operational notes.

Important: live storage data is intentionally not committed. It contains users, orders and operational state.

## Current Production Baseline

- Production URL: `https://garmoniyaplus.ru`
- Current production image: `lumera-app:latest`
- Current golden image: `lumera-app:golden-20260625-1727-1c-retail-wholesale-prices`
- Current golden dir on server: `/opt/garmoniyaplus/golden/20260625-1727-1c-retail-wholesale-prices`
- Build ID: `ekCeUfdXZrOzvZQM8cOtF`
- PWA price logic chunk: `0j2-0mh2v0hxt.v20260625-1c-prices.js`

## Safety Rules

- Do not commit `.env`, tokens, passwords, live `storage/`, user data or orders.
- Do not use `/opt/lumera/src` as truth without comparing against production/golden first.
- Work through staging before production.
- If JS/CSS runtime chunks change, use a new chunk URL/hash to avoid stale iPhone/PWA immutable cache.
- For data/1C/price fixes, do not change UI/CSS/layout files.

See `docs/WORKFLOW.md` for the recommended branch, commit and deploy process.

