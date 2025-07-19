// About.js
import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

// We get both the 'about' text and 'technologies' data
const { about, technologies } = portfolioData;

const About = () => {
  return (
    <motion.section
      id="about"
      // Mobile-first layout: 1 column by default, 2 columns on medium screens (md) and up
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start py-20 px-5 md:px-20 bg-[#e1e5ea] text-[#333] font-sans leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Title - Spans both columns on larger screens */}
      <h3 className="text-4xl font-semibold text-center text-[#2d2d2d] mb-4 md:col-span-2">
        About Me
      </h3>

      {/* Left Column: Background Info */}
      <div className="w-full space-y-4">
        <h4 className="text-2xl font-medium text-[#4b4b4b] border-b-2 border-gray-300 pb-2">Background</h4>
        <p className="text-lg text-[#555]">{about.background}</p>
        <p className="text-lg text-[#555]">{about.skills}</p>
        <p className="text-lg text-[#555]">{about.openToWork}</p>
      </div>

      {/* Right Column: Technical Skills */}
      <div className="w-full">
        <h4 className="text-2xl font-medium text-[#4b4b4b] border-b-2 border-gray-300 pb-2">Technologies</h4>
        
        {/* We dynamically generate the skills sections from our data object */}
        {Object.entries(technologies).map(([category, skills]) => (
          <div key={category} className="my-5">
            <h5 className="w-full text-base font-bold text-[#222] mt-4 mb-3 capitalize">{category}</h5>
            <ul className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <li 
                  key={skill}
                  className="bg-[#e6e9ef] rounded-md py-1.5 px-3 text-sm text-[#333] shadow-md border border-gray-200 hover:bg-[#d1d7e0] transition-colors duration-300 cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;