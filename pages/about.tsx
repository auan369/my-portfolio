// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BackgroundInfo from '../components/sections/about/BackgroundInfo';
import TechSkills from '../components/sections/about/TechSkills';
import PageWrapper from '../components/layout/PageWrapper';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: 'About Me | AI-Augmented Engineering',
  description: 'First-Class Honours Engineer leveraging AI-augmented workflows to deliver lead-level architecture at speed. Expert in React, Node.js, AWS, and System Stabilization.',
};

const AboutPage: NextPage = () => {

  return (
    <>
      {/* <Head> */}
        {/* <title>{portfolioData.owner.name} | About Me</title> */}
        {/* <meta name="description" content={about.background} /> */}
      <SEO metadata={metadata} />
      {/* </Head> */}

      <motion.section
        id="about"
        className="w-full bg-[#e1e5ea] text-[#333] font-sans leading-relaxed py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <PageWrapper>
            <h1 className="text-4xl font-semibold text-center text-[#2d2d2d] mb-8">
            About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
                <BackgroundInfo about={portfolioData.about} />
                <TechSkills technologies={portfolioData.technologies} />
            </div>
        </PageWrapper>
        
      </motion.section>
    </>
  );
};

export default AboutPage;