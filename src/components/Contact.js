// Contact.js
import React from 'react';
import { motion } from 'framer-motion';
// We no longer need to import the CSS file
// import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
    // A small array makes the JSX much cleaner
    const socialLinks = [
        { href: portfolioData.contact.github, icon: <FaGithub />, label: "GitHub" },
        { href: portfolioData.contact.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
        { href: portfolioData.contact.instagram, icon: <FaInstagram />, label: "Instagram" },
        { href: `mailto:${portfolioData.contact.email}`, icon: <FaEnvelope />, label: "Email" },
    ];

    return (
        <motion.section
            id="contact"
            // Styles for the main section wrapper
            className="w-full text-center py-20 px-5 bg-[#f0f4f8] text-[#333] font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Title */}
            <h3 className="text-4xl font-semibold text-[#2d2d2d] mb-4">
                Contact
            </h3>

            {/* Subtitle */}
            <p className="text-lg text-[#555] mb-8">
                Feel free to connect with me on social media or send me an email:
            </p>

            {/* Social Links Container */}
            <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label} // Important for accessibility
                        // Styles for the link/icon, including hover and transition effects
                        className="text-4xl sm:text-5xl text-[#333] p-4 rounded-full hover:bg-[#333] hover:text-white hover:scale-110 transform transition-all duration-300"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </motion.section>
    );
};

export default Contact;