// pages/about.tsx
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BackgroundInfo from '../components/sections/about/BackgroundInfo';
import TechSkills from '../components/sections/about/TechSkills';
import PageWrapper from '../components/layout/PageWrapper';
import CTABanner from '../components/ui/CTABanner';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: 'About Me | AI-Augmented Engineering',
  description: 'First-Class Honours Engineer leveraging AI-augmented workflows to deliver lead-level architecture at speed. Expert in React, Node.js, AWS, and System Stabilization.',
};

const AboutPage: NextPage = () => {

  return (
    <>
      <SEO metadata={metadata} />

      <motion.section
        id="about"
        className="w-full bg-bg text-ink leading-relaxed py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <PageWrapper>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-xs text-accent">$ cat about.md</span>
              <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2">
                About Me
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
                <BackgroundInfo about={portfolioData.about} />
                <TechSkills technologies={portfolioData.technologies} />
            </div>
            <CTABanner />
        </PageWrapper>

      </motion.section>
    </>
  );
};

export default AboutPage;
