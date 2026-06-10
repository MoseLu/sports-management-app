# Changelog

All notable changes to `axi-sports-management-app` are recorded here. The
format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
where applicable (this repository is currently a `0.0.x` skeleton).

## [Unreleased]

### Changed
- **BREAKING**: Migrate the frontend from Quasar 2 + Vue 3 to Vite 5 +
  React 18 + TypeScript 5 + Ant Design 5 + Zustand 4 + react-i18next +
  React Router v6. Removed `quasar.config.ts`, `postcss.config.js`,
  `src/boot/`, all `*.vue` files, and Pinia stores. Added
  `vite.config.ts`, `tsconfig.node.json`, `src/main.tsx`,
  `src/App.tsx`, `src/router/index.tsx`, `src/lib/axios.ts`,
  `src/stores/counter-store.ts`. The new entry point `src/main.tsx`
  mounts `<App/>` to `#root`.
- **BREAKING**: `pnpm dev` and `pnpm build` now invoke Vite instead of
  the Quasar CLI. Underlying commands changed; user-facing script names
  preserved.
- **BREAKING**: Pinia state is replaced by Zustand. The legacy Pinia
  store id `axi-counter` is preserved as the Zustand devtools name in
  `src/stores/counter-store.ts`.
- **BREAKING**: `vue-i18n` is replaced by `i18next` +
  `react-i18next`. `src/i18n/index.ts` is now the single registration
  point for i18next (PRD-AC-003).
- **Capacitor 7**: app renamed to `Axi Sports` and appId set to
  `com.axi.sports`. `webDir` updated to `../dist` so `pnpm cap:sync`
  copies the Vite build output into the Android shell. Add
  `cap:sync` / `cap:copy` / `cap:open:android` scripts to
  `package.json`.

### Removed
- `quasar.config.ts`, `postcss.config.js`
- `src/boot/`, `src/css/`
- All `*.vue` files (`src/App.vue`, `src/layouts/MainLayout.vue`,
  `src/pages/IndexPage.vue`, `src/pages/ErrorNotFound.vue`,
  `src/components/ExampleComponent.vue`, `src/components/EssentialLink.vue`)
- `src/router/index.ts`, `src/router/routes.ts`
- `src/stores/example-store.ts`, `src/stores/index.ts`
- Old Quasar build artifacts under `src-capacitor/www/` and
  `src-capacitor/android/app/src/main/assets/public/`

### Added
- `vite.config.ts`, `tsconfig.json` (rewritten), `tsconfig.node.json`
- `index.html` rewritten to mount `<div id="root">` and load
  `src/main.tsx`
- `src/main.tsx`, `src/App.tsx`, `src/router/index.tsx`
- `src/layouts/MainLayout.tsx` (Ant Design `Layout` / `Header` /
  `Sider` / `Menu`)
- `src/pages/IndexPage.tsx` (Zustand-backed counter + `ExampleComponent`)
- `src/pages/ErrorNotFound.tsx` (Ant Design `Result` 404)
- `src/components/ExampleComponent.tsx` (Ant Design `Card` / `List`)
- `src/stores/counter-store.ts` (Zustand store, devtools name
  `axi-counter`)
- `src/lib/axios.ts` (single shared axios client, `VITE_API_BASE` aware)
- `src/types/models.ts` (moved from `src/components/models.ts`)
- `src/i18n/index.ts` (i18next registration point, HMR-safe)
- `src/i18n/en-US/index.ts` (rewritten as i18next resources)
- `src/styles/global.css` (Ant Design baseline)
- `src/env.d.ts` (Vite env typing)
- `src-capacitor/capacitor.config.json` (project-root Capacitor config)

## [0.0.1] - 2025-04-25

### Added
- Initial Quasar + Vue 3 + TypeScript skeleton.
- Pinia stores, Vue Router, Vue I18n with `en-US` bundle.
- ESLint flat config and Prettier setup.
- Capacitor Android shell under `src-capacitor/`.
- Backend skeleton under `backend/`.
