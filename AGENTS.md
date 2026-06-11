# Axi Sports Management App — Project Root AGENTS

> Root-level agent rules for `projects/axi-sports-management-app`. This
> file is the first stop for any agent entering the repository. Read in
> order: this file → `README.md` → `INDEX.md` → `PRD.md` → `TDD.md` →
> `TODO.md` → `MILESTONE.md` → `CHANGELOG.md` → `docs/project-docs.manifest.json`.

Last updated: 2026-06-08

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

Axi Sports Management App is a **Quasar + Vue 3 + Capacitor** multi-client
sports management application skeleton. The primary product surface is the
Web SPA; the Capacitor Android shell wraps the same bundle.

| Path | In scope? | Notes |
|---|---|---|
| `src/` | yes | Quasar entry, Pinia stores, Vue Router, Vue I18n |
| `src/i18n/` | yes | Vue I18n resources; en-US only currently |
| `src-capacitor/` | yes | Capacitor Android shell |
| `backend/` | yes (placeholder) | Backend skeleton, not a real backend |
| `frontend/` | yes (legacy) | Early public/ static assets, kept alongside `src/` |
| `docs/` | yes | Project docs and manifest |
| `quasar.config.ts`, `eslint.config.js`, `package.json`, `tsconfig.json` | yes | Build / quality gate config |
| `node_modules/`, `.quasar/`, `.codegraph/`, `dist/` | no | Build / OMX runtime state, never commit |

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
| Quasar entry | `src/` (entry `src/App.vue`, `src/router/`, `src/stores/`, `src/i18n/index.ts`) |
| Capacitor mobile config | `src-capacitor/package.json`, `src-capacitor/android/` |
| Build / quality gate | `quasar.config.ts`, `eslint.config.js`, `package.json#scripts` |

**Priority when in conflict**: this file > `README.md` > `PRD.md` >
`TDD.md` > `TODO.md` > `MILESTONE.md` > `CHANGELOG.md` > `docs/project-docs.manifest.json`.

## Cross-Project Boundary

- **Do not translate** `references/*`, `references/archives/*`,
  `infra/axi-workspace-governance/*`, or `infra/axi-workspace-governance/temp/*`.
- **Do not copy** content from other projects' `README.md` / `AGENTS.md` / ADR.
- **Do not fake i18n mirrors**: the current bundle is `en-US` only. Add
  `zh-CN` only when there is a real `src/i18n/zh-CN/` directory.
- **Do not turn `backend/` into a real backend** without owner sign-off.

## Verification

```bash
pnpm install
pnpm lint
pnpm build
```

Optional:

```bash
pnpm format
pnpm exec vue-tsc --noEmit
```

Doc integrity check (required for doc-only commits):

```bash
for f in README.md README.zh-CN.md AGENTS.md CHANGELOG.md TODO.md \
         MILESTONE.md INDEX.md PRD.md TDD.md; do
  test -f "$f" || exit 1
done
```

- Editing `src/**` → at least `pnpm lint && pnpm build` pass.
- Editing `src/i18n/**` → at least `pnpm build` pass.
- Editing `src-capacitor/**` → at least `pnpm install` pass in `src-capacitor/`.
- Editing this file or root docs → run the doc integrity check.

## House Rules

- Do not commit OMX runtime state (`.omx/*`, `.codegraph/*`).
- Do not merge to `main`, push tags, delete remote branches, or publish
  releases without explicit owner sign-off.
- Do not reference `references/*` or `infra/axi-workspace-governance/*`
  content as if it were in scope for this project.
- Do not hardcode `'en-US'` outside `src/i18n/index.ts`.
- Keep `docs/project-docs.manifest.json` in sync with the actual file
  set; do not list docs that do not exist.

## Reverse Links

- Workspace index: `/Volumes/code/workspace/WORKSPACE_INDEX.md`
- Workspace root AGENTS: `/Volumes/code/workspace/AGENTS.md`
- Cross-project relations: `/Volumes/code/workspace/workspace.graph.json`

---

*Last updated: 2026-06-08 — root-level AGENTS aligned with the deep-init-pro doc suite.*
