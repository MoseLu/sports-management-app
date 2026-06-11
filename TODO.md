# TODO — Axi Sports Management App

> Prioritized task list for the Quasar + Vue 3 + Capacitor sports management
> application skeleton. P0/P1 items include a requirement ID and at least
> one test case.

Last updated: 2026-06-08

## P0 — Must ship

### REQ-SPORTS-P0-001 — Root doc suite exists and is parseable
- **Source AC**: `PRD-AC-001`
- **Test case**: `for f in README.md README.zh-CN.md AGENTS.md CHANGELOG.md TODO.md MILESTONE.md INDEX.md PRD.md TDD.md; do test -f "$f" || exit 1; done && node -e "JSON.parse(require('fs').readFileSync('docs/project-docs.manifest.json','utf8'))"`; expected: exits 0.
- **Evidence**: doc integrity check output.

### REQ-SPORTS-P0-002 — Quasar build + lint clean
- **Source AC**: `PRD-AC-002`
- **Test case**: `pnpm install && pnpm lint && pnpm build`; expected: lint and build both exit 0.
- **Evidence**: command output.

## P1 — Should ship next

### REQ-SPORTS-P1-001 — i18n locale registration contract
- **Source AC**: `PRD-AC-003`
- **Test case**: read `src/i18n/index.ts`; expected: every locale file is registered in the index module and the boot file `quasar.config.ts#boot` includes `i18n`. The Quasar Vite build also fails fast if a registered locale file is missing.
- **Evidence**: code review + `pnpm build` output.

### REQ-SPORTS-P1-002 — Pinia store lint + typecheck
- **Source AC**: `PRD-AC-002`
- **Test case**: `pnpm exec vue-tsc --noEmit`; expected: 0 type errors.
- **Evidence**: typecheck output.

### REQ-SPORTS-P1-003 — Capacitor Android shell builds
- **Source AC**: `PRD-AC-004`
- **Test case**: `cd src-capacitor && pnpm install`; expected: 0 install errors. (Full Android build requires Android SDK; smoke check is `pnpm install` only until a CI runner with Android SDK is configured.)
- **Evidence**: install output.

## P2 — Future hardening

### REQ-SPORTS-P2-001 — Visual regression suite
- Status: not started; no snapshot framework adopted.

### REQ-SPORTS-P2-002 — Add `zh-CN` locale to `src/i18n/`
- Status: not started; current bundle is `en-US` only. Add `zh-CN/index.ts`, register in `src/i18n/index.ts`, and update `quasar.config.ts#boot` if needed.

### REQ-SPORTS-P2-003 — Backend placeholder growth
- Status: not started; `backend/` is a skeleton. No active consumer.
