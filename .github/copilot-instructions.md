# Copilot / AI Agent Instructions — Khartoum Interfilm

Short, actionable guidance for AI contributors working in this repo.

Overview
- This is a Next.js app (app-router) in TypeScript located under `app/` and client UI components in `components/`.
- Default behavior: components are Server Components unless they include `'use client'` at the top.

Key files & patterns (read before editing)
- App entry & layout: `app/layout.tsx` uses a `ClientLayout` from `app/providers.tsx`.
- Global styles: `app/globals.css` (custom vars and utility classes). Tailwind PostCSS plugin is configured via `postcss.config.mjs`.
- Language & i18n pattern: `components/LanguageContext.tsx` manages `language` in localStorage and sets `document.documentElement.lang` and `dir` (rtl/ltr). Use this provider for client interactions.
- Header/scroll navigation: `components/Header.tsx` relies on section elements with IDs: `home`, `services`, `about`, `team`, `partnerships`, `contact`. If you change IDs or add sections, update the nav logic there.
- Pages: top-level route pages use `app/<name>/page.tsx` (example: `app/about/page.tsx`, `app/contact/page.tsx`).

Project-specific conventions
- App-router & client rules: Prefer Server Components for data-heavy work; add `'use client'` only when DOM APIs, hooks, or local state are required (see `components/*` and `app/*/page.tsx`).
- Language hook usage: Only use `useLanguage()` inside client components. Import path: `import { useLanguage } from '../components/LanguageContext'` or similar relative path.
- Section navigation: in-page nav uses element IDs and programmatic scroll in `Header.tsx`. Preserve the existing smooth-scroll calculations if you modify header height, sticky behavior, or CSS variables.
- Asset paths: `public/graphic design/` contains folders with spaces. When referring to these files in code or generated URLs, prefer safe filenames (replace spaces) or URL-encode spaces (`%20`). Prefer adding clean filenames if you modify assets.

Build / dev / lint commands (from `package.json`)
- `npm run dev` — development server (Next.js). Use this to verify UI and client interactions.
- `npm run build` — production build.
- `npm run start` — run built app.
- `npm run lint` — ESLint (config: `eslint-config-next`).

Styling notes
- Global CSS is in `app/globals.css`. Tailwind-like PostCSS plugin is present (`@tailwindcss/postcss`) — check `postcss.config.mjs` before adding new PostCSS plugins.
- Keep theme variables in `app/globals.css` root `:root` section for consistent colors.

TypeScript / linting
- This repo uses TypeScript (`tsconfig.json`) and ESLint. Keep types in components and favor explicit prop interfaces.
- Many UI files use `// @ts-nocheck` at the top (e.g., `components/Header.tsx`); avoid re-enabling TS until you confirm types across the component.

Integration points & cross-component flow
- Language state flows from `LanguageProvider` (wraps Header/Footer) to any child using `useLanguage()`.
- Layout composition: `app/layout.tsx` wraps pages with `ClientLayout` which provides header/footer and language provider. Changing providers affects all pages.

What to watch for when editing
- Do not change section IDs used by `Header.tsx` without updating the nav logic.
- Keep `use client` only where needed — moving `'use client'` into server components will break runtime behavior.
- When adding new routes use the `app/<route>/page.tsx` pattern; client-only interactions inside pages must be marked `'use client'`.
- Asset filenames with spaces can break static imports; prefer normalized names.

Examples
- Add a new page: create `app/portfolio/page.tsx`. If it uses `useLanguage()` add `'use client'` at top and import the hook.
- Update nav sections: if you add an in-page section `#services`, ensure `components/Header.tsx` navItems includes `{ id: 'services', ... }`.

If something is unclear
- Ask the maintainer to clarify desired IDs, language behavior, or asset conventions. After edits, run `npm run dev` and test language switching and header scrolling.

— End of AI guidance —
