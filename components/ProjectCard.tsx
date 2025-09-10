// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '../data/portfolioData';

// --- Type Definitions for Props ---

// Type for a single link (e.g., GitHub, Live Demo)
// interface LinkItem {
//   url: string;
//   icon: React.ReactNode; // Allows passing in icons from react-icons
//   label: string;
// }

// The main props interface for our ProjectCard component
export interface ProjectCardProps extends PortfolioItem {}

// --- Device Frame Sub-components ---
// Encapsulating the frame logic into its own component makes the main component much cleaner.

const LaptopFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex justify-center items-center w-[30rem] h-[20rem] p-4 border-[1rem] border-black rounded-2xl bg-black">
    {children}
    {/* The base of the laptop */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[22rem] h-8 bg-black rounded-md" />
  </div>
);

const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex justify-center items-center w-[15rem] h-[25rem] p-2 border-[1rem] border-black rounded-2xl bg-black">
    {/* The "notch" of the phone */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#333] rounded-full z-10" />
    {children}
  </div>
);


// --- The Main ProjectCard Component ---

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  const { title, description, techStack, image, links, device } = project;
  const deviceImageBaseClasses = "w-full h-full object-cover rounded-md [image-rendering:pixelated]";

  return (
    <div className="flex flex-col lg:flex-row w-full my-5 bg-[#f9f9f9] rounded-lg overflow-hidden shadow-lg hover:bg-[#eee] transition-colors duration-300">
      
      {/* Image Section */}
      <div className="flex-1 lg:max-w-[50%] min-h-[30rem] flex justify-center items-center p-8 overflow-hidden bg-gray-200">
        {device === 'laptop' && (
          <LaptopFrame>
            <Image
              src={image}
              alt={`${title} screenshot`}
              className={deviceImageBaseClasses}
              width={800} // IMPORTANT: Use the ACTUAL width of your source image
              height={600} // IMPORTANT: Use the ACTUAL height of your source image
            />
          </LaptopFrame>
        )}
        {device === 'phone' && (
          <PhoneFrame>
            <Image
              src={image}
              alt={`${title} screenshot`}
              className={deviceImageBaseClasses}
              width={400} // IMPORTANT: Use the ACTUAL width of your source image
              height={800} // IMPORTANT: Use the ACTUAL height of your source image
            />
          </PhoneFrame>
        )}
      </div>

      {/* Details Section */}
      <div className="flex-1 p-5 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-[#333]">{title}</h2>
        <p className="my-4 text-[#555] leading-relaxed">{description}</p>
        
        <div className="my-2">
          <h4 className="text-center text-[#666] mb-2 font-semibold">Tech Stack:</h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="bg-[#ddd] rounded px-2.5 py-1.5 text-sm text-[#333] hover:bg-[#333] hover:text-white transition-colors duration-300 cursor-default">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex justify-center items-center gap-4">
          {links?.map((link) => (
            <a 
              key={link.label} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#444] text-white rounded-lg px-3 py-2 text-sm font-bold no-underline hover:bg-[#333] transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                {link.icon}
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;