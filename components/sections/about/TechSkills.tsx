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
      <h4 className="text-xs uppercase tracking-widest text-accent border-b border-border pb-2">{'// technologies'}</h4>
      {Object.entries(technologies).map(([category, skills]) => (
        <div key={category} className="my-5">
          <h5 className="w-full text-sm font-bold text-ink mt-4 mb-3">{category}</h5>
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