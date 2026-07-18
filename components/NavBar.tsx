// components/NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import ProfilePic from '../public/images/profile.jpg'; // Import the image directly
import { portfolioData } from '../data/portfolioData';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navLinks = [
        { href: "/", text: "~/" },
        { href: "/about", text: "~/about" },
        { href: "/portfolio", text: "~/portfolio" },
        { href: "/resume", text: "~/resume" },
        { href: "/contact", text: "~/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 sm:px-8 bg-bg/90 backdrop-blur-sm border-b border-border text-ink text-sm">
            <Link href="/" className="flex items-center gap-3 no-underline">
                <Image
                    src={ProfilePic}
                    alt="Kum Yew Loke"
                    className="h-10 w-10 rounded-full border border-border"
                    width={40}
                    height={40}
                    placeholder="blur"
                />
                <span className="text-base font-bold text-ink hidden sm:block">{portfolioData.owner.name}</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <li key={link.text}>
                        <Link href={link.href} className="text-ink no-underline hover:text-accent transition-colors duration-300">
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Hamburger Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-ink focus:outline-none">
                    {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    className="absolute top-16 left-0 w-full bg-bg border-b border-border md:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <ul className="flex flex-col items-center p-4">
                        {navLinks.map((link) => (
                            <li key={link.text} className="w-full text-center py-2">
                                <Link
                                    href={link.href}
                                    className="text-base text-ink no-underline hover:text-accent transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
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
