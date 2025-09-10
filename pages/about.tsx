// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import BackgroundInfo from '../components/sections/about/BackgroundInfo';
import TechSkills from '../components/sections/about/TechSkills';
import PageWrapper from '../components/layout/PageWrapper';

const AboutPage: NextPage = () => {
  const { about, technologies, owner } = portfolioData;

  return (
    <>
      <Head>
        <title>About Me | {owner.name}</title>
        <meta name="description" content={about.background} />
      </Head>

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
                <BackgroundInfo about={about} />
                <TechSkills technologies={technologies} />
            </div>
        </PageWrapper>
        
      </motion.section>
    </>
  );
};

export default AboutPage;