// Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import ResumePic from '../../public/images/KumYewResume.jpg';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';


const ResumeSection = () => {
    return (
        <motion.section 
        id="resume" 
        className="w-full flex flex-col items-center py-20 px-5 md:px-20 bg-[#e1e5ea] text-[#333] font-sans"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.1 }}
        >
            <h1 className="text-4xl font-semibold text-[#444] mb-8">
                Resume
            </h1>
            <div className="flex flex-col items-center p-6 w-full max-w-xl bg-white rounded-xl shadow-xl text-center">
            <Image 
            loading="lazy" 
            src={ResumePic} 
            alt="Kum Yew Resume" 
            className="w-full max-w-xs sm:max-w-md mb-6 rounded-lg shadow-lg"
            />
            <a 
            href="/KumYewResume.pdf" 
            download="KumYewResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg no-underline hover:bg-blue-700 transition-colors duration-300"
            >
                <FaDownload />
                Download PDF
            </a>
            </div>
        </motion.section>
    );
};

export default ResumeSection;
