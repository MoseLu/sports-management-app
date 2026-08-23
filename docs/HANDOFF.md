# Axi Sports Management App Handoff

- Project: `axi-sports-management-app`
- Path: `/Volumes/code/workspace/projects/axi-sports-management-app`
- Owner: `Axi Sports solo owner`
- Readiness: `verified`
- Purpose: Quasar and Vue 3 sports-management application skeleton with Pinia, Vue Router, Vue I18n, and a Capacitor Android wrapper; the backend directory is only a placeholder.

## 90-Second Read Order

1. `AGENTS.md`
2. `README.md`
3. `INDEX.md`

## Entrypoints

- `src/App.vue`: Root Quasar component that renders the active Vue Router view.
- `src/router/index.ts`: Create the SPA router and select hash, history, or memory navigation.
- `quasar.config.ts`: Declare boot modules, build behavior, i18n resources, lint checking, and Capacitor integration.
- `src-capacitor/android/app/src/main/assets/capacitor.config.json`: Generated Android wrapper configuration for the shared Quasar bundle.

## Commands

- Setup: `pnpm install`
- Start: `pnpm dev`
- Health: `curl -fsS http://127.0.0.1:9000/`
- Verify: `pnpm lint && pnpm build`
- Smoke: `pnpm lint && pnpm build`

## Environment

- Runtimes: `Node.js 18, 20, 22, 24, 26, or 28`, `pnpm 10.7.1`, `Modern browser`, `Android toolchain only for native Capacitor builds`
- Services: `Quasar Vite development server`, `No real backend service is currently defined`
- `VUE_ROUTER_MODE`: required=no, secret=no, source=Quasar build environment; defaults to the configured hash mode.
- `VUE_ROUTER_BASE`: required=no, secret=no, source=Optional router base supplied by the Quasar build environment.
- `PORT`: required=no, secret=no, source=Optional SSR production-port override; the current primary surface is SPA mode.

## Contracts

- Provides: `Quasar Web SPA bundle`, `Capacitor Android wrapper for the same frontend bundle`
- Consumes: `Browser platform APIs`, `Capacitor Android runtime when building the native wrapper`
- Contract files: `quasar.config.ts`, `src/router/index.ts`, `src/i18n/index.ts`, `src/stores/index.ts`, `src-capacitor/package.json`

## Current Work

- TODO: `docs/HANDOFF.md`
- Milestone: `docs/HANDOFF.md`
- Active: Maintain a parseable, evidence-backed root documentation suite.
- Active: Keep Quasar lint and build clean.
- Active: Define future i18n, visual regression, and native-shell hardening work.
- Known failure: The unit-test script is a placeholder and no unit-test framework is wired.
- Known failure: The backend directory has no real service contract.
- Known failure: The application currently ships only the en-US locale.

## Troubleshooting

- Symptom: pnpm dev starts but the expected page is not available on port 5173.
  Diagnosis: Quasar uses its own emitted development URL and commonly defaults to port 9000.
  Resolution: Read the URL printed by pnpm dev and use the manifest health command when it is 127.0.0.1:9000.
- Symptom: The build fails after adding or renaming a locale.
  Diagnosis: src/i18n/index.ts or the Quasar i18n resource include no longer matches the locale files.
  Resolution: Register the locale only in src/i18n/index.ts, keep the i18n boot module enabled, and rerun pnpm build.
- Symptom: A native Android build cannot start.
  Diagnosis: The Capacitor wrapper requires a local Android SDK and toolchain beyond the web dependencies.
  Resolution: Verify the web bundle first, then install the src-capacitor dependencies and use an Android-enabled environment.

## Decisions And Freshness

- ADR: not recorded
- Changelog: `docs/state/CHANGELOG.md`
- Submit log: not recorded
- Last verified: `2026-08-23`
- Evidence: `Manifest v2 required-field and referenced-file check passed with 25 references present.`, `pnpm lint completed successfully.`, `pnpm build completed successfully with Quasar 2.18.1; the only warning was stale Browserslist data.`

> Generated from `docs/project-docs.manifest.json`; edit the manifest, then regenerate this file.
