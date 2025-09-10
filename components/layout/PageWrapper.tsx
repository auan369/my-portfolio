// components/layout/PageWrapper.tsx
import React from 'react';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // This div adds the padding for the navbar and horizontal space.
    // You can also add max-width and centering for your content here.
    <div className="pt-8 px-4 sm:px-8 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default PageWrapper;