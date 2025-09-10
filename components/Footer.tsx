// Footer.tsx
import React from 'react';

interface FooterProps {
  ownerName: string;
}

const Footer: React.FC<FooterProps> = ({ ownerName }) => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    // All styles from `.footer` are now here
    <footer className="w-full bg-[#333] text-white text-center py-4">
        <p className="text-sm">
            Designed and Developed by {ownerName}. © {currentYear}
        </p>
    </footer>
  );
}

export default Footer;