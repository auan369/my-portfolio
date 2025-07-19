import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import IndivProject from './IndivProject';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h3>Projects</h3>
            <div className="projects-intro">
                {portfolioData.projects.map((project) => (
                    <motion.div
                    key={project.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.1 }}
                    >
                        <IndivProject key={project.id} {...project} />
                    </motion.div>
                ))}
            </div>
        </section>

    );
};
export default Projects;