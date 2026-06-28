# Safe Work Process

## Recommended Model

Use GitHub as the history/audit layer and the server backup/golden system as the deploy/rollback layer.

For every task:

1. Create a small GitHub branch from `main`.
2. Make one focused change only.
3. Commit in small logical steps.
4. Deploy first to staging.
5. Verify desktop, mobile and PWA/cache-sensitive flows.
6. Promote to production only after staging is clean.
7. Tag or merge the final known-good state.

## Branch Naming

Use short, scoped names:

- `fix/1c-prices`
- `fix/catalog-scroll-mobile`
- `fix/pwa-cache-chunk`
- `data/hide-categories`
- `infra/backup-script`

Avoid mixing unrelated changes in one branch.

## Commit Style

Prefer small commits that explain intent:

- `fix: separate retail and wholesale prices`
- `fix: preserve hidden categories during 1c import`
- `test: add price resolver regression check`
- `docs: document 1c price type mapping`

This makes it possible to use:

- `git log --oneline --graph`
- `git show <commit>`
- `git diff <old>..<new>`
- `git bisect`
- `git revert <commit>`

## Deployment Flow

Server-side flow remains:

1. Create backup:

```bash
/opt/garmoniyaplus/bin/gp-backup-now.sh before-task-NAME
```

2. Apply changes to staging container/image.

3. Verify staging:

```bash
/opt/garmoniyaplus/bin/gp-status.sh
```

Check:

- `/`
- `/catalog`
- several categories
- several product pages
- mobile viewport
- PWA/cache behavior if JS/CSS/service worker changed

4. Commit candidate image:

```bash
docker commit garmoniyaplus-staging lumera-app:candidate-NAME
```

5. Promote:

```bash
/opt/garmoniyaplus/bin/gp-promote-image.sh lumera-app:candidate-NAME
```

6. Verify production.

7. Create/update golden only after production is verified.

## When Something Breaks After Many Iterations

Use both histories:

- GitHub tells what code changed.
- Server backups/golden tell what runtime was actually deployed.

Recommended debug sequence:

1. Identify the first bad symptom and URL.
2. Compare current branch against last good tag/commit:

```bash
git diff LAST_GOOD..HEAD
```

3. If the cause is not obvious, run:

```bash
git bisect start
git bisect bad
git bisect good LAST_GOOD
```

4. If production must be restored quickly, use server golden rollback first, then investigate in GitHub.

5. Prefer `git revert <bad_commit>` over rewriting history after a branch is pushed.

## Tags

Create tags for verified production states:

```bash
git tag prod-YYYYMMDD-short-name
git push origin prod-YYYYMMDD-short-name
```

Examples:

- `prod-20260628-baseline`
- `prod-20260625-1c-prices`

Tags are useful when you need a stable comparison point months later.

## Pull Requests

Even when working alone, use PRs for non-trivial changes:

- one PR per task;
- include URLs checked;
- include staging result;
- include whether PWA cache was touched;
- include rollback plan.

This creates a searchable decision log.

## Practical Rule

The safest unit of work is:

one task -> one branch -> several small commits -> staging -> production -> tag.

