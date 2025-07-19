import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h3>Contact</h3>
            <p>Feel free to connect with me on social media or send me an email:</p>
            <div className="contact-links">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href={portfolioData.contact.email} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope/>
                </a>
            </div>
        </section>
    );
};
export default Contact;