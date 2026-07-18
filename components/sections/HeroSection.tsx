// components/sections/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NodeNetwork from '../ui/NodeNetwork';

interface OwnerData {
  name: string;
  nickname: string;
  title: string;
  description: string;
  outcomes: string[];
}

interface HeroSectionProps {
  owner: OwnerData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ owner }) => {
  return (
    <motion.section
      id="home"
      className="relative min-h-0 lg:min-h-[92vh] flex items-center overflow-hidden bg-bg pt-28 pb-24 lg:pt-24 lg:pb-16 px-5 sm:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NodeNetwork color="#5fcb93" className="opacity-40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        {/* Left: pitch */}
        <div className="text-left">
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs sm:text-sm text-accent border border-border rounded px-2.5 py-1 mb-6 tracking-wide"
          >
            $ status --available
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight"
          >
            Hello, I&apos;m {owner.nickname}
            <span className="caret text-accent">_</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg font-medium text-muted mt-3 mb-6"
          >
            {owner.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base leading-relaxed max-w-lg text-muted"
          >
            {owner.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-accent text-bg font-bold text-sm py-3 px-6 rounded hover:bg-accent-dim transition-colors duration-300"
            >
              [ Get in Touch ]
            </Link>
          </motion.div>
        </div>

        {/* Right: terminal window echoing the same info as "output" */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block bg-surface border border-border rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-raised">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            <span className="ml-3 text-xs text-muted">loki@lokesoftware:~</span>
          </div>
          <div className="p-5 text-sm leading-relaxed">
            <p className="text-muted">$ whoami</p>
            <p className="text-ink mb-4">{owner.name}</p>

            <p className="text-muted">$ cat capabilities.txt</p>
            {owner.outcomes.map((outcome) => (
              <p key={outcome} className="text-ink">
                <span className="text-accent">&gt;</span> {outcome}
              </p>
            ))}

            <p className="text-muted mt-4">
              $ <span className="caret text-accent">_</span>
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#testimonials"
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-accent transition-colors duration-300"
        aria-label="Scroll to testimonials"
      >
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.a>
    </motion.section>
  );
};

export default HeroSection;
