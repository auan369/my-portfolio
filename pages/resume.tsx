// pages/resume.tsx
import type { NextPage } from 'next';
import PageWrapper from '../components/layout/PageWrapper';
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
        className="w-full min-h-screen flex flex-col items-center py-20 px-5 bg-[#e1e5ea] text-[#333] font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <PageWrapper>
            <h1 className="text-4xl font-semibold text-[#2d2d2d] mb-8 text-center">
                Resume
            </h1>
            <div className="flex flex-col items-center p-6 w-full max-w-xl bg-white rounded-xl shadow-xl text-center">
            <Image 
            // loading="lazy" 
            src={ResumePic} 
            priority={true}
            alt="Kum Yew Resume" 
            className="h-auto mb-8 rounded-lg shadow-md border border-gray-100"
            />
            <a 
            href="/KumYewResume.pdf" 
            download="KumYewResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg no-underline hover:bg-blue-700 transition-colors duration-300"
            >
                <FaDownload />
                Download PDF
            </a>
            </div>
      </PageWrapper>
    </motion.section>
    </>
  );
};

export default HomePage;