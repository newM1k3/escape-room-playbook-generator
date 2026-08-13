# Escape Room Playbook Generator

Escape Room Playbook Generator is a browser application for creating a tailored marketing and SEO playbook for a destination escape-room business. The user enters basic business context, and the app produces a structured Markdown document that can be reviewed in the browser, copied, or downloaded.

The current generator is **deterministic**. It fills a checked-in template with the user’s answers after a short simulated delay; it does not call an AI service, save data to a backend, or produce a PDF. This makes the current version inexpensive and predictable, but every generated playbook follows the same underlying recommendations.

> **Project status:** The form, templated playbook generation, output tab, clipboard action, Markdown download, responsive interface, Vite production build, and optional Express static server are implemented. Authentication, persistence, AI generation, multiple playbook types, PDF export, tests, and CI are not implemented.

## What it generates

| Input                       | Required | How it is used                                                                         |
| --------------------------- | -------: | -------------------------------------------------------------------------------------- |
| Business name               |      Yes | Personalizes the title and business references.                                        |
| Location                    |      Yes | Shapes destination and travel-positioning copy.                                        |
| Foot-traffic situation      |       No | Adjusts language about planned versus walk-in visits.                                  |
| Public-transit availability |       No | Personalizes access and journey messaging.                                             |
| Key business challenge      |       No | Appears in persona pain points, seasonal tactics, and the closing implementation note. |

The generated Markdown includes brand positioning, target personas, voice-of-customer website copy, a “stop doing / start doing” list, a seasonal marketing table, and an implementation note. Optional fields fall back to generic destination-business wording.

The browser can copy the generated Markdown or download it as `<business-name>-playbook.md`. Input and generated output are held only in React state, so refreshing or closing the page discards them.

## Project organization

```text
.
├── client/
│   ├── src/
│   │   ├── components/       # Reusable Radix/shadcn-style UI components
│   │   ├── pages/Home.tsx    # Form state, static template, copy, and download flow
│   │   ├── App.tsx           # Client routing and application shell
│   │   └── index.css         # Tailwind theme, typography, and visual tokens
│   └── index.html            # Client document and font loading
├── server/index.ts           # Express static server for the completed build
├── shared/                   # Constants shared by generated template code
├── patches/
│   └── wouter@3.7.1.patch    # Runtime route-discovery patch; version is intentionally pinned
├── .env.example              # Documents that no runtime variables are currently required
├── vite.config.ts            # Client root, aliases, plugins, server, and output directory
├── tsconfig.json             # Shared client/server TypeScript configuration
├── package.json              # Scripts, dependency ranges, pnpm policy, and Wouter patch
└── pnpm-lock.yaml            # Reproducible dependency graph
```

`vite.config.ts` treats `client/` as the frontend root and writes browser assets to `dist/public/`. The build script then bundles `server/index.ts` to `dist/index.js`. In production mode, the Express server serves `dist/public` and sends unmatched paths to `index.html` for client-side routing.

## Technology

| Area                       | Technology                                           |
| -------------------------- | ---------------------------------------------------- |
| Interface                  | React 18, TypeScript, Tailwind CSS 4                 |
| UI primitives              | Radix UI and shadcn-style components                 |
| Routing                    | Wouter 3.7.1 with a checked-in route-discovery patch |
| Build tooling              | Vite 7, esbuild, pnpm 10                             |
| Optional production server | Express 4                                            |
| Feedback and icons         | Sonner and Lucide React                              |
| Output format              | Browser-generated Markdown                           |

## Requirements

Use a current Node.js LTS release; **Node.js 20 or newer is recommended**. The repository declares pnpm `10.34.5` in `package.json`.

Activate the declared pnpm version with Corepack:

```bash
corepack enable
corepack prepare pnpm@10.34.5 --activate
```

Alternatively, prefix commands with `npx pnpm@10.34.5`.

## Quick start

```bash
git clone https://github.com/newM1k3/escape-room-playbook-generator.git
cd escape-room-playbook-generator
pnpm install --frozen-lockfile
pnpm run dev
```

Vite normally starts on port `3000`; if that port is busy, it selects another available port. The development server binds to the local network because the script uses `--host`.

No environment variable, API key, database, or external service is required for the current generator. The placeholder variables previously inherited from the starter template were not used by the code and have been removed from `.env.example`.

## Available commands

| Command            | Purpose                                                                             |
| ------------------ | ----------------------------------------------------------------------------------- |
| `pnpm run dev`     | Start the Vite development server.                                                  |
| `pnpm run check`   | Type-check client and server code without emitting files.                           |
| `pnpm run build`   | Build `dist/public/` and bundle the Express server to `dist/index.js`.              |
| `pnpm run start`   | Start the bundled Express server in production mode on `PORT` or `3000`.            |
| `pnpm run preview` | Preview the Vite client build.                                                      |
| `pnpm run format`  | Rewrite supported files with Prettier; review the resulting diff before committing. |

The `start` script uses POSIX-style `NODE_ENV=production`. On Windows, run it through WSL/Git Bash or set `NODE_ENV` by the shell’s supported syntax.

## Configuration and security

The current code reads no environment variables in the browser or server. If live AI generation is added, provider credentials must remain server-side and must never use a `VITE_` prefix, because Vite-prefixed variables are exposed to browser code.

A future generation endpoint should include schema validation, authenticated access, prompt and output limits, rate limiting, spend controls, restrictive CORS, timeout and retry behavior, and careful logging that excludes business-sensitive input. The browser should receive a stable response contract rather than provider-specific payloads.

## Production build

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
pnpm run start
```

The Express server serves `dist/public` and defaults to port `3000`. Override the port with a server-side `PORT` variable.

For a static host, deploy `dist/public/` directly and configure an SPA fallback to `index.html`; the bundled Express server is unnecessary in that model. For a Node host, deploy the full `dist/` directory and run `node dist/index.js` with `NODE_ENV=production`.

## Wouter patch and dependency policy

The repository pins Wouter to `3.7.1` because `patches/wouter@3.7.1.patch` adds route collection through `window.__WOUTER_ROUTES__` for the included runtime tooling. Updating Wouter without migrating or removing that integration causes pnpm to reject the now-unused patch.

`package.json` also restricts dependency install scripts to `@tailwindcss/oxide` and `esbuild`, the native build tools required by the current stack. Do not broaden that allowlist without reviewing the package and its lifecycle script.

The build currently reports a peer-metadata warning because `@builder.io/vite-plugin-jsx-loc` declares support for Vite 4 or 5 while the project runs on Vite 7. The current build succeeds, but replacing, removing, or updating that development-only plugin is preferable to treating the warning as permanent.

## Validation

Before committing a change, run:

```bash
pnpm install --frozen-lockfile
pnpm exec prettier --check README.md package.json pnpm-lock.yaml
pnpm run check
pnpm run build
pnpm audit
```

There is currently no test script and no test file, even though Vitest is available as a development dependency. Manual validation should cover required-field behavior, every optional input, generation delay state, output-tab activation, clipboard permission failures, filename generation, Markdown download, narrow layouts, and the bundled production server.

## Known limitations and review priorities

| Priority | Improvement                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| High     | Extract the large Markdown template from `Home.tsx` into a typed, independently testable generator module.                           |
| High     | Add unit tests for fallback text, input substitution, Markdown integrity, filename sanitization, and copy/download error handling.   |
| High     | Remove or replace the Vite-incompatible JSX location plugin and verify whether the Manus runtime plugins are required in production. |
| Medium   | Add explicit clipboard failure handling and sanitize downloaded filenames beyond the current raw business-name substitution.         |
| Medium   | Add local draft persistence or an authenticated backend only after defining retention, deletion, and privacy requirements.           |
| Medium   | Add CI for frozen install, format check, typecheck, build, audit, and future tests.                                                  |
| Low      | Add additional playbook templates and PDF export after the generator is modular and covered by tests.                                |

## License

`package.json` declares the project as MIT-licensed, but the repository does not currently include a standalone `LICENSE` file. Add the full license text before formal redistribution.
