# Axi Sports Management App (`axi-sports-app`)

Axi Sports Management Application — a Quasar + Vue 3 + TypeScript multi-client
skeleton for sports venue / course / member management scenarios, with an
optional Capacitor Android shell. This repository is the canonical home of
the Web client and the Capacitor wrapper; the backend lives in `backend/`
and is currently a placeholder.

- **Owner**: solo owner (see `docs/OWNERS.md` for current contact)
- **Canonical path**: `/Volumes/code/workspace/projects/axi-sports-management-app`
- **Workspace position**: `projects/axi-*` (Axi-prefixed project)
- **Product name**: `Axi Sports` (`package.json#productName`)

## Tech stack

- Quasar 2 (`@quasar/app-vite`) + Vue 3 + TypeScript
- Pinia for state, Vue Router, Vue I18n
- ESLint flat config + Prettier
- Capacitor 6 Android shell under `src-capacitor/`

## Layout

```text
src/                   # Quasar entry (App.vue, boot, components, pages, router, stores, i18n, layouts)
src/i18n/              # Vue I18n resources; currently en-US only
src-capacitor/         # Capacitor Android shell
backend/               # Backend placeholder (skeleton only)
frontend/              # Legacy public/ static assets, kept alongside src/
docs/                  # Project docs and project-docs.manifest.json
public/                # Public static assets
quasar.config.ts       # Quasar build / boot / css config
eslint.config.js       # Flat ESLint config
package.json           # Scripts: dev / build / lint / format
```

## Install

```bash
pnpm install   # or: yarn / npm install
```

## Run

```bash
pnpm dev       # quasar dev
```

## Build

```bash
pnpm build     # quasar build
```

## Lint / format

```bash
pnpm lint
pnpm format
```

## Verify

```bash
pnpm install
pnpm lint
pnpm build
pnpm exec vue-tsc --noEmit   # optional
```

## Documentation map

See `INDEX.md` for the canonical document map, and `AGENTS.md` for root
agent rules, boundaries, and the local doc read order. `PRD.md` and `TDD.md`
define the product and test scope. `TODO.md`, `MILESTONE.md`, and
`CHANGELOG.md` track work and history.
