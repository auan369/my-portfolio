// Footer.js
import React from 'react';
// We no longer need to import the CSS file
// import './Footer.css';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    // All styles from `.footer` are now here
    <footer className="w-full bg-[#333] text-white text-center py-4">
        <p className="text-sm">
            Designed and Developed by Kum Yew Loke. © {currentYear}
        </p>
    </footer>
  );
}

export default Footer;