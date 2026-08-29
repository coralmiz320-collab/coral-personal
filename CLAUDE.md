# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio/CV website for actress Coral Mizrachi, built with Next.js (App Router). It was originally scaffolded by v0.app and is still routinely edited through it — expect commit history and occasional artifacts (e.g. `generator: 'v0.app'` in metadata, a `.v0-trash/` ignore entry) from that workflow.

All content is static and hardcoded in TypeScript — there is no CMS, no database, and no API routes. Editing a page means editing data in `lib/content.ts` and/or the presentational component that renders it.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build

There is no configured lint, test, or typecheck script. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `pnpm build` does **not** fail on type errors — run `pnpm exec tsc --noEmit` manually if you need type-safety verification.

## Architecture

- **`app/`** — one route per page (`app/<route>/page.tsx`): `resume`, `reel`, `projects`, `press`, `gallery`, `contact`, plus the homepage at `app/page.tsx`. Every page follows the same shape: a `PageHero` (eyebrow/title/intro) followed by page-specific sections, each exporting Next `Metadata`.
- **`lib/content.ts`** — the single source of truth for all site copy and structured data: nav links, socials, resume credits, training, projects, press mentions, reel entries, agents, gallery image lists (with explicit `w`/`h` for layout). Adding or editing content almost always starts here.
- **`components/`** — presentational components consumed by `app/`. `components/home/*` are homepage-only sections (`Hero`, `CreditsMarquee`, `AboutSection`, `ArkSpotlight`, `GalleryPreview`, `PressPreview`); the rest (`page-hero`, `project-carousel`, `reel-player`, `gallery-grid`, `stills-gallery`, `inline-video`, `contact-form`, `site-header`, `site-footer`) are shared or route-specific. `components/ui/` holds shadcn-generated primitives (currently just `button.tsx`).
- **Contact form** (`components/contact-form.tsx`) has no backend — submitting builds a `mailto:` link (`window.location.href`) to `SOCIAL.email` rather than POSTing anywhere.
- **Images**: `next.config.mjs` sets `images.unoptimized: true` (no Next image optimization pipeline). Site imagery lives under `public/coral/` as `.avif`.
- **Styling**: Tailwind v4 via `@import 'tailwindcss'` in `app/globals.css` (no `tailwind.config.*` — theme is defined with CSS custom properties and `@theme inline` directly in globals.css). Design tokens follow a "cinematic editorial" theme: ink background, bone-white foreground, muted brass accent (`--brass`, `--brass-deep`). Fonts are `Fraunces` (serif, headings) and `Inter` (sans, body), loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-fraunces` / `--font-inter`.
- **shadcn/ui** is configured via `components.json` (style `base-nova`, neutral base color, `@/components/ui` alias) — use `pnpm dlx shadcn@latest add <component>` to add primitives rather than hand-rolling them.
- **Reveal-on-scroll**: `components/reveal.tsx` (`Reveal`) wraps content in an `IntersectionObserver`-driven fade/slide-up; most page sections use it for entrance animation. Respects `prefers-reduced-motion`.
- Analytics (`@vercel/analytics`) is mounted in `app/layout.tsx` but only rendered when `NODE_ENV === 'production'`.
