// components/sections/about/TechSkills.tsx
import React from 'react';
import SkillPill from '../../ui/SkillPill';

// Define the shape of the 'technologies' data
interface Technologies {
  [category: string]: string[];
}

const TechSkills: React.FC<{ technologies: Technologies }> = ({ technologies }) => {
  return (
    <div className="w-full">
      <h4 className="text-2xl font-medium text-[#4b4b4b] border-b-2 border-gray-300 pb-2">Technologies</h4>
      {Object.entries(technologies).map(([category, skills]) => (
        <div key={category} className="my-5">
          <h5 className="w-full text-base font-bold text-[#222] mt-4 mb-3 capitalize">{category}</h5>
          <ul className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <SkillPill key={skill}>{skill}</SkillPill>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechSkills;