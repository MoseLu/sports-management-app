# Sports Management Backend — Skeleton Placeholder

> **Status (2026-07-17): empty skeleton. No backend stack is declared yet.**

This directory exists because the project's top-level README and `AGENTS.md`
both call out a backend surface, and the project plans to ship one. As of
2026-07-17 the directory tree below contains only **empty subdirectories**:

```text
backend/
├── backend/            # nested double-backend (legacy clone artifact, also empty)
│   └── internal/
│       └── model/
├── frontend-uni-app/   # legacy uni-app reference, empty
└── internal/
    └── pkg/
        └── logging/
```

## What is not here yet

- No `go.mod` / `go.sum` — Go is **not** declared as the real backend stack.
  The `stack: ["go-backend-placeholder"]` entry in `workspace.json` only
  records the **intent** that Go is one option under consideration; it does
  **not** mean Go is the chosen stack.
- No `package.json`, `requirements.txt`, `pyproject.toml`, `Cargo.toml`, or
  any other runtime manifest — no language is locked.
- No HTTP server, no DB driver, no schema.
- No `cmd/`, `main.go`, `main.py`, `app.py`, etc.

## What this means for agents

- **Do not** try to `pnpm dev` / `go run` / `python -m` from this directory.
  Nothing will start.
- **Do not** add a `consumes` or `provides` edge from another project to
  this backend. There is no contract to bind to yet.
- **Do not** assume Go. The decision between Go, Node (Fastify/NestJS),
  Python (FastAPI), Rust (axum), or BFF-on-frontend is open. The owner
  owns this choice.
- The `backend/backend/` nested layout is a leftover from an earlier clone
  artifact and is itself empty; treat it as candidate-for-removal.

## When the backend lands

When the owner picks a stack and lands a first commit here:

1. Add a stack manifest (`go.mod` / `package.json` / `pyproject.toml` etc.).
2. Add a `README.md` section "How to run" with one concrete command.
3. Update `workspace.json` `stack[]` to drop `go-backend-placeholder` and add
   the real stack entry.
4. Update `workspace.graph.json` `provides[]` and `contracts[]` once the
   backend exposes its first real capability (e.g. `sports-venue-api`).
5. Bump `completion.stage` from `development` to `active-product` once the
   backend has a passing health check.

Until then, treat this directory as a **documented void** — present in the
tree on purpose so the layout matches the README, but with zero runtime
content.