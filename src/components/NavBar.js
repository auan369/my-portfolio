// NavBar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaProjectDiagram, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for the mobile menu
import Profile from '../assets/images/profile.jpg';

function NavBar() {
    // State to manage whether the mobile menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // An array of link objects makes the code cleaner and easier to manage
    const navLinks = [
        { href: "/", text: "Home", icon: <FaHome /> },
        { href: "#about", text: "About", icon: <FaUser /> },
        { href: "#projects", text: "Projects", icon: <FaProjectDiagram /> },
        { href: "#resume", text: "Resume", icon: <FaFilePdf /> },
        { href: "#contact", text: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 sm:px-8 bg-[#333] text-white shadow-lg">
            {/* Brand/Logo Section */}
            <a href="/" className="flex items-center gap-3 no-underline">
                <img src={Profile} alt="Kum Yew Loke" className="h-12 w-12 rounded-full border-2 border-gray-400" />
                <span className="text-xl font-bold text-white hidden sm:block">Kum Yew Loke</span>
            </a>

            {/* Desktop Menu Links - Hidden on mobile, visible on medium screens and up */}
            <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <li key={link.text}>
                        <a href={link.href} className="flex items-center gap-2 text-base text-white no-underline hover:text-gray-300 hover:underline transition-colors duration-300">
                            <span className="text-lg">{link.icon}</span>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Hamburger Button - Visible on mobile, hidden on medium screens and up */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Appears when isOpen is true */}
            {isOpen && (
                <motion.div
                    className="absolute top-16 left-0 w-full bg-[#333] md:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <ul className="flex flex-col items-center p-4">
                        {navLinks.map((link) => (
                            <li key={link.text} className="w-full text-center py-2">
                                <a 
                                    href={link.href} 
                                    className="flex items-center justify-center gap-3 text-lg text-white no-underline hover:text-gray-300 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)} // Close menu on link click
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}

export default NavBar;