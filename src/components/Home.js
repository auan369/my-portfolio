// Home.js
import React from 'react';
import './Home.css';
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
      className="home-section flex flex-col gap-4 font-titleFont mb-14"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>
        Hello, I'm {portfolioData.owner.nickname}
      </motion.h1>

      <motion.p variants={itemVariants}>
        {portfolioData.owner.description}
      </motion.p>
    </motion.section>
  );
};

export default Home;