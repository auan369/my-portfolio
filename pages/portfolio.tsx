// pages/portfolio.tsx
import type { NextPage } from 'next';
import { portfolioData } from '../data/portfolioData'; // Adjust path if needed
import ProjectCard from '../components/ProjectCard'; // Your card component
import Head from 'next/head';

const PortfolioPage: NextPage = () => {
  return (
    <section id="portfolio">
      <Head>
        <title>{portfolioData.owner.name} | Portfolio</title>
        <meta
          name="description"
          content={`Explore a selection of web development projects by ${portfolioData.owner.name}, showcasing skills in React, Next.js, and modern web technologies.`}
        />
      </Head>
      <h3 className="text-4xl font-semibold text-[#2d2d2d] m-10 text-center">Projects</h3>
      <div className="space-y-12"> {/* Adds space between project cards */}
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;