# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Kum Yew Loke (Loki), built with Next.js (Pages Router) + TypeScript + Tailwind CSS, deployed on Vercel. It was migrated from a Create React App (CSR) to Next.js for SSG-driven SEO and Core Web Vitals gains. There is no backend database — the site is content-driven from a single static data file, plus one serverless API route for the contact form.

## Commands

Package manager: both `package-lock.json` and `pnpm-lock.yaml` are present; check which one is currently in use before adding dependencies (prefer `npm` unless told otherwise, since `npm` scripts are what's defined below).

```bash
npm run dev         # start dev server at http://localhost:3000
npm run build        # production build (also runs `next-sitemap` via postbuild)
npm run start        # serve the production build
npm run lint          # next lint (extends next/core-web-vitals)
npm run lint:fix      # next lint --fix
```

There is no test suite configured (no test runner script, no `*.test.*` files), despite `@testing-library/*` being present in `dependencies`. Don't assume tests exist or can be run.

## Environment Variables

Contact form requires a `.env.local` with:
```
RESEND_API_KEY=...
EMAIL_TO_SEND_TO=...
```

## Architecture

**Routing:** Next.js Pages Router (`pages/`), not the App Router. Each page (`index.tsx`, `about.tsx`, `portfolio.tsx`, `contact.tsx`, `resume.tsx`) is a `NextPage` that composes section components and sets its own `<SEO metadata={...} />`.

**Global shell (`pages/_app.tsx`):** wraps every page with `NavBar`, a `Footer` (fed `portfolioData.owner.name`), and Framer Motion's `AnimatePresence`/`motion.main` for page-transition animations keyed on `router.route`. Global CSS (`styles/globals.css`) is imported only here.

**Content is centralized in `data/portfolioData.tsx`:** a single typed `portfolioData` object (projects, owner info, contact links, category list, technology groupings, about copy) is the source of truth for nearly all page content — pages pull from it rather than hardcoding copy. It also exports filter helpers (`getProjectsByCategory`, `getFeaturedProjects`, `getProjectById`, `getProjectsByTechnology`). When adding/editing a project or bio content, this file is almost always the place to change, not the page components.

**Component structure (see README for full rationale):**
- `components/sections/` — large, page-specific blocks (e.g. `HeroSection`, `ContactForm`, `about/BackgroundInfo`, `about/TechSkills`). One section = one cohesive part of a page.
- `components/ui/` — small reusable primitives (`SkillPill`, `Socials`).
- `components/layout/PageWrapper.tsx` — layout wrapper providing consistent padding/max-width for page content, while letting a parent `<section>` still go full-bleed for backgrounds. Use this pattern instead of duplicating padding/max-width classes per page.
- `components/SEO.tsx` — per-page `<Head>` metadata component. Takes a `PageMetadata` (`title`, `description`, optional `ogImage`/`canonicalUrl`) and merges it with site-wide defaults (`BASE_URL = https://www.lokesoftware.com`, default description/OG image). Every page should render `<SEO metadata={...} />` with a page-specific `title`/`description` rather than adding raw `<Head>` tags.

**Contact form (`pages/api/contact.ts`):** a Next.js API route (POST-only) using the `resend` SDK to send mail server-side, keeping `RESEND_API_KEY` off the client. It includes a honeypot field (`company_website`) — if populated, the handler returns a fake success without sending mail, to silently drop bot submissions. Preserve this behavior when touching this route.

**Images:** project screenshots live in `public/images/` and are imported as static assets into `data/portfolioData.tsx` (typed as `StaticImageData`) for use with `next/image`.
