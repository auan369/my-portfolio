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