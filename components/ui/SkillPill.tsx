// components/ui/SkillPill.tsx
import React from 'react';

const SkillPill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li className="bg-[#e6e9ef] rounded-md py-1.5 px-3 text-sm text-[#333] shadow-md border border-gray-200 hover:bg-[#d1d7e0] transition-colors duration-300 cursor-default">
      {children}
    </li>
  );
};

export default SkillPill;