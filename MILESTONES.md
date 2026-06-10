# Milestones — Axi Sports Management App

> Evidence-backed milestone snapshot for the Vite + React 18 + Capacitor
> sports management application skeleton. Long-form history lives in
> `CHANGELOG.md`; this file is the current status dashboard.

Last updated: 2026-06-11

## Current Milestone (M-CURRENT)

**Title**: Frontend stack migration to Vite + React 18.

**Goal**: replace the Quasar + Vue 3 frontend with a Vite + React 18 +
Ant Design 5 stack, while retaining the Capacitor 7 Android shell and
keeping all PRD-AC in scope for the new stack.

**Status**: in progress (this batch).

**Evidence anchors**:
- This file
- `CHANGELOG.md` Unreleased section
- Commit `afd2973 build: migrate frontend from Quasar+Vue3 to Vite+React18+AntD5`
- `pnpm install && pnpm typecheck && pnpm lint && pnpm build` all exit 0

**Stop condition**: `pnpm install && pnpm typecheck && pnpm lint && pnpm build` pass; `pnpm build && pnpm cap:sync` produces `src-capacitor/android/app/src/main/assets/public/index.html`; `docs/project-docs.manifest.json` is parseable and reflects the React stack.

## Milestones (M-*)

- **M-0 — Initial skeleton** (2025-04-25): Quasar + Vue 3 + TypeScript + Pinia + Vue I18n + Capacitor Android shell + backend placeholder. Status: closed.
- **M-DOCS — Doc suite alignment** (2026-06-08): root docs aligned with the deep-init-pro standard. Status: closed (the doc suite persisted through the frontend migration; this milestone is kept for history).
- **M-CURRENT — Frontend stack migration** (2026-06-11): frontend replaced with Vite + React 18 + Ant Design 5 + Zustand + react-i18next. Status: in progress (this batch).

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| `src/i18n/index.ts` is no longer the single i18next registration point | Keep `i18n.use()` / `i18n.init()` only in `src/i18n/index.ts`; verify via `grep -rE "i18n\\.use\|initReactI18next" src/` |
| `cap sync` resolves `webDir` from the wrong cwd | `cap:sync` script `cd`s into `src-capacitor/` first; `webDir: "../dist"` is relative to that cwd |
| `docs/project-docs.manifest.json` claims docs that do not exist | Update manifest `status` to `active` only after the doc suite reflects the React stack |
| Backend placeholder grows into a real backend without owner sign-off | Treat `backend/` as a placeholder; require owner sign-off before adding a contract |

## Change Log

- 2026-06-08: initial `MILESTONES.md` created alongside the deep-init docs suite pass.
- 2026-06-11: M-CURRENT updated to reflect the Vite + React 18 frontend migration; M-DOCS closed.
