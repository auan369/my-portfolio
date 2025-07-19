// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
// We no longer need to import the CSS file
// import './Projects.css';
import IndivProject from './IndivProject';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    return (
        // All styles from `.projects-section` are now here
        <section 
            id="projects" 
            className="w-full flex flex-col items-center py-20 px-5 md:px-20 bg-[#f7f8fa] text-[#333] font-sans"
        >
            {/* Styles for the h3 title */}
            <h3 className="text-4xl font-semibold text-[#2d2d2d] mb-4">
                Projects
            </h3>

            {/* This div just acts as a container for the mapped projects */}
            <div className="w-full max-w-screen-lg flex flex-col items-center">
                {portfolioData.projects.map((project, index) => (
                    // Added a delay based on the project's index for a nice staggered effect
                    <motion.div
                        key={project.id}
                        className="w-full" // Ensure the motion div takes full width
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <IndivProject {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;