// pages/resume.tsx
import type { NextPage } from 'next';
import PageWrapper from '../components/layout/PageWrapper';
import CTABanner from '../components/ui/CTABanner';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import React from 'react';
import ResumePic from '../public/images/KumYewResume.jpg';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: 'Resume | Senior Full-Stack Engineer',
  description: `View the professional credentials of ${portfolioData.owner.name}. Expertise in TypeScript, AWS, Next.js, and Mobile System Architecture.`,
};


const HomePage: NextPage = () => {
  return (
    <>

    <SEO metadata={metadata} />

    <motion.section
        id="resume"
        className="w-full min-h-screen flex flex-col items-center py-28 px-5 bg-bg text-ink"
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
              className="mb-10 text-center"
            >
              <span className="text-xs text-accent">$ cat resume.pdf</span>
              <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2">
                  Resume
              </h1>
            </motion.div>
            <div className="flex flex-col items-center p-6 w-full max-w-xl bg-surface border border-border rounded-lg text-center">
            <Image
            // loading="lazy"
            src={ResumePic}
            priority={true}
            alt="Kum Yew Resume"
            className="h-auto mb-8 rounded-lg border border-border"
            />
            <a
            href="/KumYewResume.pdf"
            download="KumYewResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-base font-bold text-bg bg-accent rounded no-underline hover:bg-accent-dim transition-colors duration-300"
            >
                <FaDownload />
                [ Download PDF ]
            </a>
            </div>
            <CTABanner heading="Want to discuss my experience?" subheading="Let's set up a conversation." />
      </PageWrapper>
    </motion.section>
    </>
  );
};

export default HomePage;
