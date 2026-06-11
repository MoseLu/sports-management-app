# Document Index — Axi Sports Management App

> Canonical document map for `projects/axi-sports-management-app`. Read
> `AGENTS.md` for the agent rules and edit boundaries before editing any
> file in this list.

Last updated: 2026-06-11

## Root documents

| File | Purpose | Owner |
|---|---|---|
| `README.md` | English project entrypoint | owner |
| `README.zh-CN.md` | Simplified Chinese counterpart | owner |
| `AGENTS.md` | Root agent rules, boundaries, verification, doc read order | owner |
| `CHANGELOG.md` | Keep-a-Changelog style release history | owner |
| `TODO.md` | P0/P1/P2 task list with requirement IDs and test cases | owner |
| `MILESTONE.md` | Evidence-backed milestone status snapshot | owner |
| `PRD.md` | Product requirements, users, acceptance criteria, non-goals | owner |
| `TDD.md` | Test/technical design, architecture assumptions, verification | owner |
| `INDEX.md` | This file | owner |
| `SECURITY.md` | Private operator channel, secret-handling policy | owner |

## Subproject layout

| Path | Purpose | Notes |
|---|---|---|
| `src/` | Vite + React entry (`main.tsx`, `App.tsx`, components, pages, layouts, router, stores, i18n, lib, styles, types) | active |
| `src/i18n/` | i18next resources | en-US only currently |
| `src/lib/` | Cross-cutting modules (axios client) | active |
| `src/types/` | Shared TypeScript types | active |
| `src-capacitor/` | Capacitor Android shell | active |
| `backend/` | Backend placeholder skeleton | not a real backend yet |
| `frontend/` | Legacy public/ static assets | kept alongside `src/` |
| `docs/` | Project docs and `project-docs.manifest.json` | active |

## Source-of-truth resolution order

1. `README.md` / `README.zh-CN.md` for entrypoint narrative
2. `PRD.md` for product scope; `TDD.md` for technical design
3. `AGENTS.md` for agent rules and edit boundaries
4. `MILESTONE.md` for current status; `CHANGELOG.md` for shipped history
5. `TODO.md` for active work

## Update discipline

- Update `INDEX.md` whenever a new top-level document is added or its owner changes.
- Update `docs/project-docs.manifest.json` alongside `INDEX.md` so machine-readable consumers stay aligned.
- Material changes in this index should be reflected in `CHANGELOG.md`.
