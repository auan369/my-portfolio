// IndivProject.js
import React from 'react';

const IndivProject = ({ title, description, techStack, image, links, device }) => {

    // Define the base and device-specific classes in variables for cleanliness
    const deviceWrapperBaseClasses = "relative flex justify-center items-center";
    const deviceImageBaseClasses = "w-full h-full object-cover [image-rendering:pixelated]";

    const deviceStyles = {
        laptop: {
            wrapper: "w-[30rem] h-[20rem] p-4 border-[1rem] border-black rounded-2xl bg-black",
            // This ::after pseudo-element is tricky in Tailwind. A real div is better for this.
            // We'll add it directly in the JSX.
        },
        phone: {
            wrapper: "w-[15rem] h-[25rem] p-2 border-[1rem] border-black rounded-2xl bg-black relative before:content-[''] before:block before:w-12 before:h-1.5 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-[#333] before:rounded-full",
        }
    };

    return (
        // Main project container. Mobile-first (flex-col), then flex-row on large screens.
        <div className="flex flex-col lg:flex-row w-full my-5 bg-[#f9f9f9] rounded-lg overflow-hidden shadow-lg hover:bg-[#eee] transition-colors duration-300">
            
            {/* Image Section */}
            <div className="flex-1 lg:max-w-[50%] min-h-[30rem] flex justify-center items-center p-8 overflow-hidden">
                {/* Apply device-specific wrapper styles */}
                <div className={`${deviceWrapperBaseClasses} ${deviceStyles[device]?.wrapper || ''}`}>
                    <img loading="lazy" src={image} alt={`${title} screenshot`} className={deviceImageBaseClasses} />
                    {/* Recreating the laptop base with a real div for better compatibility */}
                    {device === 'laptop' && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[22rem] h-8 bg-black rounded-md" />
                    )}
                </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 p-5 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#333]">{title}</h2>
                <p className="my-4 text-[#555] leading-relaxed">{description}</p>
                
                {/* Tech Stack Section */}
                <div className="my-2">
                    <h4 className="text-center text-[#666] mb-2">Tech Stack:</h4>
                    <ul className="flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, index) => (
                            <li key={index} className="bg-[#ddd] rounded px-2.5 py-1.5 text-sm text-[#333] hover:bg-[#333] hover:text-white transition-colors duration-300 cursor-default">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links Section */}
                <div className="mt-4 flex justify-center items-center gap-4">
                    {links?.map((link, index) => (
                        <a 
                            key={index} 
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

export default IndivProject;