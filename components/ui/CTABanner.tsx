// components/ui/CTABanner.tsx
import React from 'react';
import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  heading = "Ready to work together?",
  subheading = "Let's discuss your project requirements.",
}) => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-semibold text-ink mb-2">{heading}</h3>
      <p className="text-muted mb-6">{subheading}</p>
      <Link
        href="/contact"
        className="inline-block bg-accent text-bg font-bold py-3 px-6 rounded hover:bg-accent-dim transition-colors duration-300"
      >
        [ Get in Touch ]
      </Link>
    </div>
  );
};

export default CTABanner;
