# Axi Sports Management App — Test / Technical Design Document (TDD)

> Companion to `PRD.md`. Describes the architecture assumptions, test
> strategy, verification commands, and risk cases for the Quasar + Vue 3
> + Capacitor sports management application skeleton.

Last updated: 2026-06-08

## 1. Architecture Assumptions

### 1.1 Runtime topology

```
Browser / Android shell
   ↓
Quasar SPA (Vite)
   ↓
Pinia stores
   ↓
(optional) backend service
   ↓
(planned) venue / class / member data
```

The current skeleton has no real backend; `backend/` is a placeholder.

### 1.2 Frontend assumptions

- Vue 3 + TypeScript SPA built with Quasar 2 (`@quasar/app-vite`).
- Pinia for state, Vue Router for routing, Vue I18n for translations.
- ESLint flat config + Prettier.
- Capacitor 6 Android shell under `src-capacitor/`.

### 1.3 i18n assumptions

- `src/i18n/index.ts` is the **only** module that registers locales.
- `quasar.config.ts#boot` includes `i18n` so the bundle is wired at boot.
- The current bundle is `en-US` only; `zh-CN` is a future addition
  (tracked as `REQ-SPORTS-P2-002`).

### 1.4 Boundary contracts

- The repository is a Quasar + Capacitor project, not a service. There are
  no service-level contracts.
- The Web SPA and the Capacitor Android shell share the same `src/`
  bundle; the Capacitor `www/` is built from `src/`.

## 2. Test Strategy

### 2.1 Layers

| Layer | Tooling | Owner |
|---|---|---|
| Lint | ESLint flat config (`eslint.config.js`) | `package.json#scripts.lint` |
| Typecheck | `vue-tsc --noEmit` | optional |
| Build | Quasar Vite build (`quasar build`) | `package.json#scripts.build` |
| Format | Prettier | `package.json#scripts.format` |
| Doc integrity | `test -f` loop on root docs | this TDD |

### 2.2 Mandatory gates before commit

1. `pnpm install`
2. `pnpm lint`
3. `pnpm build`
4. Doc integrity check (see `Verification Commands`)

A unit-test framework is not yet wired. The repo's `pnpm test` is a
placeholder (`echo "No test specified" && exit 0`).

## 3. Acceptance Criteria → Test Map

| AC ID | Test(s) |
|---|---|
| `PRD-AC-001` | doc integrity loop (see `Verification Commands`) |
| `PRD-AC-002` | `pnpm lint && pnpm build` |
| `PRD-AC-003` | code review of `src/i18n/index.ts` + `quasar.config.ts#boot` |
| `PRD-AC-004` | `cd src-capacitor && pnpm install` |
| `PRD-AC-005` | owner sign-off recorded in `CHANGELOG.md` |

## 4. Verification Commands

```bash
# Install
pnpm install

# Lint / build
pnpm lint
pnpm build

# Typecheck (optional)
pnpm exec vue-tsc --noEmit

# Format
pnpm format

# Capacitor Android smoke
cd src-capacitor && pnpm install

# Doc integrity
for f in README.md README.zh-CN.md AGENTS.md CHANGELOG.md TODO.md \
         MILESTONE.md INDEX.md PRD.md TDD.md; do
  test -f "$f" || exit 1
done
node -e "JSON.parse(require('fs').readFileSync('docs/project-docs.manifest.json','utf8'))"
```

## 5. Risk Cases

| Risk | Trigger | Mitigation | Test / Drill |
|---|---|---|---|
| Quasar build fails on i18n registration | Locale file moved or renamed | Keep `src/i18n/index.ts` as the only registration point; run `pnpm build` before commit | `pnpm build` |
| Capacitor Android install fails | Capacitor version drift | Pin Capacitor version in `src-capacitor/package.json` | `cd src-capacitor && pnpm install` |
| Backend placeholder grows silently | Operator adds a real route under `backend/` | Owner sign-off required before adding a contract | `CHANGELOG.md` sign-off record |
| `zh-CN` locale copy is half-finished | New locale files added without registration | Keep registration in `src/i18n/index.ts` and require `pnpm build` to pass | `pnpm build` |

## 6. Out-of-Scope for TDD

- E2E browser tests (no framework adopted yet).
- Android instrumented tests (requires Android SDK; not wired in CI).
- Performance benchmarks.

---

*This TDD is auto-summary friendly. The owner preserves any manual `<!-- MANUAL -->` blocks at the bottom; refresh only the test map and verification commands as the suite evolves.*
