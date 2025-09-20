// pages/portfolio.tsx
import type { NextPage } from 'next';
import { portfolioData } from '../data/portfolioData'; // Adjust path if needed
import ProjectCard from '../components/ProjectCard'; // Your card component
import Head from 'next/head';
import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: 'Portfolio',
  description: `Explore a selection of web development projects by ${portfolioData.owner.name}, showcasing skills in React, Next.js, and modern web technologies.`,
  // ogImage: 'https://www.myawesomewebsite.com/images/about-us-social.jpg', // A custom social image for this page
};

const PortfolioPage: NextPage = () => {
  return (
    <motion.section 
        id="portfolio"
        className="w-full flex flex-col items-center py-20 px-5 md:px-20 text-[#333] font-sans"
    >
      
      <SEO metadata={metadata} />
      
      <PageWrapper>
        <h1 className="text-4xl font-semibold text-[#2d2d2d] m-10 text-center">Projects</h1>
        <div className="space-y-12"> {/* Adds space between project cards */}
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageWrapper>
    </motion.section>
  );
};

export default PortfolioPage;