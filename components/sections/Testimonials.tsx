// components/sections/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../data/portfolioData';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 px-5 bg-bg">
      <div className="text-center mb-10">
        <span className="text-xs text-accent">$ cat testimonials.log</span>
        <h2 className="text-2xl md:text-3xl font-bold text-ink mt-3">
          What clients say
        </h2>
      </div>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial) => (
          <motion.blockquote
            key={testimonial.id}
            variants={cardVariants}
            className="flex flex-col bg-surface rounded-lg p-6 border border-border hover:border-accent-dim transition-colors duration-300"
          >
            <p className="text-muted leading-relaxed text-sm md:text-base flex-grow">
              <span className="text-accent">&gt;</span> {testimonial.quote}
            </p>
            <footer className="mt-5 pt-4 border-t border-border">
              <p className="font-bold text-ink text-sm">{testimonial.name}</p>
              <p className="text-xs text-muted">{testimonial.attribution}</p>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
