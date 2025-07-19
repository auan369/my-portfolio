# Portfolio Improvement Task List

**Repository:** `https://github.com/auan369/my-portfolio`

This checklist outlines the steps to refactor and enhance the portfolio website. The tasks are ordered by priority, starting with maintainability and moving to performance, automation, and refinement.

## Phase 1: Code Maintainability & Data Abstraction

*Goal: Separate data from the UI to make future updates easy and error-free.*

- [X] **1.1: Create Data Directory and File**
  - In the `src` folder, create a new directory named `data`.
  - Inside `src/data`, create a new file named `portfolioData.js`.

- [X] **1.2: Abstract Project Data**
  - Open `src/data/portfolioData.js`.
  - Import the project images at the top of the file (e.g., `import projectOne from "../assets/images/projects/projectOne.jpg";`).
  - Create and export an array named `projectsData`. Each object in the array should represent a project and have the following structure:
    ```javascript
    export const projectsData = [
      {
        id: 1,
        title: "SOCIAL MEDIA CLONE",
        des: "A full-stack social media application...",
        src: projectOne, // The imported image variable
        githubLink: "https://github.com/your-repo/...",
        liveLink: "https://your-live-site.com/..."
      },
      // ... more project objects
    ];
    ```
  - Populate this array with the data currently hardcoded in `src/components/Projects.jsx`.

- [ ] **1.3: Refactor `Projects.jsx` to Use Abstracted Data**
  - In `src/components/Projects.jsx`, import the `projectsData` array: `import { projectsData } from '../data/portfolioData';`.
  - Remove the hardcoded `<ProjectsCard />` components.
  - Replace them with a `.map()` loop that renders a `ProjectsCard` for each item in the `projectsData` array.
    ```jsx
    <div className="grid ...">
      {projectsData.map((project) => (
        <ProjectsCard
          key={project.id}
          title={project.title}
          des={project.des}
          src={project.src}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
    ```

- [X] **1.4: Refactor `ProjectsCard.jsx` to Accept Props**
  - Modify `src/components/ProjectsCard.jsx` to receive props: `{ title, des, src, githubLink, liveLink }`.
  - Use these props to populate the card's content. For example, the links should now be dynamic:
    ```jsx
    // From this:
    <a href="https://github.com/auan369/social-media" target="_blank"> ... </a>
    // To this:
    <a href={githubLink} target="_blank" rel="noopener noreferrer"> ... </a>
    ```

- [ ] **1.5: (Optional but Recommended) Abstract Resume/Skills Data**
  - In `src/data/portfolioData.js`, create and export another object or array for your skills and experience.
  - Refactor `src/components/Resume.jsx` to import and map over this data, similar to the projects section.

## Phase 2: Performance Optimization

*Goal: Make the website load faster and feel smoother for the user.*

- [ ] **2.1: Optimize Images**
  - For each image in `src/assets/images/`, use an online tool like [Squoosh](https://squoosh.app/) to compress it.
  - **(Optional)** Convert the compressed images to the `.webp` format for even better performance.
  - In `src/components/ProjectsCard.jsx`, add the `loading="lazy"` attribute to the `<img>` tag to defer loading of off-screen images.
    ```html
    <img loading="lazy" ... />
    ```

- [ ] **2.2: Implement Code Splitting with `React.lazy`**
  - In `src/App.jsx`, change the static imports for components that are "below the fold" to be dynamic.
  - Target components: `Projects`, `Resume`, `Contact`, `Footer`.
    ```jsx
    // Change this:
    import Projects from './components/Projects';
    // To this:
    const Projects = React.lazy(() => import('./components/Projects'));
    ```

- [ ] **2.3: Add `<Suspense>` Fallback**
  - In `src/App.jsx`, wrap the lazy-loaded components in a `<React.Suspense>` component.
  - Provide a simple fallback UI, like a loading spinner or text, to show while the component code is being downloaded.
    ```jsx
    import React, { Suspense } from 'react';
    // ...
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </Suspense>
    ```

- [ ] **2.4: Optimize Animations**
  - In components that use Framer Motion for entrance animations (like `Title.jsx` or the main `section` tags), replace the `animate` prop with `whileInView`.
  - This ensures animations only trigger when the element is visible in the viewport.
    ```jsx
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // `once: true` prevents re-animating on scroll
      transition={{ duration: 0.5 }}
    >
      {/* Component content */}
    </motion.div>
    ```

## Phase 3: CI/CD & Testing

*Goal: Automate code checks and testing to ensure quality and stability.*

- [ ] **3.1: Set up GitHub Actions for Continuous Integration (CI)**
  - At the root of your project, create a directory path: `.github/workflows/`.
  - Inside that path, create a file named `ci.yml`.
  - Paste the following content into `ci.yml`:
    ```yaml
    name: CI Pipeline

    on:
      push:
        branches: [ main ]
      pull_request:
        branches: [ main ]

    jobs:
      build-and-test:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v3
          - name: Set up Node.js
            uses: actions/setup-node@v3
            with:
              node-version: 18
          - name: Install dependencies
            run: npm install
          - name: Run tests
            run: npm test
          - name: Run build
            run: npm run build
    ```

- [ ] **3.2: Install Testing Libraries**
  - In your terminal, run this command to install Vitest and React Testing Library:
    ```bash
    npm install -D vitest @testing-library/react jsdom
    ```

- [ ] **3.3: Configure Vite for Testing**
  - Open `vite.config.js` and add the `test` configuration object:
    ```javascript
    export default defineConfig({
      plugins: [react()],
      test: { // <-- Add this block
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.js', // Optional: for global test setup
      },
    });
    ```