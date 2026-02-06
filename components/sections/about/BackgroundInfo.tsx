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
      <h4 className="text-2xl font-medium text-[#4b4b4b] border-b-2 border-gray-300 pb-2">Background</h4>
      <p className="text-lg text-justify text-[#555]">{about.background}</p>
      <p className="text-lg text-justify text-[#555]">{about.skills}</p>
      <p className="text-lg text-justify text-[#555]">{about.openToWork}</p>
    </div>
  );
};

export default BackgroundInfo;