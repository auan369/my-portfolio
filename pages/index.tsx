// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { portfolioData } from '../data/portfolioData';
import HeroSection from '../components/sections/HeroSection';
import SEO from '../components/SEO';
import { PageMetadata } from '../components/SEO'; // Import the type

const metadata: PageMetadata = {
  title: `Freelance Web Developer`,
  description: portfolioData.owner.description,
  // ogImage: 'https://www.myawesomewebsite.com/images/about-us-social.jpg', // A custom social image for this page
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