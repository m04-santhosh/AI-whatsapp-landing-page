import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Simulate a live WhatsApp chat conversation history
  const chatMessages = [
    { sender: 'user', text: "Hi, I'm looking for a premium WhatsApp chatbot for my retail shop. Can it answer customer questions instantly?", time: '10:00 AM' },
    { sender: 'ai', text: "Hello! 👋 Yes, absolutely! Our AI WhatsApp agent checks your inventory and replies in under 2.4 seconds—with human-like conversational intelligence.", time: '10:00 AM' },
    { sender: 'user', text: "Wow, that's incredibly fast! Can it also capture leads and accept orders?", time: '10:01 AM' },
    { sender: 'ai', text: "Yes! 🚀 It qualifies leads, collects emails, and sends secure payment links. In fact, businesses using us report a 10x lift in lead conversions!", time: '10:01 AM' },
  ];

  return (
    <section id="features" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background Radial Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-spot opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full glow-spot-brand opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Premium Badge */}
            <motion.div variants={itemVariants} className="badge-premium mb-6">
              <Zap className="w-4 h-4 fill-brand-400/20" />
              <span>Next-Gen WhatsApp Business AI Automation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Turn WhatsApp Into Your <br />
              <span className="text-gradient-emerald">Most Powerful Sales Agent</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Instantly engage, qualify, and convert leads 24/7 with human-like AI auto-replies. Run automated broadcast marketing, handle support, and supercharge sales—zero developer skills needed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#lead-form"
                className="w-full sm:w-auto text-center group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 transition-all duration-300 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Claim Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-600 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 transition-all duration-300 shadow-md shadow-slate-100/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Watch ₹1 Demo
              </a>
            </motion.div>

            {/* Trust Badging */}
            <motion.div 
              variants={itemVariants} 
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-500 text-xs sm:text-sm font-semibold"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
                <span>Official Meta Cloud API</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-250 hidden sm:block"></div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
                <span className="ml-1 text-slate-700">4.9/5 Star Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Graphic - Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative w-full"
          >
            {/* Phone Shadow / Glow */}
            <div className="absolute inset-0 bg-brand-500/10 rounded-[40px] filter blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

            {/* Smartphone Mockup */}
            <div className="relative w-full max-w-[340px] aspect-[9/18.5] rounded-[44px] border-4 border-slate-300 bg-slate-900 shadow-2xl p-2.5 flex flex-col overflow-hidden">
              {/* Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5.5 rounded-full bg-slate-900 z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-850 border border-slate-800"></div>
              </div>

              {/* Chat Header */}
              <div className="bg-brand-600/95 backdrop-blur-md text-white pt-6 pb-3 px-4 rounded-t-[32px] flex items-center justify-between shadow-md z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-500 border border-brand-400/20 flex items-center justify-center font-extrabold text-white text-xs">
                    WA
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[13px] leading-tight flex items-center gap-1">
                      WhatsAuto Agent
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                    </h4>
                    <p className="text-[10px] text-brand-100 font-semibold">Online & Automated</p>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-[#efeae2] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[size:180px] p-3 overflow-y-auto flex flex-col gap-3.5 pt-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, x: msg.sender === 'user' ? 30 : -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.5 }}
                    className={`max-w-[85%] p-3 rounded-2xl text-[11px] sm:text-xs leading-relaxed shadow-sm relative ${
                      msg.sender === 'user'
                        ? 'bg-[#d9fdd3] text-slate-800 rounded-tr-none self-end'
                        : 'bg-white text-slate-800 rounded-tl-none self-start'
                    }`}
                  >
                    <p className="font-semibold">{msg.text}</p>
                    <span className="block text-[8px] text-right mt-1.5 text-slate-400 font-semibold">{msg.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
