import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Hourglass, TrendingUp, Cpu } from 'lucide-react';

export default function Stats() {
  const statItems = [
    {
      metric: '98%',
      label: 'Average Open Rate',
      desc: 'Compared to a mere 15-20% on traditional email marketing. WhatsApp guarantees your business messages get read.',
      icon: <MessageSquare className="w-6 h-6 text-brand-400" />,
    },
    {
      metric: '2.4s',
      label: 'Instant AI Response',
      desc: 'Lightning-fast automated query resolution that keeps warm leads fully engaged, boosting sales retention.',
      icon: <Hourglass className="w-6 h-6 text-brand-400" />,
    },
    {
      metric: '10x',
      label: 'Lead Capture Lift',
      desc: 'Interactive chat qualifications capture and sync phone numbers, emails, and buyer preferences seamlessly.',
      icon: <TrendingUp className="w-6 h-6 text-brand-400" />,
    },
    {
      metric: '₹0',
      label: 'Developer Cost',
      desc: 'Drag, drop, and launch in 10 minutes. A zero-code builder designed for sales, growth, and marketing teams.',
      icon: <Cpu className="w-6 h-6 text-brand-400" />,
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
    <section id="impact" className="relative py-20 md:py-28 bg-slate-100/50 overflow-hidden border-t border-b border-slate-200/80">
      {/* Background Radial Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full glow-spot opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="badge-premium mb-4">Powerful Growth Metrics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed for Instant Conversion & <span className="text-gradient-emerald">Maximum Growth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-650">
            Why are modern businesses abandoning emails and landing page forms? The math is simple: WhatsApp is where your customers live.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-6 sm:p-8 rounded-3xl relative flex flex-col items-start hover:-translate-y-1 group"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-brand-600/0 via-brand-500/0 to-brand-400/0 group-hover:from-brand-600 group-hover:via-brand-500 group-hover:to-brand-400 transition-all duration-500"></div>

              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 mb-6 group-hover:border-brand-500/30 group-hover:bg-brand-500/10 transition-all duration-300">
                {item.icon}
              </div>

              {/* Metric and Label */}
              <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">
                {item.metric}
              </h3>
              <h4 className="font-extrabold text-base sm:text-lg text-slate-800 mt-2">
                {item.label}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
