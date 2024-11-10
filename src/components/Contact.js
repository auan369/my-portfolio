import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h3>Contact</h3>
            <p>Feel free to connect with me on social media or send me an email:</p>
            <div className="contact-links">
                <a href="https://github.com/auan369/" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/kum-yew-loke-74a0b0205/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/lokey_ky/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href="mailto:lokekumyew@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope/>
                </a>
            </div>
        </section>
    );
};
export default Contact;