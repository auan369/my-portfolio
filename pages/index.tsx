// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { portfolioData } from '../data/portfolioData';
import HeroSection from '../components/sections/HeroSection';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: `Full-Stack Engineer & AI Systems Architect | Loke Software`,
  description: "Strategic technical partner for startups and enterprises. Specializing in AI-augmented development, AWS infrastructure, and high-performance web/mobile architecture.",
};

const HomePage: NextPage = () => {
  return (
    <>
      
      <SEO metadata={metadata} />
      

      {/* Step 3: Use the component and pass the required data as a prop */}
      <HeroSection owner={portfolioData.owner} />

      {/* 
        This is where you would assemble the rest of your page:
        <AboutSection />
        <PortfolioSection featuredOnly={true} />
        ...and so on.
      */}
    </>
  );
};

export default HomePage;