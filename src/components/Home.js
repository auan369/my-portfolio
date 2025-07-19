// Home.js
import React from 'react';
// We no longer need to import the CSS file
// import './Home.css';
import portfolioData from '../data/portfolioData';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Time delay between each child animating in
      delayChildren: 0.2,   // A small delay before the first child starts
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Start 20px down and invisible
  visible: { y: 0, opacity: 1 },   // Animate to its original position and become visible
};

const Home = () => {
  return (
    <motion.section
      id="home"
      // All styles from home-section are now here.
      // min-h-screen is better than h-screen for responsiveness.
      className="min-h-screen flex flex-col justify-center items-center text-center p-5 bg-[#f5f7fa] text-[#333]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        // Mobile-first styles: text-4xl is default, md:text-6xl applies on medium screens and up.
        className="text-4xl md:text-6xl font-bold text-[#2c3e50] m-4"
      >
        Hello, I'm {portfolioData.owner.nickname}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        // Mobile-first styles: text-lg is default, md:text-2xl applies on medium screens and up.
        className="text-lg md:text-2xl leading-relaxed max-w-xl mt-5 text-[#555]"
      >
        {portfolioData.owner.description}
      </motion.p>
    </motion.section>
  );
};

export default Home;