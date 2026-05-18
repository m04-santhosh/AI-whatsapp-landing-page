import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aditya Sharma',
      role: 'Founder',
      company: 'VedicWear D2C',
      review: "We replaced our email recovery sequence with WhatsAuto's WhatsApp abandoned cart flows. Within 30 days, our abandoned checkout recoveries grew by 42%, and customer acquisition costs dropped by half. Absolutely revolutionary!",
      rating: 5,
    },
    {
      name: 'Priyanka Sen',
      role: 'Marketing Director',
      company: 'PropHeights Realty',
      review: "Our sales agents used to waste hours manually calling cold home inquiry leads. Now, the AI agent qualifies leads 24/7 on WhatsApp, shares site maps, and books visits automatically. It feels completely magic.",
      rating: 5,
    },
    {
      name: 'Rohan Mehra',
      role: 'Operations Lead',
      company: 'LearnExcel EdTech',
      review: "Students drop inquiries late at night, and timing is critical. Implementing this chatbot solved late-night dropoffs instantly. Inbound course sign-ups increased by 54% in the very first month of setup.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200">
      <div className="absolute top-[50%] right-[10%] w-[40%] h-[40%] rounded-full glow-spot opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="badge-premium mb-4">Customer Success Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved by Founders, Marketers, & <span className="text-gradient-emerald">Sales Directors</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how scaling companies are utilizing official WhatsApp AI to streamline interactions, decrease response times, and boost ROI.
          </p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <TestimonialCard
                name={rev.name}
                role={rev.role}
                company={rev.company}
                review={rev.review}
                rating={rev.rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
