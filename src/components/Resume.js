// Resume.js
import React from 'react';
import './Resume.css';
import ResumePic from './images/KumYewResume.png';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h3>Resume</h3>
            <div className="resume-content">
            <img src={ResumePic} alt="Kum Yew Resume" />
            <a href="/KumYewResume.pdf" download="KumYewResume.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
            </a>
            </div>
        </section>
    );
};

export default Resume;
