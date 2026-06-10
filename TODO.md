# TODO — Axi Sports Management App

> Prioritized task list for the Vite + React 18 + Capacitor sports
> management application skeleton. P0/P1 items include a requirement ID
> and at least one test case.

Last updated: 2026-06-11

## P0 — Must ship

### REQ-SPORTS-P0-001 — Root doc suite exists and is parseable
- **Source AC**: `PRD-AC-001`
- **Test case**: `for f in README.md README.zh-CN.md AGENTS.md CHANGELOG.md TODO.md MILESTONES.md INDEX.md PRD.md TDD.md; do test -f "$f" || exit 1; done && node -e "JSON.parse(require('fs').readFileSync('docs/project-docs.manifest.json','utf8'))"`; expected: exits 0.
- **Evidence**: doc integrity check output.

### REQ-SPORTS-P0-002 — Vite build + lint clean
- **Source AC**: `PRD-AC-002`
- **Test case**: `pnpm install && pnpm lint && pnpm build`; expected: lint and build both exit 0.
- **Evidence**: command output.

## P1 — Should ship next

### REQ-SPORTS-P1-001 — i18next locale registration contract
- **Source AC**: `PRD-AC-003`
- **Test case**: `grep -rE "i18n\.use|initReactI18next" src/`; expected: only `src/i18n/index.ts` matches. The module is the single i18next registration point; no other module may call `i18n.use()` or `i18n.init()`.
- **Evidence**: grep output + code review of `src/i18n/index.ts`.

### REQ-SPORTS-P1-002 — TypeScript typecheck
- **Source AC**: `PRD-AC-002`
- **Test case**: `pnpm typecheck`; expected: 0 type errors.
- **Evidence**: typecheck output.

### REQ-SPORTS-P1-003 — Capacitor Android shell builds
- **Source AC**: `PRD-AC-004`
- **Test case**: `cd src-capacitor && pnpm install`; expected: 0 install errors. (Full Android build requires Android SDK; smoke check is `pnpm install` only until a CI runner with Android SDK is configured.)
- **Evidence**: install output.

### REQ-SPORTS-P1-004 — Capacitor webDir sync
- **Source AC**: `PRD-AC-004` (extension)
- **Test case**: `pnpm build && pnpm cap:sync`; expected: Vite output is copied into `src-capacitor/android/app/src/main/assets/public/`. The `webDir: "../dist"` in `src-capacitor/capacitor.config.json` must resolve to the repository-root `dist/` directory.
- **Evidence**: sync log + `ls src-capacitor/android/app/src/main/assets/public/index.html`.

## P2 — Future hardening

### REQ-SPORTS-P2-001 — Visual regression suite
- Status: not started; no snapshot framework adopted.

### REQ-SPORTS-P2-002 — Add `zh-CN` locale to `src/i18n/`
- Status: not started; current bundle is `en-US` only. Add `zh-CN/index.ts`, register in `src/i18n/index.ts`, and import only after a real resource file exists (AGENTS.md hard rule: no fake i18n mirrors).

### REQ-SPORTS-P2-003 — Backend placeholder growth
- Status: not started; `backend/` is a skeleton. No active consumer.

### REQ-SPORTS-P2-004 — iOS Capacitor shell
- Status: not started; only the Android shell is wired. Adding iOS would require `cap add ios` and is gated on product scope.
