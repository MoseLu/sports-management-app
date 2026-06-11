# Changelog

All notable changes to `axi-sports-management-app` are recorded here. The
format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
where applicable (this repository is currently a `0.0.x` skeleton).

## [Unreleased]

### Added
- Root documentation suite aligned with the workspace deep-init-pro standard:
  `AGENTS.md`, `CHANGELOG.md`, `TODO.md`, `MILESTONE.md`, `INDEX.md`,
  `PRD.md`, `TDD.md`, plus `README.zh-CN.md` and the existing `README.md`.
- Root-level i18n plan documented in `TDD.md` and `INDEX.md`; `src/i18n/`
  remains `en-US` only until a real Chinese locale is added.

### Notes
- This is a doc-only release; no functional change to the Quasar / Capacitor
  app is introduced.

## [0.0.1] - 2025-04-25

### Added
- Initial Quasar + Vue 3 + TypeScript skeleton.
- Pinia stores, Vue Router, Vue I18n with `en-US` bundle.
- ESLint flat config and Prettier setup.
- Capacitor Android shell under `src-capacitor/`.
- Backend skeleton under `backend/`.
