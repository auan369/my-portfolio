### **Phase 1: Project Setup & Initial Conversion**

*   [X] **Create the Branch:**
    ```bash
    git checkout -b nextjs-migration
    ```

*   [X] **Install Next.js Dependencies:**
    ```bash
    npm install next react react-dom
    ```

*   [X] **Update `package.json` Scripts:** Replace your `react-scripts` with these:
    ```json
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    ```

*   [X] **Create the `pages` Directory:** In the root of your project, create a new folder named `pages`.

*   [X] **Create Initial `pages/index.js`:** Create this file to serve as your new homepage and test the setup.

*   [X] **Clean Up CRA Files:**
    *   [X] Uninstall `react-scripts`: `npm uninstall react-scripts`
    *   [X] Delete the old `public/index.html` file.

*   [ ] **Verify Setup:** Run `npm run dev`. You should be able to see your new Next.js page at `http://localhost:3000`.

---
#### **Phase 1.5: TypeScript Setup (You are here)**

*   [X] **Stop the Dev Server**
*   [X] **Create `tsconfig.json`**
*   [X] **Install TypeScript Dependencies:** `npm install --save-dev typescript @types/react @types/node`
*   [X] **Run `npm run dev`** to let Next.js configure everything.
*   [X] **Convert `pages/index.js` to `pages/index.tsx`** and add basic types.

---

### **Phase 2: Migrating Your Components & Pages**

*   [X] **Move Components:** Move your `src/components` folder to the root of your project (so it's just `components/`).

*   [X] **Recreate Your Pages(as .tsx files):**  For each page, create a .tsx file in the pages directory and move your component code into it, adding basic types like `NextPage`.

*   [X] **Create `pages/_app.tsx`:** Create this file to act as your global layout wrapper. This is where your `<Navbar>`, `<Footer>`, and global CSS will go.

*   [X] **Convert Routing:**
    *   [X] Find all uses of `<Link>` from `react-router-dom`.
    *   [X] Replace them with `<Link>` from `next/link` (e.g., `to="/about"` becomes `href="/about"`).

*   [X] **Type Your Components:** As you migrate components, convert them to .tsx and create interfaces for their props.

---

### **Phase 3: Leveraging Next.js for SEO & Performance**

*   [ ] **Add SEO Metadata:**
    *   [ ] In each page file, import `Head` from `next/head`.
    *   [ ] Add a unique `<title>` and `<meta name="description" ... />` tag inside the `<Head>` component for every page.

*   [ ] **Optimize Images:**
    *   [ ] Import `Image` from `next/image`.
    *   [ ] Go through your project and replace all `<img>` tags with the `<Image>` component, providing `src`, `alt`, `width`, and `height` props.

*   [ ] **Update Environment Variables:** If you use them, rename any variables from `REACT_APP_...` to `NEXT_PUBLIC_...`.

---

### **Phase 4: Styling & Static Assets**

*   [ ] **Handle Global CSS:**
    *   [ ] Create a `styles` directory in your root.
    *   [ ] Move your global stylesheet (e.g., `index.css` or `App.css`) into it.
    *   [ ] Import this global stylesheet *only* in `pages/_app.tsx`.

*   [ ] **Move Public Assets:** Move everything from the old `public` folder (favicon, images, robots.txt, etc.) into the new `public` folder that Next.js uses.

---

### **Phase 5: Final Checks & Deployment**

*   [ ] **Push and Create Preview:**
    ```bash
    git add .
    git commit -m "feat: Initial Next.js migration"
    git push -u origin nextjs-migration
    ```
    *This will trigger your first preview deployment on Vercel.*

*   [ ] **Check Vercel Settings:** In your Vercel project dashboard, go to Settings -> General and ensure the "Framework Preset" is set to "Next.js". (Vercel is usually smart enough to do this automatically).

*   [ ] **Thoroughly Test Preview URL:** Open the Vercel preview URL and check everything:
    *   [ ] Do all pages load correctly?
    *   [ ] Do all links work?
    *   [ ] Do all images display properly?
    *   [ ] Is the styling correct on all screen sizes?
    *   [ ] Check the browser console for errors.

*   [ ] **Run a Lighthouse Audit:** Open Chrome DevTools on your preview URL and run a Lighthouse report. Check your new Performance and SEO scores!

*   [ ] **Merge to Production:** Once you are fully satisfied with the preview, merge the `nextjs-migration` branch into your `main` branch. Vercel will automatically build and deploy the changes to your live domain.

*   [ ] **Celebrate!** You've successfully upgraded your site.

---

### **Phase 6: Conversion-Focused Improvements (Freelance Inquiries)**

Goal: turn portfolio visitors into client inquiries, without touching existing typography, colors, or brand voice. All work happens off a `staging` branch; each feature gets its own branch, is implemented + tested, then merged locally into `staging` (nothing pushed until reviewed).

*   [X] **Setup**
    ```bash
    git checkout -b staging
    ```

*   [X] **`feature/hero-cta`** — Homepage hero CTA + outcomes line
    *   [X] Add `owner.outcomes: string[]` to `data/portfolioData.tsx` (stabilizing fragile platforms, offline-first mobile architecture, multi-tenant SaaS builds).
    *   [X] `components/sections/HeroSection.tsx`: render outcomes under the description; add primary CTA `<Link href="/contact">Get in Touch</Link>` styled like existing `#333` filled buttons.
    *   [X] Test with `npm run dev` on mobile/desktop widths; verify link navigates to `/contact`.
    *   [X] Merge into `staging`.

*   [X] **`feature/testimonials`** — Reusable testimonials section
    *   [X] Add `Testimonial` interface (`id`, `quote`, `name`, `attribution`) + `testimonials: Testimonial[]` (3 placeholder entries) to `data/portfolioData.tsx`.
    *   [X] New `components/sections/Testimonials.tsx`: takes `testimonials` as a prop, renders a responsive grid of quote cards matching existing card styling; placeholder copy clearly marked.
    *   [X] `pages/index.tsx`: render `<Testimonials testimonials={portfolioData.testimonials} />` below `<HeroSection />`.
    *   [X] Test layout/spacing/responsiveness on homepage.
    *   [X] Merge into `staging`.

*   [SKIPPED] **`feature/contact-scheduling`** — Calendly scheduling link
    *   Rejected 2026-07-15: don't want a direct self-service scheduling link — it removes the ability to screen inquiries before a call gets booked. Keeping the contact form as the sole channel for now.
    *   ~~Document `NEXT_PUBLIC_CALENDLY_URL` in CLAUDE.md's Environment Variables section (client-side var, needs `NEXT_PUBLIC_` prefix).~~
    *   ~~`pages/contact.tsx`: add a "Book a time directly" CTA above/alongside `<ContactForm />`, linking to `process.env.NEXT_PUBLIC_CALENDLY_URL` (falls back to placeholder if unset).~~
    *   ~~Test that the page doesn't break with the env var unset.~~
    *   ~~Merge into `staging`.~~

*   [X] **`feature/case-study-depth`** — Expanded case study (Enterprise Event Registration Platform)
    *   [X] Add optional `caseStudy?: { problem: string; approach: string; result: string }` to `PortfolioItem` in `data/portfolioData.tsx`; populate placeholder copy on the Enterprise Event Registration Platform entry only.
    *   [X] `components/ProjectCard.tsx`: when `caseStudy` is present, render Problem → Approach → Result subsections instead of the plain description; other cards' layout untouched.
    *   [X] Test `/portfolio` — expanded card renders correctly, other cards unaffected, responsive check.
    *   [X] Merge into `staging`.

*   [ ] **Wrap-up:** review `staging` locally; decide when to push/merge into `main`.

---

### **Phase 6.1: Site Audit Findings (2026-07-16)** — IMPLEMENTED 2026-07-16

Full-site content/pages review requested after Phase 6 wrapped. All items below implemented, typechecked, linted, and visually verified.

**Concrete bugs (low-risk, high-value; can be fixed independent of the redesign):**

*   [X] `next-sitemap.config.js` — fixed `siteUrl` from the `kyloke-portfolio.vercel.app` placeholder to `https://www.lokesoftware.com`. Verified via production build: sitemap/robots.txt now regenerate with the correct domain.
*   [X] `pages/index.tsx` — dropped the manual `"| Loke Software"` suffix from the homepage title metadata, removing the double-branding with `SEO.tsx`'s automatic site-name suffix.
*   [X] `data/portfolioData.tsx` / `HeroSection.tsx` — `owner.title` now renders as a subtitle under the hero name.
*   [X] `components/NavBar.tsx` — now reads `portfolioData.owner.name` instead of a hardcoded string (this also fixed a real mismatch: NavBar said "Kum Yew Loke", Footer already said "Loke Kum Yew" from data — both now consistent).
*   [X] `public/index.html` — deleted.

**Content / conversion gaps:**

*   [X] Extended `caseStudy` (Problem/Approach/Result) to the two remaining featured projects without one — Travel SaaS (NDA-safe copy, no new specifics) and AI Generation Platform. Also tightened all four case studies (including the two from Phase 6.2) to short, scannable sentences per the user's follow-up feedback — first drafts were too dense.
*   [X] Added a reusable `components/ui/CTABanner.tsx`, wired into `/about`, `/portfolio`, and `/resume` — each previously dead-ended with no path to `/contact`.
*   [X] About page's `openToWork` copy — resolved via the new CTABanner directly below it on the page, rather than adding a redundant inline link inside the paragraph itself.

**Low-priority tech debt:**

*   [X] Removed unused `react-router-dom` and `web-vitals` from `package.json`.
*   [X] Bumped `eslint-config-next` from `14.2.3` to `15.5.9` to match `next`. `npm run lint` passes clean.

---

### **Phase 6.2: Portfolio Content Accuracy Updates (2026-07-16)** — IMPLEMENTED 2026-07-16

Goal: bring three portfolio entries up to date with real project details supplied by the user (Hexlabs event work, and the bird app's new web platform + Phase 3 mobile release). All three items implemented; the new UV Print Platform entry uses an abstract placeholder mockup image (`public/images/uvPrintStation.png`) pending a real screenshot — swap the import in `data/portfolioData.tsx` when one's available.

**Open questions to resolve first:**

*   [X] ~~Confirm real tech stack for the on-site scanning/tag-printing pipeline (Enterprise Event Registration Platform)~~ — RESOLVED from real spec sheets (`Q-2025-10-01-01` quotation + Phase 2 Functional Spec): installable desktop app (Windows/macOS) with offline (SQLite) / online (Supabase PostgreSQL+RLS) mode switch, QR scanning, PDF badge printing, React-based drag-and-drop Visual Badge Editor, Node.js offline sync server. Current data's `Local MySQL` was wrong (spec says SQLite), and the description incorrectly folded in UV-printing kiosk work that belongs to the separate project below.
*   [X] ~~Confirm tech stack for the new UV Print Platform entry~~ — RESOLVED from real proposal doc (`Updated Proposal_Mar19_Hex Interactive UV Print Station.pdf`): real product name is **"Hex Interactive UV Print Station"**. Vercel-hosted web kiosk app + Supabase cloud backend (nested per-event buckets for stock images/fonts/user uploads) + a local Node.js "Print Bridge Agent" that polls Supabase and auto-feeds finished CMYK files into the UV printer's Photoprint RIP hot folder, plus a "scan-to-upload" mobile bridge (session UUIDs + QR codes, no login required).
*   [X] ~~Confirm whether the Vercel-hosted frontend is literally Next.js~~ — CONFIRMED by user: yes, Next.js on Vercel.
*   [X] ~~Confirm current `status` for the UV Print Platform~~ — CONFIRMED by user: `"Pending Sign-Off"` (delivered, awaiting final testing and client sign-off).
*   [X] ~~Confirm `featured`, `links`, `device`~~ — CONFIRMED by user: `featured: true`; NDA-style disabled link (matching Event Registration Platform's "System Architecture" treatment); `device: 'laptop'` showing the kiosk's touch-canvas design editor mid-design (more visually distinctive than an admin table, and avoids the phone frame's notch styling looking wrong on a tablet screenshot).
*   [X] ~~Still need a real screenshot/image asset~~ — using a generated abstract placeholder mockup (`public/images/uvPrintStation.png`, no visible "placeholder" text) per user's instruction; swap for a real screenshot when available.
*   [X] ~~Confirm real tech stack for the new bird app web platform~~ — RESOLVED from real signed SOWs (`TJIRP 2 Phase 2` + `TJIRP 2 Phase 3`): real product name **TJIRP**, client Michael Heyns. Web portal is Next.js on Vercel + Supabase (Auth/Storage/RLS); see full details in item 3 below.
*   [X] ~~Confirm `status` for the bird app entry~~ — CONFIRMED by user: `"Completed"`.

**1. Update existing entry — "Enterprise Event Registration Platform" (`id: 1`)** — IMPLEMENTED

*   [X] Updated `description`, `caseStudy` (problem/approach/result), and `techStack` to `['React', 'Electron', 'Node.js', 'Supabase (PostgreSQL/RLS)', 'SQLite']` per the finalized copy. Typechecked and visually verified on `/portfolio`.

**2. Add new entry — "Hex Interactive UV Print Station" (Hexlabs)** — IMPLEMENTED (`id: 8`)

*   [X] Added with the finalized copy (title, description, tightened case study, `techStack: ['Next.js', 'Supabase', 'Vercel', 'Node.js']`, `device: 'laptop'`, disabled NDA-style "Print Platform Architecture" link, `category: 'Full Stack'`, `status: 'Pending Sign-Off'`, `featured: true`), using the placeholder mockup image noted above. Typechecked and visually verified on `/portfolio` (confirmed the image loads correctly — an initial full-page screenshot showed it black, which turned out to be a Next.js Image lazy-load timing artifact in the screenshot capture, not a real bug).

**3. Update existing entry — "Scientific Data App" (`id: 2`, the bird app)** — IMPLEMENTED

*   [X] Updated `title` to "TJIRP Birding Platform | Mobile & Web Systems Architect", `description`, added a tightened `caseStudy`, updated `techStack` to `['React Native (Expo)', 'Next.js', 'WatermelonDB', 'SQLite', 'Supabase (Auth/Storage/RLS)', 'TypeScript']`, and set `status: 'Completed'`. Typechecked and visually verified on `/portfolio`.

**4. After content changes land**

*   [X] Typechecked (`npx tsc --noEmit`), linted (`npm run lint`), and ran a full production build (`npm run build`) — all clean. Visually verified all three items on `/portfolio` (desktop), plus the wider Phase 6.1 changes (hero subtitle, nav name, CTA banners on `/about` `/portfolio` `/resume`) with no console errors.

---

### **Phase 7: Visual Redesign (after Phase 6)** — IMPLEMENTED 2026-07-18

Goal: move away from the current "cookie-cutter AI app" feel. Reference sites: benscott.dev, prashantsani.com — both break the generic hero → feature-cards → footer template rhythm in favor of a more personal/editorial layout with custom scroll-driven motion (e.g. GSAP-style animation) and distinct typographic personality.

Priorities called out 2026-07-15, roughly in order:
1.  Generic layout rhythm — move away from predictable hero/cards/footer block structure.
2.  Lack of motion/personality — site feels static; wants scroll animation, transitions, more character in interactions.
3.  Mobile optimization — current layout isn't well optimized for mobile.

**Research (2026-07-18):** benscott.dev turned out to be a generic template itself, not a useful structural reference. prashantsani.com (Awwwards-featured, documented build) was the useful one: GSAP+ScrollMagic scroll-triggered reveals *without* hijacking the scrollbar, one signature interactive hero piece rather than scattered small animations, a deliberate dark/flat theme, fluid `clamp()`-style type, and motion explicitly simplified (not just scaled down) on mobile. Translated to our stack: reused Framer Motion (already a dependency) instead of adding GSAP.

**Direction chosen:** built a palette/motif comparison artifact with 3 options using real hero content (a cursor-reactive node-network canvas as the "signature motif," tested against 3 palettes). User picked **Option C — Terminal Phosphor**: near-black charcoal ground, full monospace typography, soft phosphor-green accent, single-theme commitment (no light/dark pair).

*   [X] Revisit reference sites for concrete direction — done via a research fork (see above).
*   [X] Scope which pages/sections are in play — all of them: homepage hero, nav, footer, every page (about/portfolio/resume/contact), and all shared components (ProjectCard, Testimonials, CTABanner, SkillPill, Socials, ContactForm).
*   [X] Decide on animation approach — Framer Motion, no new dependency added.
*   [X] Mobile-first pass — see below.

**Implementation (branch `feature/phase7-terminal-theme`, merged into `staging`):**

*   [X] **Foundation:** `next/font/google` JetBrains Mono loaded site-wide via `pages/_app.tsx`; Tailwind color tokens (`bg`/`surface`/`surface-raised`/`ink`/`muted`/`accent`/`accent-dim`/`border`) added in `tailwind.config.js`; base dark styles, selection color, blinking-caret utility, and a `prefers-reduced-motion` safety net added to `styles/globals.css`.
*   [X] **`components/ui/NodeNetwork.tsx`** (new): Canvas-based cursor-reactive node network, the hero's signature motif. Disabled entirely on touch devices (`hover: none`/`pointer: coarse`) and when `prefers-reduced-motion` is set.
*   [X] **`HeroSection.tsx`** rewritten: two-column asymmetric layout (left-aligned pitch + a terminal-window "output" card echoing the same info as shell commands: `$ whoami`, `$ cat capabilities.txt`) instead of the old centered single-column block — directly breaks the "everything centered" template rhythm. Terminal card hidden below `lg`; mobile `min-height` reduced so the hero hugs its content instead of leaving dead space once the card disappears.
*   [X] **`NavBar.tsx` / `Footer.tsx`**: nav links restyled as `~/path`-style labels; footer copy becomes a literal `$ echo "..."` shell command.
*   [X] **Shared components** (`Testimonials`, `CTABanner`, `ProjectCard`, `SkillPill`, `Socials`, `ContactForm`, `BackgroundInfo`, `TechSkills`): moved to the new tokens/type; `Testimonials` and `ProjectCard` gained staggered `whileInView` scroll reveals they previously lacked; section labels use `// comment`-style headers.
*   [X] **Pages** (`about`, `portfolio`, `resume`, `contact`): each header uses a page-specific shell-command eyebrow (`$ cat about.md`, `$ ls ./projects`, `$ cat resume.pdf`, `$ ./contact --new-inquiry`) so pages don't all repeat the same centered-h1 block.
*   [X] **Mobile-first pass:** verified no horizontal overflow on any page at 390px width; fixed a real dead-space gap in the mobile hero (terminal card is `lg`-only, so `min-h` needed to shrink on mobile too); confirmed `NodeNetwork` correctly disables on touch devices.
*   [X] **QA:** `npx tsc --noEmit`, `npm run lint` (had to fix a `jsx-no-comment-textnodes` false-positive from `// problem`-style labels — wrapped in `{'...'}`), full `npm run build`, and a production-mode (`npm run start`) smoke test all pass clean. Two apparent bugs during screenshot QA (blacked-out images, invisible below-the-fold cards, a "floating" nav) were confirmed to be Playwright full-page-screenshot artifacts (lazy-loaded `next/image`, `whileInView` not firing for off-screen elements, `position: fixed` compositing) — not real issues; verified with scrolled/viewport-only screenshots.

**Image consistency fix (2026-07-18):** `travelSaas.jpg` and `eventReg.jpg` were environmental/photo-realistic images (a rendered iMac-on-a-desk shot, and an actual on-site event kiosk photo) that already contained their own device chrome, but `ProjectCard.tsx`'s `LaptopFrame` wraps every image in its own bezel regardless — so both cards showed a frame-within-a-frame, while the other 7 projects (flat UI-only screenshots) rendered correctly through the same component. Also noticed both existing images had AI-generation tells (garbled text: "Enterprisa Event Regsiration Platform", "Cinded is", mangled attendee names) — neither was ever a real screenshot.

*   [X] `travelSaas.jpg` — NDA'd project, so a generic mockup is the right call, not just a fallback. Replaced with a newly generated flat dashboard screenshot (PIL-drawn, not AI image-gen, so no garbled-text risk) — browser chrome only, no baked-in monitor/desk. Fixes the double-frame issue.
*   [ ] `eventReg.jpg` — no NDA with Hexlab, so a **real screenshot** would be more credible than any mockup. User will provide one directly; not actioned yet.
*   [X] `uvPrintStation.png` (placeholder) → `uvPrintStation.jpg` (real screenshot) — user provided a real screenshot of the actual UV Editor product (was initially mislabeled as "for Event Platform" but visually matched the UV Print product, confirmed with user before applying). Converted from pasted PNG, compressed to JPEG (quality 90, ~138KB). Import path in `data/portfolioData.tsx` updated from `.png` to `.jpg`; old placeholder deleted.

**Resume assets (2026-07-18):** Replaced `public/images/KumYewResume.jpg` with an updated resume render supplied by the user (already reflects the Phase 6.2 copy: Interactive UV Print Experience Platform, hybrid SQLite/Supabase architecture, etc. — fixes the stale "UV Printing Kiosks"/local-MySQL wording that was still on the old resume image). Converted from the pasted PNG and compressed to JPEG (quality 90, ~493KB, under the original file's size). User separately updated `public/KumYewResume.pdf` (the downloadable file) directly.