// components/sections/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

// A simple interface for the data we expect.
// In a real app, you might share this type from your data file.
interface OwnerData {
  nickname: string;
  description: string;
}

// Define the props for our HeroSection component
interface HeroSectionProps {
  owner: OwnerData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ owner }) => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-[#2c3e50] m-4"
      >
        Hello, I'm {owner.nickname}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-2xl leading-relaxed max-w-xl mt-5 text-[#555]"
      >
        {owner.description}
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;