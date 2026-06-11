# Axi Sports Management App — Test / Technical Design Document (TDD)

> Companion to `PRD.md`. Describes the architecture assumptions, test
> strategy, verification commands, and risk cases for the Vite + React 18
> + Capacitor sports management application skeleton.

Last updated: 2026-06-11

## 1. Architecture Assumptions

### 1.1 Runtime topology

```
Browser / Android shell
   ↓
Vite + React 18 SPA
   ↓
Zustand stores
   ↓
(optional) backend service
   ↓
(planned) venue / class / member data
```

The current skeleton has no real backend; `backend/` is a placeholder.

### 1.2 Frontend assumptions

- Vite 5 + React 18 + TypeScript 5 SPA scaffold.
- React Router v6 routing (`createHashRouter` for Capacitor WebView;
  toggleable to `createBrowserRouter` via `VITE_USE_BROWSER_ROUTER=1`).
- Ant Design 5 as the UI component library, themed via
  `ConfigProvider` in `src/main.tsx`.
- Zustand 4 for state stores (e.g. `useCounterStore` with devtools
  name `axi-counter`).
- axios for HTTP, with a single shared client at `src/lib/axios.ts`.
- ESLint flat config + Prettier.
- Capacitor 7 Android shell under `src-capacitor/`.

### 1.3 i18n assumptions

- `src/i18n/index.ts` is the **only** module that registers i18next.
  It is the single source of truth for the i18n registration contract
  (PRD-AC-003).
- The current bundle is `en-US` only; `zh-CN` is a future addition
  (tracked as `REQ-SPORTS-P2-002`).
- `src/main.tsx` imports `./i18n` for its side effects before rendering
  `<App/>`; it does not call `i18n.use()` / `i18n.init()` itself.

### 1.4 Boundary contracts

- The repository is a Vite + Capacitor project, not a service. There are
  no service-level contracts.
- The Web SPA and the Capacitor Android shell share the same `src/`
  bundle; the Capacitor `webDir` (`../dist` in `src-capacitor/capacitor.config.json`)
  points at the Vite build output at the repository root.

## 2. Test Strategy

### 2.1 Layers

| Layer | Tooling | Owner |
|---|---|---|
| Lint | ESLint flat config (`eslint.config.js`) | `package.json#scripts.lint` |
| Typecheck | `tsc --noEmit` | `package.json#scripts.typecheck` |
| Build | Vite build (`vite build`) | `package.json#scripts.build` |
| Format | Prettier | `package.json#scripts.format` |
| Doc integrity | `test -f` loop on root docs | this TDD |

### 2.2 Mandatory gates before commit

1. `pnpm install`
2. `pnpm typecheck`
3. `pnpm lint`
4. `pnpm build`
5. Doc integrity check (see `Verification Commands`)

A unit-test framework is not yet wired. The repo has no `pnpm test`
script at present.

## 3. Acceptance Criteria → Test Map

| AC ID | Test(s) |
|---|---|
| `PRD-AC-001` | doc integrity loop (see `Verification Commands`) |
| `PRD-AC-002` | `pnpm lint && pnpm build` |
| `PRD-AC-003` | `grep -rE "i18n\\.use\|initReactI18next" src/` returns only `src/i18n/index.ts` |
| `PRD-AC-004` | `cd src-capacitor && pnpm install` |
| `PRD-AC-005` | owner sign-off recorded in `CHANGELOG.md` |

## 4. Verification Commands

```bash
# Install
pnpm install

# Typecheck
pnpm typecheck

# Lint / build
pnpm lint
pnpm build

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
| Vite build fails on i18n registration | Locale file moved or renamed | Keep `src/i18n/index.ts` as the only registration point; run `pnpm build` before commit | `pnpm build` |
| Capacitor Android install fails | Capacitor version drift | Pin Capacitor version in `src-capacitor/package.json` | `cd src-capacitor && pnpm install` |
| `cap sync` copies stale assets | `webDir` resolved from the wrong cwd | `cap:sync` script `cd`s into `src-capacitor/` before invoking `cap sync android`; `webDir: "../dist"` is relative to that cwd | `pnpm build && pnpm cap:sync` |
| i18next double-initialised under HMR | Vite HMR re-runs `i18n.init` | Guard with `if (!i18n.isInitialized)` in `src/i18n/index.ts` | `pnpm dev` smoke |
| Backend placeholder grows silently | Operator adds a real route under `backend/` | Owner sign-off required before adding a contract | `CHANGELOG.md` sign-off record |
| `zh-CN` locale copy is half-finished | New locale files added without registration | Keep registration in `src/i18n/index.ts` and require `pnpm build` to pass | `pnpm build` |

## 6. Out-of-Scope for TDD

- E2E browser tests (no framework adopted yet).
- Android instrumented tests (requires Android SDK; not wired in CI).
- Performance benchmarks.

---

*This TDD is auto-summary friendly. The owner preserves any manual `<!-- MANUAL -->` blocks at the bottom; refresh only the test map and verification commands as the suite evolves.*
