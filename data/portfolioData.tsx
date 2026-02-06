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
}

export interface PortfolioData {
  projects: PortfolioItem[];
  owner: {
    name: string;
    nickname: string;
    title: string;
    description: string;
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
      description: "Architected a greenfield multi-tenant SaaS platform for large-scale enterprise events. Built cross-platform Windows and Mac applications featuring local MySQL persistence for 100% offline reliability. Engineered a custom web-to-hardware bridge for industrial UV Printing Kiosks, enabling real-time merchandise customization via mobile-to-web API interactions.",
      techStack: ['Next.js', 'Supabase', 'Local MySQL', 'Node.js', 'Electron'],
      image: eventRegImage,
      device: 'laptop',
      links: [{ label: 'System Architecture', icon: <FaDatabase/>, url: '' }],
      category: 'Full Stack',
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: "Scientific Data App | Mobile Systems Architect",
      description: "Developed a high-performance React Native iOS application utilizing WatermelonDB and SQLite to provide a seamless 100% local-first user experience. Designed a custom synchronization engine to orchestrate the asynchronous transfer of large-scale media assets and complex relational records from a Supabase cloud backend.",
      techStack: ['React Native (Expo)', 'WatermelonDB', 'SQLite', 'Supabase', 'TypeScript'],
      image: birdAppImage,
      device: 'phone',
      links: [{ label: 'Offline Architecture', icon: <FaMobileAlt/>, url: '' }],
      category: 'Mobile',
      status: 'In Progress',
      featured: true
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
      id: 5,
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
      id: 6,
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
    description: "Senior Technical Consultant specializing in stabilizing fragile web platforms, architecting local-first mobile solutions, and accelerating product velocity through AI-augmented workflows."
  },

  contact: {
    email: "lokekumyew@gmail.com",
    linkedin: "https://www.linkedin.com/in/kum-yew-loke-74a0b0205/",
    github: "https://github.com/auan369/",
    instagram: "https://www.instagram.com/lokey_ky/"
  },

  categories: ['All', 'Full Stack', 'Mobile', 'AI Integration', 'Research'],

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