// pages/portfolio.tsx
import type { NextPage } from 'next';
import { portfolioData } from '../data/portfolioData'; // Adjust path if needed
import ProjectCard from '../components/ProjectCard'; // Your card component
import PageWrapper from '../components/layout/PageWrapper';
import CTABanner from '../components/ui/CTABanner';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: 'Case Studies & Technical Portfolio',
  description: `Explore high-stakes engagements by ${portfolioData.owner.name}, featuring venture-backed SaaS stabilization, enterprise event platforms, and offline-first mobile engineering.`,
};

const PortfolioPage: NextPage = () => {
  return (
    <section
        id="portfolio"
        className="w-full min-h-screen flex flex-col items-center py-28 px-5 bg-bg text-ink"
    >

      <SEO metadata={metadata} />

      <PageWrapper>
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-xs text-accent">$ ls ./projects</span>
            <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2">Projects</h1>
          </motion.div>
          <div className="flex flex-col gap-12">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <CTABanner heading="Like what you see?" subheading="Let's talk about your next project." />
        </div>
      </PageWrapper>
    </section>
  );
};

export default PortfolioPage;
