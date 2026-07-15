// src/data/portfolioData.js

import { FaGithub, FaLaptop, FaFile, FaLock, FaMobileAlt, FaDatabase, FaMicrochip } from 'react-icons/fa';

// Import existing images - Update these with actual screenshots/graphics for the new engagements
import pluginImage from '../public/images/plugin.jpg';
import travelSaasImage from '../public/images/travelSaas.jpg';
import eventRegImage from '../public/images/eventReg.jpg';
import birdAppImage from '../public/images/birdApp.jpg';
import saasImage from '../public/images/saasApp.jpg';
import promptImage from '../public/images/prompt.jpg';
import sg60Image from '../public/images/sg60magicball.gif';
import icsrImage from '../public/images/ICSR.jpg';
import cginstrumentsImage from '../public/images/cg.gif';
// You should create/use abstract high-quality placeholders for the new "Consultancy" items
import { StaticImageData } from 'next/image';

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  device: 'laptop' | 'phone';
  links: { label: string; icon: React.ReactNode; url: string }[];
  category: string;
  status: string;
  featured: boolean;
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
  };
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  attribution: string;
}

export interface PortfolioData {
  projects: PortfolioItem[];
  owner: {
    name: string;
    nickname: string;
    title: string;
    description: string;
    outcomes: string[];
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
  categories: string[];
  technologies: {
    [key: string]: string[];
  };
  testimonials: Testimonial[];
  about: {
    background: string;
    skills: string;
    openToWork: string;
  };
}

export const portfolioData: PortfolioData = {
  projects: [
    {
      id: 0,
      title: "Venture-Backed Travel SaaS (USA) | Lead Web Engineer",
      description: "Spearheaded the forensic codebase audit and stabilization of a legacy web platform following a critical security event. Remediated vulnerabilities by refactoring AWS Lambda deployments and Cognito authentication flows. Orchestrated a full-scale migration to Node 20 and established automated CI/CD pipelines to ensure 99.9% production uptime during rapid feature iteration.",
      techStack: ['React', 'Node.js', 'AWS Lambda', 'AWS Cognito', 'TypeScript', 'GitHub Actions'],
      image: travelSaasImage,
      device: 'laptop',
      links: [{ label: 'Case Study (NDA)', icon: <FaLock/>, url: '' }],
      category: 'Full Stack',
      status: 'Ongoing',
      featured: true
    },
    {
      id: 1,
      title: "Enterprise Event Registration Platform | Systems Architect",
      description: "Architected Hexlabs' 'Ultimate Hybrid' event registration platform — a single installable desktop app that switches between a fully offline local-network mode (SQLite-backed, for maximum reliability) and an online Supabase-backed cloud mode. Deployed live at the AI Engineer Event to check in 400+ attendees across two days with QR scanning and instant PDF badge printing, backed by a secure admin console for real-time attendee management, per-event configuration (search logic, QR toggles, PDPA privacy modes), and a drag-and-drop visual badge editor.",
      techStack: ['React', 'Electron', 'Node.js', 'Supabase (PostgreSQL/RLS)', 'SQLite'],
      image: eventRegImage,
      device: 'laptop',
      links: [{ label: 'System Architecture', icon: <FaDatabase/>, url: '' }],
      category: 'Full Stack',
      status: 'Completed',
      featured: true,
      caseStudy: {
        problem: "Hexlabs needed a single platform that could run 100% offline for maximum reliability during live events, or fully online for flexibility — and needed to check in 400+ attendees across a two-day AI Engineer Event without downtime, plus give staff the ability to fix data issues and adjust settings per event without touching code.",
        approach: "Built the 'Ultimate Hybrid' Live Operations Engine: an installable desktop app with a mode selector switching between an offline SQLite-backed local network and an online Supabase (PostgreSQL + RLS) cloud mode, QR scanning and instant PDF badge printing, and bulk Excel/CSV attendee import. Followed with an Administrative & Creative Suite adding a secure admin dashboard for multi-event management, per-event configuration toggles (search strictness for PDPA compliance, QR scanner on/off, staff-assisted vs. guest-facing kiosk modes), and a drag-and-drop visual badge editor with dynamic fields and QR codes.",
        result: "Successfully ran registration for 400+ attendees across both days of the AI Engineer Event with smooth on-site QR scanning and badge printing, and gave Hexlabs staff a self-serve admin console to manage attendee issues and event configuration without developer involvement."
      }
    },
    {
      id: 2,
      title: "TJIRP Birding Platform | Mobile & Web Systems Architect",
      description: "Expanded TJIRP — a React Native birding encyclopedia app — into a full-stack platform. Shipped a Next.js/Supabase web command center for the research team to manage species data, including a drag-and-drop media pipeline with automatic compression/format conversion and a self-healing CSV importer, then followed with a Phase 3 mobile release adding secure user accounts and a personal sightings engine — letting users log GPS-tagged sightings with photos, organize them into custom lists, and export their data — while an automated image pipeline and sighting-first architecture kept cloud storage costs low.",
      techStack: ['React Native (Expo)', 'Next.js', 'WatermelonDB', 'SQLite', 'Supabase (Auth/Storage/RLS)', 'TypeScript'],
      image: birdAppImage,
      device: 'phone',
      links: [{ label: 'Offline Architecture', icon: <FaMobileAlt/>, url: '' }],
      category: 'Mobile',
      status: 'Completed',
      featured: true,
      caseStudy: {
        problem: "The original mobile-only app worked well as a static species encyclopedia, but gave the research team no non-technical way to manage growing species data and media, and gave users no way to save or organize their own sightings without compromising data privacy or inflating cloud storage costs.",
        approach: "Built a Next.js/Supabase web command center (hosted on Vercel) with a real-time database dashboard, a drag-and-drop media pipeline that auto-resizes and compresses images by up to 80% and converts them to WebP/AVIF, a self-healing CSV importer that validates spreadsheet data before it hits the database, and a one-click 'publish' sync so offline-first mobile devices pick up updates as soon as they reconnect. Followed with a Phase 3 mobile release adding Supabase-backed authentication (email/password plus optional Google/Apple login) behind a lazy-auth flow — public browsing stays open, login triggers only on save — Row Level Security for private user data, a multi-list sightings manager, and sighting-first architecture letting one sighting belong to multiple lists without duplicating storage. An automated image pipeline compresses sighting photos to ~150KB, and users can export their data as CSV/Excel or a ZIP of their media.",
        result: "Delivered a full-stack scientific data platform spanning mobile, web, and cloud — giving the research team a no-code content management system and giving users authenticated, privacy-protected personal sightings with efficient storage costs."
      }
    },
    {
      id: 3,
      title: "AI Generation Platform | Prompt Architecture Consultant",
      description: "Conducted forensic technical audits of an LLM-driven generation platform, identifying systemic architectural flaws and data bottlenecks. Engineered V2 prompt reasoning chains and structured output schemas to ensure deterministic model behavior and achieve 95%+ consistency in structured JSON outputs while minimizing hallucinations.",
      techStack: ['LLM Orchestration', 'Prompt Engineering', 'Python', 'JSON Schema'],
      image: promptImage,
      device: 'laptop',
      links: [{ label: 'Technical Audit', icon: <FaFile/>, url: '#' }],
      category: 'AI Integration',
      status: 'Completed',
      featured: true
    },
    {
      id: 4,
      title: "Email Verification SaaS Engine | Systems Engineer",
      description: "Designed a cost-optimized, multi-stage email validation engine using Redis caching to minimize paid API usage. Achieved a 36% reduction in operational costs by implementing a proprietary filtering logic for high-volume GTM (Go-To-Market) tools.",
      techStack: ['Python', 'Node.js', 'Redis', 'REST APIs'],
      image: saasImage,
      device: 'laptop',
      links: [{ label: 'Scalability Architecture', icon: <FaDatabase/>, url: '' }], 
      category: 'Full Stack',
      status: 'Completed',
      featured: false
    },
    {
      id: 5,
      title: "Interactive SG60 Magic Ball | Full-Stack Developer",
      description: "Engineered a highly interactive full-stack web application featuring complex CSS-driven holographic projections. Architected a serverless backend with Row Level Security (RLS) for enterprise-grade data protection and custom PostgreSQL RPCs for atomic data updates.",
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
      image: sg60Image,
      device: 'laptop',
      links: [
        { label: 'GitHub', icon: <FaGithub/>, url: 'https://github.com/SG60Magicball/sg60-magicball' },
        { label: 'Demo', icon: <FaLaptop/>, url: 'https://sg60-magicball.vercel.app/' },
      ],
      category: 'Full Stack',
      status: 'Completed',
      featured: false
    },
    {
      id: 6,
      title: "Corporate Identity for Precision Engineering | CG Instruments",
      description: "Designed and engineered a high-performance corporate web presence for a scientific instrument manufacturer. Leveraged my background in Mechanical Engineering to translate complex technical product catalogs into an intuitive, accessible digital experience. Optimized for SEO and global market reach.",
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'], // Update with actual stack
      image: cginstrumentsImage, // You'll need to add a screenshot import
      device: 'laptop',
      links: [
        { 
          label: 'Live Site', 
          icon: <FaLaptop/>, 
          url: 'https://www.cginstruments.com/' 
        }
      ],
      category: 'Frontend',
      status: 'Completed',
      featured: false // Keep false so it sits in the 'Selected Projects' grid, not the top hero slots
    },
    {
      id: 7,
      title: "Thesis: 3D Human Digital Twin | Robotics Research",
      description: "Published at ICSR + BioMed 2024. Implemented soft-body physics to replicate human tissue in 3D walking simulations. Developed custom C++ scripting and Python APIs for high-accuracy human-robot interaction modeling.",
      techStack: ['C++', 'Python', 'Modeling & Simulation', 'MuJoCo'],
      image: icsrImage,
      device: 'laptop',
      links: [{ label: 'Publication', icon: <FaFile/>, url: 'https://link.springer.com/book/9789819789627' }],
      category: 'Research',
      status: 'Published',
      featured: false
    }
  ],

  owner: {
    name: "Loke Kum Yew",
    nickname: "Loki",
    title: "Full-Stack Engineer & AI Systems Architect",
    description: "Senior Technical Consultant specializing in stabilizing fragile web platforms, architecting local-first mobile solutions, and accelerating product velocity through AI-augmented workflows.",
    outcomes: [
      "Stabilizing fragile platforms",
      "Offline-first mobile architecture",
      "Multi-tenant SaaS builds"
    ]
  },

  contact: {
    email: "loke@lokesoftware.com",
    linkedin: "https://www.linkedin.com/in/kum-yew-loke-74a0b0205/",
    github: "https://github.com/auan369/",
    instagram: "https://www.instagram.com/lokey_ky/"
  },

  categories: ['All', 'Full Stack', 'Mobile', 'AI Integration', 'Research'],

  testimonials: [
    {
      id: 0,
      quote: "It works perfectly — the authentication, the extra notes, everything. Great to wrap up this part of the process.",
      name: "Individual Client",
      attribution: "Cross-Platform Mobile App"
    },
    {
      id: 1,
      quote: "Thank you for all the assistance and patience along the way — we'll keep testing to catch anything that pops up here and there, but it's such a relief to finally have this working. Thanks again, Loki!",
      name: "Enterprise Client",
      attribution: "Events Company, Custom Software"
    }
  ],

  technologies: {
    "Architecture & Logic": [
      'TypeScript', 'Next.js', 'React', 'Node.js', 'Python'
    ],
    "Cloud & Infrastructure": [
      'AWS (Lambda, Cognito, S3, CloudFront)', 
      'Supabase (PostgreSQL/RLS)', 
      'Vercel', 'Docker', 'CI/CD (GitHub Actions)'
    ],
    "Mobile & Desktop": [
      'React Native (Expo)', 
      'Local-First Persistence (WatermelonDB)', 
      'Cross-platform Desktop (Electron)',
      'MySQL / SQLite'
    ],
    "AI-Augmented Development": [
      'Reasoning Chain Engineering',
      'AI Code Generation (Cursor, Cline)',
      'LLM API Integration',
      'Forensic Codebase Stabilization'
    ]
  },

  about: {
    background: "I am a Full-Stack Engineer with First-Class Honours from NTU, operating at the intersection of robust system architecture and rapid AI-augmented development. I act as a strategic partner for startups and enterprises, turning technical debt into scalable assets.",
    skills: "My workflow is built on extreme efficiency. By integrating custom LLM reasoning chains and professional-grade AI tools into my development cycle, I deliver lead-level architecture and production-ready code at a velocity that far exceeds industry standards.",
    openToWork: "I am currently accepting new strategic technical partnerships. Let's discuss how I can help you stabilize your platform or architect your next zero-to-one build."
  }
};

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  if (category === 'All') {
    return portfolioData.projects;
  }
  return portfolioData.projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return portfolioData.projects.find(project => project.id === id);
};

export const getProjectsByTechnology = (tech) => {
  return portfolioData.projects.filter(project => 
    project.techStack.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

export default portfolioData;