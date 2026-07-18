// Footer.tsx
import React from 'react';

interface FooterProps {
  ownerName: string;
}

const Footer: React.FC<FooterProps> = ({ ownerName }) => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg text-muted text-center py-6 border-t border-border">
        <p className="text-xs">
            <span className="text-accent">$</span> echo &quot;Designed and Developed by {ownerName}. © {currentYear}&quot;
        </p>
    </footer>
  );
}

export default Footer;