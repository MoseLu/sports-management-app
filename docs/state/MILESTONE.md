# Milestone — Axi Sports Management App

> Evidence-backed milestone snapshot for the Quasar + Vue 3 + Capacitor
> sports management application skeleton. Long-form history lives in
> `CHANGELOG.md`; this file is the current status dashboard.

Last updated: 2026-06-08

## Current Milestone (M-CURRENT)

**Title**: Doc suite alignment with the workspace deep-init-pro standard.

**Goal**: bring the root documentation suite to the same shape as other
Axi-prefixed projects (root-level `AGENTS.md`, `CHANGELOG.md`, `TODO.md`,
`MILESTONE.md`, `INDEX.md`, `PRD.md`, `TDD.md`, `README.md`, `README.zh-CN.md`)
without changing the Quasar / Capacitor app behavior.

**Status**: in progress (this batch).

**Evidence anchors**:
- This file
- `CHANGELOG.md` Unreleased section
- `docs/project-docs.manifest.json` (status `legacy` will be moved to `active`
  once the doc suite exists; see TODO)

**Stop condition**: all 9 required root docs exist; `pnpm lint && pnpm build`
passes; `docs/project-docs.manifest.json` is parseable.

## Milestone (M-*)

- **M-0 — Initial skeleton** (2025-04-25): Quasar + Vue 3 + TypeScript + Pinia + Vue I18n + Capacitor Android shell + backend placeholder. Status: closed.
- **M-CURRENT — Doc suite alignment** (2026-06-08): root docs aligned with the deep-init-pro standard. Status: in progress (this batch).

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| `src/i18n/index.ts` desync from `quasar.config.ts#boot` | Keep `i18n` boot file in sync; lint via `pnpm build` |
| `docs/project-docs.manifest.json` claims docs that do not exist | Update manifest status to `active` only after the doc suite is real |
| Backend placeholder grows into a real backend without owner sign-off | Treat `backend/` as a placeholder; require owner sign-off before adding a contract |

## Change Log

- 2026-06-08: initial `MILESTONE.md` created alongside the deep-init docs suite pass.
