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

### **Phase 6.1: Site Audit Findings (2026-07-16)**

Full-site content/pages review requested after Phase 6 wrapped. Findings below, not yet actioned — decide per item whether to fix now or fold into Phase 7.

**Concrete bugs (low-risk, high-value; can be fixed independent of the redesign):**

*   [ ] `next-sitemap.config.js` — `siteUrl` is hardcoded to `https://kyloke-portfolio.vercel.app/` instead of the real domain. Every `npm run build` regenerates `sitemap.xml`/`robots.txt` pointing at the Vercel placeholder. Committed `public/robots.txt` currently has the correct URL by luck (manual edit) but is one build+commit away from being overwritten with the wrong domain.
*   [ ] `pages/index.tsx` — homepage `<title>` metadata already includes `"| Loke Software"`, and `SEO.tsx` automatically appends `"| Kum Yew Loke (Loki)"` on top, producing a double-branded title (`"...| Loke Software | Kum Yew Loke (Loki)"`). Every other page avoids this; homepage title should drop the manual `"| Loke Software"` suffix.
*   [ ] `data/portfolioData.tsx` — `owner.title` ("Full-Stack Engineer & AI Systems Architect") is defined but never rendered anywhere on-page, only used inside raw metadata strings. Consider surfacing it as a subtitle in `HeroSection.tsx`.
*   [ ] `components/NavBar.tsx` — owner name is hardcoded as `"Kum Yew Loke"` instead of reading `portfolioData.owner.name`, breaking the single-source-of-truth content pattern.
*   [ ] `public/index.html` — leftover CRA template file. Phase 1 tasklist marked "Delete the old public/index.html" as done, but the file is still present.

**Content / conversion gaps:**

*   [ ] Case study depth (`caseStudy` Problem/Approach/Result) only exists on 1 of 8 projects (Enterprise Event Registration Platform), by original Phase 6 design (scoped as a pilot). Consider extending to the other `featured: true` projects (Travel SaaS, Scientific Data App, AI Generation Platform).
*   [ ] `/about`, `/portfolio`, and `/resume` are dead ends — only the homepage hero has a "Get in Touch" CTA. No obvious next step after reading case studies or the resume.
*   [ ] About page's `openToWork` copy invites contact but is plain text, not a link/button.

**Low-priority tech debt:**

*   [ ] `package.json` — `react-router-dom` and `web-vitals` are still listed as dependencies; confirmed unused anywhere in the codebase (CRA leftovers), safe to remove.
*   [ ] `package.json` — `eslint-config-next` pinned to `14.2.3` while `next` itself is `15.5.9`; version skew may mean stale lint rules.

---

### **Phase 6.2: Portfolio Content Accuracy Updates (2026-07-16)**

Goal: bring three portfolio entries up to date with real project details supplied by the user (Hexlabs event work, and the bird app's new web platform + Phase 3 mobile release). All copy below is drafted and ready to drop into `data/portfolioData.tsx`, but flagged open questions need answers before implementing.

**Open questions to resolve first:**

*   [X] ~~Confirm real tech stack for the on-site scanning/tag-printing pipeline (Enterprise Event Registration Platform)~~ — RESOLVED from real spec sheets (`Q-2025-10-01-01` quotation + Phase 2 Functional Spec): installable desktop app (Windows/macOS) with offline (SQLite) / online (Supabase PostgreSQL+RLS) mode switch, QR scanning, PDF badge printing, React-based drag-and-drop Visual Badge Editor, Node.js offline sync server. Current data's `Local MySQL` was wrong (spec says SQLite), and the description incorrectly folded in UV-printing kiosk work that belongs to the separate project below.
*   [X] ~~Confirm tech stack for the new UV Print Platform entry~~ — RESOLVED from real proposal doc (`Updated Proposal_Mar19_Hex Interactive UV Print Station.pdf`): real product name is **"Hex Interactive UV Print Station"**. Vercel-hosted web kiosk app + Supabase cloud backend (nested per-event buckets for stock images/fonts/user uploads) + a local Node.js "Print Bridge Agent" that polls Supabase and auto-feeds finished CMYK files into the UV printer's Photoprint RIP hot folder, plus a "scan-to-upload" mobile bridge (session UUIDs + QR codes, no login required).
*   [ ] Confirm whether the Vercel-hosted frontend is literally **Next.js** or a different React setup — proposal only says "Web Application Frontend" hosted on Vercel, doesn't name the framework.
*   [ ] Confirm current `status` for the UV Print Platform — proposal is dated March 19, 2026 with a 6–7 week estimated timeline, so it's likely `"Completed"` by now (today is mid-July 2026), but needs a direct confirmation rather than an inference from the proposal date.
*   [ ] Confirm `featured`, `links` (proposed: NDA-style disabled link matching the Event Registration Platform's "System Architecture" treatment, since this is proprietary Hexlab infrastructure per the proposal), and `device` (`laptop` vs `phone` framing, depending on what the screenshot actually shows) for the new UV Print Platform entry.
*   [ ] Need a real screenshot/image asset for the new UV Print Platform entry — `PortfolioItem.image` is a required `StaticImageData` field, so this blocks adding the entry until an image exists in `public/images/`.
*   [X] ~~Confirm real tech stack for the new bird app web platform~~ — RESOLVED from real signed SOWs (`TJIRP 2 Phase 2` + `TJIRP 2 Phase 3`): real product name **TJIRP**, client Michael Heyns. Web portal is Next.js on Vercel + Supabase (Auth/Storage/RLS); see full details in item 3 below.
*   [ ] Confirm `status` for the bird app entry (proposing `"Completed"` — see item 3 below).

**1. Update existing entry — "Enterprise Event Registration Platform" (`id: 1`)** — copy finalized, ready to implement

*   [ ] Update `description`:
    > "Architected Hexlabs' 'Ultimate Hybrid' event registration platform — a single installable desktop app that switches between a fully offline local-network mode (SQLite-backed, for maximum reliability) and an online Supabase-backed cloud mode. Deployed live at the AI Engineer Event to check in 400+ attendees across two days with QR scanning and instant PDF badge printing, backed by a secure admin console for real-time attendee management, per-event configuration (search logic, QR toggles, PDPA privacy modes), and a drag-and-drop visual badge editor."
*   [ ] Replace placeholder `caseStudy` copy with:
    *   **problem:** "Hexlabs needed a single platform that could run 100% offline for maximum reliability during live events, or fully online for flexibility — and needed to check in 400+ attendees across a two-day AI Engineer Event without downtime, plus give staff the ability to fix data issues and adjust settings per event without touching code."
    *   **approach:** "Built the 'Ultimate Hybrid' Live Operations Engine: an installable desktop app with a mode selector switching between an offline SQLite-backed local network and an online Supabase (PostgreSQL + RLS) cloud mode, QR scanning and instant PDF badge printing, and bulk Excel/CSV attendee import. Followed with an Administrative & Creative Suite adding a secure admin dashboard for multi-event management, per-event configuration toggles (search strictness for PDPA compliance, QR scanner on/off, staff-assisted vs. guest-facing kiosk modes), and a drag-and-drop visual badge editor with dynamic fields and QR codes."
    *   **result:** "Successfully ran registration for 400+ attendees across both days of the AI Engineer Event with smooth on-site QR scanning and badge printing, and gave Hexlabs staff a self-serve admin console to manage attendee issues and event configuration without developer involvement."
*   [ ] Update `techStack` to `['React', 'Electron', 'Node.js', 'Supabase (PostgreSQL/RLS)', 'SQLite']` (drops incorrect `Next.js` and `Local MySQL`).

**2. Add new entry — "Hex Interactive UV Print Station" (Hexlabs)**

*   [ ] Add new `PortfolioItem` (next `id: 8`) once the remaining blocking open questions (image, framework confirmation, status, links, device) are resolved:
    *   **title:** "Hex Interactive UV Print Station | Full-Stack Developer" (using the real product name from the proposal doc, matching the site's existing `Project Name | Role` title convention)
    *   **description:** "Architected a cloud-hosted 'design-to-print' kiosk platform for Hexlabs, letting event attendees design custom merchandise — mugs, phone cases, bottles — on tablet-mounted kiosks using a touch-friendly canvas editor, with a scan-to-upload mobile bridge for uploading personal photos without logging in. A background sync agent on the production PC automatically pulls finished, CMYK-ready designs from the cloud and feeds them straight into the UV printer's RIP software, while Hexlab staff manage events, assets, and templates through an integrated admin dashboard."
    *   **caseStudy.problem:** "Hexlabs' original single-machine UV printing kiosk couldn't scale beyond one venue at a time. They needed a multi-event platform where staff could deploy the same experience across multiple tablets and locations, with attendee-generated designs flowing automatically into their UV printer without manual file handling."
    *   **caseStudy.approach:** "Built a cloud-hosted kiosk web app (Vercel) backed by Supabase, with a touch-friendly visual editor supporting text, stickers, drawings, and photo uploads across configurable product templates (mugs, phone cases, bottles). Added a 'scan-to-upload' mobile bridge so attendees can send photos from their own phones into their kiosk session without logging in, and a lightweight background sync agent that automatically polls for finished designs and drops CMYK-ready files straight into the UV printer's Photoprint RIP hot folder."
    *   **caseStudy.result:** "Delivered a hardware-agnostic, multi-event platform that lets Hexlabs run the same interactive design experience across concurrent events on any tablet, with designs flowing from attendee upload to print-ready file with no manual intervention."
    *   **techStack:** `['Next.js', 'Supabase', 'Vercel', 'Node.js']` — pending confirmation of the exact frontend framework (open question above).
    *   **category:** `'Full Stack'` (fits existing categories; revisit if a more specific category is wanted)
    *   Everything else (`image`, `device`, `links`, `status`, `featured`) — pending open questions above.

**3. Update existing entry — "Scientific Data App" (`id: 2`, the bird app)** — real product name confirmed: **TJIRP** (client: Michael Heyns), from two signed Statements of Work (`TJIRP 2 Phase 2` web portal, dated 2026-03-24; `TJIRP 2 Phase 3` mobile auth/sightings, dated 2026-05-14). Copy finalized below.

*   [ ] Update `title`: "TJIRP Birding Platform | Mobile & Web Systems Architect" (was "Scientific Data App | Mobile Systems Architect" — now using the real product name and reflecting the expanded web scope)
*   [ ] Update `description`:
    > "Expanded TJIRP — a React Native birding encyclopedia app — into a full-stack platform. Shipped a Next.js/Supabase web command center for the research team to manage species data, including a drag-and-drop media pipeline with automatic compression/format conversion and a self-healing CSV importer, then followed with a Phase 3 mobile release adding secure user accounts and a personal sightings engine — letting users log GPS-tagged sightings with photos, organize them into custom lists, and export their data — while an automated image pipeline and sighting-first architecture kept cloud storage costs low."
*   [ ] Add `caseStudy` (currently has none):
    *   **problem:** "The original mobile-only app worked well as a static species encyclopedia, but gave the research team no non-technical way to manage growing species data and media, and gave users no way to save or organize their own sightings without compromising data privacy or inflating cloud storage costs."
    *   **approach:** "Built a Next.js/Supabase web command center (hosted on Vercel) with a real-time database dashboard, a drag-and-drop media pipeline that auto-resizes and compresses images by up to 80% and converts them to WebP/AVIF, a self-healing CSV importer that validates spreadsheet data before it hits the database, and a one-click 'publish' sync so offline-first mobile devices pick up updates as soon as they reconnect. Followed with a Phase 3 mobile release adding Supabase-backed authentication (email/password plus optional Google/Apple login) behind a lazy-auth flow — public browsing stays open, login triggers only on save — Row Level Security for private user data, a multi-list sightings manager, and sighting-first architecture letting one sighting belong to multiple lists without duplicating storage. An automated image pipeline compresses sighting photos to ~150KB, and users can export their data as CSV/Excel or a ZIP of their media."
    *   **result:** "Delivered a full-stack scientific data platform spanning mobile, web, and cloud — giving the research team a no-code content management system and giving users authenticated, privacy-protected personal sightings with efficient storage costs."
*   [ ] Update `techStack` to `['React Native (Expo)', 'Next.js', 'WatermelonDB', 'SQLite', 'Supabase (Auth/Storage/RLS)', 'TypeScript']` (adds the now-confirmed web stack: Next.js on Vercel, Supabase Auth/Storage/RLS).
*   [ ] `status`: both SOWs are signed and dated well within a completed timeline relative to today (Phase 2: 2026-03-24; Phase 3: 2026-05-14, 3–4 week estimate) — proposing `"Completed"`, but flagging for a quick confirmation rather than assuming.
*   [X] ~~Decide: split into two entries?~~ — keeping as one unified entry (same client/product), per original draft assumption.

**4. After content changes land**

*   [ ] Typecheck (`npx tsc --noEmit`) and visually verify `/portfolio` on desktop + mobile — confirm the two updated cards and the new UV Print Platform card render correctly and other cards are unaffected.
*   [ ] Since this touches real client work (Hexlabs, and Michael's bird app), consider a quick confirmation pass with the user before merging, given the specificity of the numbers (400+ attendees, ~150KB compression target, etc.).

---

### **Phase 7: Visual Redesign (after Phase 6)**

Goal: move away from the current "cookie-cutter AI app" feel. Reference sites: benscott.dev, prashantsani.com — both break the generic hero → feature-cards → footer template rhythm in favor of a more personal/editorial layout with custom scroll-driven motion (e.g. GSAP-style animation) and distinct typographic personality.

Priorities called out 2026-07-15, roughly in order:
1.  Generic layout rhythm — move away from predictable hero/cards/footer block structure.
2.  Lack of motion/personality — site feels static; wants scroll animation, transitions, more character in interactions.
3.  Mobile optimization — current layout isn't well optimized for mobile.

Sequencing: deliberately deferred until Phase 6 (`feature/hero-cta`, `feature/testimonials`, `feature/contact-scheduling` [skipped], `feature/case-study-depth`) is merged into `staging`, so the new conversion-focused content/sections exist before the layout around them is reworked.

*   [ ] Revisit reference sites for concrete direction (typography, color, motion library choice) once Phase 6 is done.
*   [ ] Scope which pages/sections are in play (homepage hero, portfolio grid, about, nav) vs. left alone.
*   [ ] Decide on animation approach (Framer Motion is already a dependency via `_app.tsx` page transitions — likely reuse rather than add GSAP).
*   [ ] Mobile-first pass on whichever layout is chosen.