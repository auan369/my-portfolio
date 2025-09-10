// components/ui/Socials.tsx
import React from 'react';

// Define the shape of a single social link
interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Define the props for the Socials component
interface SocialsProps {
  links: SocialLink[];
}

const Socials: React.FC<SocialsProps> = ({ links }) => {
  return (
    <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label} // Important for accessibility
          className="text-4xl sm:text-5xl text-[#333] p-4 rounded-full hover:bg-[#333] hover:text-white hover:scale-110 transform transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;