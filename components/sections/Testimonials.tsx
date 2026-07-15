// components/sections/Testimonials.tsx
import React from 'react';
import { Testimonial } from '../../data/portfolioData';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 px-5 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-10">
        What clients say
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="flex flex-col bg-[#f9f9f9] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-5">
              <p className="font-bold text-[#1a1a1a] text-sm">{testimonial.name}</p>
              <p className="text-xs text-[#888]">{testimonial.attribution}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
