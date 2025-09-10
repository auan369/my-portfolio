// components/NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaProjectDiagram, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import ProfilePic from '../public/images/profile.jpg'; // Import the image directly

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Update hrefs to point to pages, not section IDs
    const navLinks = [
        { href: "/", text: "Home", icon: <FaHome /> },
        { href: "/about", text: "About", icon: <FaUser /> },
        { href: "/portfolio", text: "Portfolio", icon: <FaProjectDiagram /> },
        // Assuming you'll have a resume page or a direct file link
        { href: "/resume.pdf", text: "Resume", icon: <FaFilePdf /> }, 
        { href: "/contact", text: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 sm:px-8 bg-[#333] text-white shadow-lg">
            <Link href="/" className="flex items-center gap-3 no-underline">
                <Image
                    src={ProfilePic}
                    alt="Kum Yew Loke"
                    className="h-12 w-12 rounded-full border-2 border-gray-400"
                    width={48} // Provide actual width of the image
                    height={48} // Provide actual height of the image
                    placeholder="blur"
                />
                <span className="text-xl font-bold text-white hidden sm:block">Kum Yew Loke</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <li key={link.text}>
                        <Link href={link.href} className="flex items-center gap-2 text-base text-white no-underline hover:text-gray-300 hover:underline transition-colors duration-300">
                            <span className="text-lg">{link.icon}</span>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Hamburger Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
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
                                <Link
                                    href={link.href}
                                    className="flex items-center justify-center gap-3 text-lg text-white no-underline hover:text-gray-300 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBar;