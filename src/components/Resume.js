// Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';
import ResumePic from '../assets/images//KumYewResume.jpg';

const Resume = () => {
    return (
        <motion.section 
        id="resume" className="resume-section"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.1 }}
        >
            <h3>Resume</h3>
            <div className="resume-content">
            <img loading="lazy" src={ResumePic} alt="Kum Yew Resume" />
            <a href="/KumYewResume.pdf" download="KumYewResume.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
            </a>
            </div>
        </motion.section>
    );
};

export default Resume;
