// components/sections/about/BackgroundInfo.tsx
import React from 'react';

// Define the shape of the 'about' data we expect
interface AboutInfo {
  background: string;
  skills: string;
  openToWork: string;
}

const BackgroundInfo: React.FC<{ about: AboutInfo }> = ({ about }) => {
  return (
    <div className="w-full space-y-4">
      <h4 className="text-xs uppercase tracking-widest text-accent border-b border-border pb-2">{'// background'}</h4>
      <p className="text-base leading-relaxed text-muted">{about.background}</p>
      <p className="text-base leading-relaxed text-muted">{about.skills}</p>
      <p className="text-base leading-relaxed text-muted">{about.openToWork}</p>
    </div>
  );
};

export default BackgroundInfo;