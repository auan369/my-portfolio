// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '../data/portfolioData';

// The main props interface for our ProjectCard component
export interface ProjectCardProps extends PortfolioItem {}

// --- Device Frame Sub-components ---
// Encapsulating the frame logic into its own component makes the main component much cleaner.

const LaptopFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex justify-center items-center w-full max-w-[30rem] aspect-[16/10] p-[3%] border-[0.6rem] md:border-[1rem] border-black rounded-2xl bg-black shadow-2xl">
    {children}
    {/* The base of the laptop - Hidden on small mobile to prevent overflow, visible on tablet+ */}
    <div className="block absolute -bottom-[1.5rem] left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#222] rounded-b-lg" />
  </div>
);

const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex justify-center items-center w-[12rem] md:w-[15rem] aspect-[9/18] p-2 border-[0.6rem] md:border-[0.8rem] border-black rounded-[2rem] bg-black shadow-2xl">
    {/* The "notch" of the phone */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 md:w-12 h-1 md:h-1.5 bg-[#333] rounded-full z-10" />
    {children}
  </div>
);


// --- The Main ProjectCard Component ---

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  const { title, description, techStack, image, links, device } = project;
  const deviceImageBaseClasses = "w-full h-full object-cover rounded-md";

  return (
    <div className="flex flex-col lg:flex-row w-full my-8 bg-[#f9f9f9] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 min-h-[20rem] md:min-h-[30rem] flex justify-center items-center p-6 md:p-12 bg-gray-200">
        {device === 'laptop' && (
          <LaptopFrame>
            <Image
              src={image}
              alt={`${title} screenshot`}
              priority={project.id === 0}
              className={deviceImageBaseClasses}
              // width={800} // IMPORTANT: Use the ACTUAL width of your source image
              // height={600} // IMPORTANT: Use the ACTUAL height of your source image
            />
          </LaptopFrame>
        )}
        {device === 'phone' && (
          <PhoneFrame>
            <Image
              src={image}
              alt={`${title} screenshot`}
              className={deviceImageBaseClasses}
              // width={400} // IMPORTANT: Use the ACTUAL width of your source image
              // height={800} // IMPORTANT: Use the ACTUAL height of your source image
            />
          </PhoneFrame>
        )}
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{title}</h2>
        <p className="my-5 text-gray-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-[#888] text-xs uppercase tracking-widest mb-3 font-bold text-center lg:text-left">Tech Stack</h4>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex justify-center items-center gap-4">
          {links?.map((link) => {
            const isDisabled = !link.url || link.url === "" || link.url === "#";
            return isDisabled ? (
              /* Disabled Version */
              <div 
                key={link.label} 
                className="bg-[#333] text-white border border-[#333] rounded-lg px-3 py-2 text-sm font-bold flex items-center gap-2 cursor-not-allowed opacity-60"
                title="Private Project / NDA"
              >
                {link.icon}
                {link.label}
              </div>
            ) : (
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
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;