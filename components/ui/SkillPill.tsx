// components/ui/SkillPill.tsx
import React from 'react';

const SkillPill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li className="bg-surface rounded py-1.5 px-3 text-sm text-ink border border-border hover:border-accent-dim hover:text-accent transition-colors duration-300 cursor-default">
      {children}
    </li>
  );
};

export default SkillPill;