# mf-vite-repro

A base reproduction setup that mimics a real-world micro-frontend architecture using [`@module-federation/vite`](https://github.com/module-federation/vite).

## Purpose

This repo serves as a starting point for creating minimal reproductions when filing issues against the upstream `@module-federation/vite` plugin. Rather than building a fresh repro from scratch each time, this repo already has the full architecture in place — wrapper plugins, multiple remotes on different Vite versions, and multiple host apps — so you can isolate a bug quickly by bumping versions or tweaking config.

## Architecture

```
packages/
  plugin-wrapper-host/    — wraps federation() for host apps
  plugin-wrapper-remote/  — wraps federation() for remote apps
  remote-a/               — Svelte remote, Vite 8, exposes <remote-a-button>
  remote-b/               — Svelte remote, Vite 7, exposes <remote-b-card>
  remote-c/               — Svelte remote, Vite 8, consumes A+B, exposes <remote-c-dashboard>
  host-vite7/             — Host app on Vite 7, consumes all remotes
  host-vite8/             — Host app on Vite 8, consumes all remotes
```

`@module-federation/vite` is a direct dependency of the wrapper packages only — not of the host or remote apps. This mirrors the real-world pattern where a shared internal plugin wraps the federation plugin, and individual apps depend on the wrapper rather than on `@module-federation/vite` directly.

## Running

```bash
pnpm install

# Start all services in separate terminals
pnpm proxy          # reverse proxy on port 3000
pnpm dev:remote-a   # Vite 8, port 5001
pnpm dev:remote-b   # Vite 7, port 5002
pnpm dev:remote-c   # Vite 8, port 5003
pnpm dev:host-vite7 # Vite 7, port 5004
pnpm dev:host-vite8 # Vite 8, port 5005
```

Open http://localhost:3000 and navigate to either host app.

## Creating a reproduction for an issue

1. Create a branch: `git checkout -b repro/<issue-description>`
2. Bump `@module-federation/vite` in one or both wrapper packages to the version that introduced the bug
3. Confirm the bug reproduces, document the steps in this README or a separate file
4. Push the branch and link it in the upstream issue
