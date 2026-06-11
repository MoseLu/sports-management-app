# Axi Sports Management App — Product Requirements Document (PRD)

> Product scope for the Quasar + Vue 3 + Capacitor sports management
> application skeleton. This PRD is intentionally compact because the
> current repository is a skeleton; the PRD is the place to capture
> future scope before implementation.

Last updated: 2026-06-08

## 1. Identity

- **Product name**: Axi Sports
- **Working short name**: `axi-sports-app`
- **Owner**: solo owner (`1208136885@qq.com`)
- **Canonical path**: `/Volumes/code/workspace/projects/axi-sports-management-app`
- **Workspace position**: `projects/axi-*` (Axi-prefixed project)
- **Public surface**:
  - Web SPA built by Quasar
  - Optional Capacitor Android wrapper under `src-capacitor/`
  - No public API yet; the backend is a placeholder

## 2. Primary Users

| Persona | Goal | Surface |
|---|---|---|
| Sports venue operator | Manage venue / court / class schedule | Web SPA (planned) |
| Coach | Schedule classes and view member lists | Web SPA (planned) |
| Member | Browse classes, register, check-in | Web SPA + Android (planned) |
| Admin | Manage venue, coach, and member entities | Web SPA (planned) |

The repository is a **skeleton**: the personas above are anticipated
rather than implemented. The PRD is the place to grow them.

## 3. Functional Scope (in scope for the skeleton)

1. Quasar 2 + Vue 3 + TypeScript SPA scaffold.
2. Pinia state stores, Vue Router, Vue I18n.
3. ESLint flat config + Prettier.
4. Capacitor Android shell under `src-capacitor/`.
5. Root documentation suite aligned with the workspace deep-init-pro standard.
6. Backend placeholder under `backend/` (no real contract yet).

## 4. Out of Scope / Non-Goals

- No real backend service; `backend/` is a placeholder.
- No production deployment target yet; this is a local development skeleton.
- No multi-tenant isolation; this is a single-owner skeleton.
- The i18n bundle is `en-US` only. Adding a real `zh-CN` is tracked under
  `TODO.md` `REQ-SPORTS-P2-002`.

## 5. Acceptance Criteria

| AC ID | Statement | Verifier |
|---|---|---|
| `PRD-AC-001` | All 9 root documents exist and are parseable. | doc integrity check (see `TDD.md` verification) |
| `PRD-AC-002` | `pnpm lint && pnpm build` exit 0. | `pnpm lint && pnpm build` |
| `PRD-AC-003` | `src/i18n/index.ts` is the only place that registers locales. | code review of `src/i18n/index.ts` |
| `PRD-AC-004` | Capacitor Android shell installs cleanly. | `cd src-capacitor && pnpm install` |
| `PRD-AC-005` | Backend placeholder does not introduce a real contract without owner sign-off. | owner sign-off recorded in `CHANGELOG.md` |

## 6. User Stories

- **US-OPS-1**: As an Axi operator, I can run `pnpm dev` and see the Quasar dev server come up.
- **US-OPS-2**: As an Axi operator, I can run `pnpm build` and get a production SPA bundle.
- **US-I18N-1** (future): As a Chinese-speaking user, I can switch the UI to `zh-CN` once a real locale is added.

## 7. Open Product Questions

- When does the `backend/` placeholder become a real backend? (Currently deferred.)
- Does the Capacitor Android shell get a real iOS counterpart? (Currently Android-only.)
- Will the i18n bundle add `zh-CN` as a primary locale? (Tracked as `REQ-SPORTS-P2-002`.)

## 8. Change Control

- Material scope changes update this PRD and `CHANGELOG.md` in the same commit.
- The owner has final authority on promotion from `dev` to `main` and on remote release.

---

*This PRD is a living document. Preserve all manual sections after `<!-- MANUAL -->` markers.*
