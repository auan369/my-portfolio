// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { portfolioData } from '../data/portfolioData';
import HeroSection from '../components/sections/HeroSection';


const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{portfolioData.owner.name} | Freelance Web Developer</title>
        <meta
          name="description"
          content={portfolioData.owner.description}
        />
        {/* You can add more meta tags here, like for social sharing */}
      </Head>

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