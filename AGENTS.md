# Axi Sports Management App — Project Root AGENTS

> Root-level agent rules for `projects/axi-sports-management-app`. This
> file is the first stop for any agent entering the repository. Read in
> order: this file → `README.md` → `INDEX.md` → `PRD.md` → `TDD.md` →
> `TODO.md` → `MILESTONE.md` → `CHANGELOG.md` → `docs/project-docs.manifest.json`.

Last updated: 2026-06-11

## Scope

- **Applies to**: every agent (Codex, Cursor, automation scanners, doc
  audit subagents) entering `projects/axi-sports-management-app` for the
  first time.
- **Does not apply to**: workspace-level `references/*` and
  `infra/axi-workspace-governance/*` (those are maintained by the
  workspace governance project).
- **Read order** (recommended): this file → `README.md` →
  `docs/project-docs.manifest.json` → subproject paths.

## Project Boundary

Axi Sports Management App is a **Vite + React 18 + Capacitor** multi-client
sports management application skeleton. The primary product surface is the
Web SPA; the Capacitor Android shell wraps the same bundle.

| Path | In scope? | Notes |
|---|---|---|
| `src/` | yes | Vite + React entry: `main.tsx`, `App.tsx`, components, pages, layouts, router, stores, i18n, lib, styles, types |
| `src/i18n/` | yes | i18next resources; en-US only currently |
| `src/lib/` | yes | Cross-cutting modules (axios client) |
| `src/types/` | yes | Shared TypeScript types |
| `src-capacitor/` | yes | Capacitor Android shell |
| `backend/` | yes (placeholder) | Backend skeleton, not a real backend |
| `frontend/` | yes (legacy) | Early public/ static assets, kept alongside `src/` |
| `docs/` | yes | Project docs and manifest |
| `vite.config.ts`, `eslint.config.js`, `package.json`, `tsconfig.json`, `tsconfig.node.json` | yes | Build / quality gate config |
| `node_modules/`, `dist/`, `.codegraph/` | no | Build / OMX runtime state, never commit |

## Authoritative Sources

| Topic | Source of truth |
|---|---|
| Entrypoint narrative | `README.md` / `README.zh-CN.md` |
| Product scope | `PRD.md` |
| Test / technical design | `TDD.md` |
| Active work | `TODO.md` |
| Milestone status | `MILESTONE.md` |
| History | `CHANGELOG.md` |
| Security policy | `SECURITY.md` |
| Document map | `INDEX.md` |
| Vite + React entry | `src/main.tsx` + `src/App.tsx` + `src/router/index.tsx` |
| Capacitor mobile config | `src-capacitor/capacitor.config.json`, `src-capacitor/android/` |
| Build / quality gate | `vite.config.ts`, `eslint.config.js`, `package.json#scripts` |

**Priority when in conflict**: this file > `README.md` > `PRD.md` >
`TDD.md` > `TODO.md` > `MILESTONE.md` > `CHANGELOG.md` > `docs/project-docs.manifest.json`.

## Cross-Project Boundary

- **Do not translate** `references/*`, `references/archives/*`,
  `infra/axi-workspace-governance/*`, or `infra/axi-workspace-governance/temp/*`.
- **Do not copy** content from other projects' `README.md` / `AGENTS.md` / ADR.
- **Do not fake i18n mirrors**: the current bundle is `en-US` only. Add
  `zh-CN` only when there is a real `src/i18n/zh-CN/` directory.
- **Do not turn `backend/` into a real backend** without owner sign-off.
- **Do not call `i18n.use()` / `i18n.init()` outside `src/i18n/index.ts`**.
  That module is the single i18next registration point (PRD-AC-003).

## Verification

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

Optional:

```bash
pnpm format
pnpm dev
```
