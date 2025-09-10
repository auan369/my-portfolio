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

*   [ ] **Move Components:** Move your `src/components` folder to the root of your project (so it's just `components/`).

*   [ ] **Recreate Your Pages(as .tsx files):**  For each page, create a .tsx file in the pages directory and move your component code into it, adding basic types like `NextPage`.

*   [ ] **Create `pages/_app.tsx`:** Create this file to act as your global layout wrapper. This is where your `<Navbar>`, `<Footer>`, and global CSS will go.

*   [ ] **Convert Routing:**
    *   [ ] Find all uses of `<Link>` from `react-router-dom`.
    *   [ ] Replace them with `<Link>` from `next/link` (e.g., `to="/about"` becomes `href="/about"`).

*   [ ] **Type Your Components:** As you migrate components, convert them to .tsx and create interfaces for their props.

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