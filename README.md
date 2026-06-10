# Axi Sports Management App (`axi-sports-app`)

Axi Sports Management Application — a Vite + React 18 + TypeScript
multi-client skeleton for sports venue / course / member management
scenarios, with an optional Capacitor Android shell. This repository is
the canonical home of the Web client and the Capacitor wrapper; the
backend lives in `backend/` and is currently a placeholder.

- **Owner**: solo owner (`1208136885@qq.com`)
- **Canonical path**: `/Volumes/code/workspace/projects/axi-sports-management-app`
- **Workspace position**: `projects/axi-*` (Axi-prefixed project)
- **Product name**: `Axi Sports` (`package.json#productName`)

## Tech stack

- Vite 5 + React 18 + TypeScript 5
- React Router v6 (`createHashRouter` for the Capacitor WebView, toggleable
  to `createBrowserRouter` via `VITE_USE_BROWSER_ROUTER=1`)
- Ant Design 5 + `@ant-design/icons`
- Zustand 4 for state
- i18next + react-i18next + `i18next-browser-languagedetector`
- ESLint flat config + Prettier
- Capacitor 7 Android shell under `src-capacitor/`
- axios for HTTP

## Layout

```text
src/                   # Vite + React entry (main.tsx, App.tsx, components, pages, layouts, router, stores, i18n, lib, styles, types)
src/i18n/              # i18next resources; en-US only currently
src/lib/               # Cross-cutting modules (axios client)
src/types/             # Shared TypeScript types
src-capacitor/         # Capacitor Android shell
backend/               # Backend placeholder (skeleton only)
frontend/              # Legacy public/ static assets, kept alongside src/
docs/                  # Project docs and project-docs.manifest.json
public/                # Public static assets
vite.config.ts         # Vite build / dev config
eslint.config.js       # Flat ESLint config
tsconfig.json          # TypeScript app config (extends references to tsconfig.node.json)
package.json           # Scripts: dev / build / preview / lint / format / typecheck
```

## Install

```bash
pnpm install   # or: yarn / npm install
```

## Run

```bash
pnpm dev       # vite dev server (http://localhost:9000)
pnpm preview   # vite preview of the production build
```

## Build

```bash
pnpm build     # tsc -b && vite build, output in dist/
```

## Lint / format

```bash
pnpm lint
pnpm format
```

## Verify

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

## Capacitor (Android)

```bash
# one-time setup
cd src-capacitor && pnpm install

# build the web bundle and sync it into the Android shell
pnpm build && pnpm cap:sync

# open the Android project in Android Studio
pnpm cap:open:android
```

The Capacitor `webDir` (`../dist`) is resolved relative to
`src-capacitor/`, so it points at the Vite build output at the
repository root.

## Documentation map

See `INDEX.md` for the canonical document map, and `AGENTS.md` for root
agent rules, boundaries, and the local doc read order. `PRD.md` and
`TDD.md` define the product and test scope. `TODO.md`, `MILESTONES.md`,
and `CHANGELOG.md` track work and history.
