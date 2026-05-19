import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, ShieldAlert, Award, ChevronRight } from 'lucide-react';
import CheckoutButton from '../components/CheckoutButton';
import RazorpayPaymentButton from '../components/RazorpayPaymentButton';

export default function DemoCTA() {
  const [timeLeft, setTimeLeft] = useState(899); // 14 mins 59 secs in seconds
  const [selectedNiche, setSelectedNiche] = useState('ecommerce');

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const niches = [
    { id: 'ecommerce', name: 'E-commerce', hook: 'Auto-recover 45% of abandoned carts instantly, answer size/color questions, and dispatch tracking details.' },
    { id: 'realestate', name: 'Real Estate', hook: 'Qualify home buyers 24/7, capture budget, schedule site visits, and share brochure PDFs automatically.' },
    { id: 'retail', name: 'Retail Shops', hook: 'Broadcast local offers, book appointment slots, verify store hours, and take orders via automatic chat logs.' },
    { id: 'saas', name: 'SaaS / tech', hook: 'Instant product support, qualify high-intent demo requests, capture booking calendar times, and route key accounts.' },
    { id: 'edtech', name: 'Coaching / Ed-tech', hook: 'Qualify lead course intents, capture registration details, distribute course syllabus PDFs, and register bookings.' },
  ];

  return (
    <section id="demo" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden border-t border-slate-200/80">
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full glow-spot-brand opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] rounded-full glow-spot opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 relative overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-slate-100">
          
          {/* Neon side borders */}
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-brand-500 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-t from-emerald-500 to-transparent"></div>

          {/* Form and Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="badge-premium mb-4 text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                <Flame className="w-4 h-4 fill-emerald-400/20 animate-pulse" />
                <span>₹9 VIP Niche Demo Offer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Unlock Your Custom Niche Demo <span className="text-gradient-emerald">For Just ₹9</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
                Don't guess how WhatsApp automation works for your brand. Get a fully interactive, custom prototype tailored specifically for your target business market.
              </p>

              {/* Niche Selector tab row */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {niches.map((niche) => (
                  <button
                    key={niche.id}
                    onClick={() => setSelectedNiche(niche.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                      selectedNiche === niche.id
                        ? 'bg-brand-500/10 border-brand-500/30 text-brand-700'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-355'
                    }`}
                  >
                    {niche.name}
                  </button>
                ))}
              </div>

              {/* Hook text Box */}
              <div className="mt-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 min-h-[100px] flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest text-brand-600">WHAT YOU WILL TEST-DRIVE:</p>
                <p className="text-slate-750 text-sm sm:text-base leading-relaxed mt-2 font-semibold">
                  {niches.find(n => n.id === selectedNiche).hook}
                </p>
              </div>

              {/* Guarantees */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span className="text-slate-650 text-xs sm:text-sm font-semibold">7-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span className="text-slate-650 text-xs sm:text-sm font-semibold">100% Secure Checkout SSL</span>
                </div>
              </div>
            </div>

            {/* Right Urgency Counter Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-brand-500/5 filter blur-xl"></div>
              
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-extrabold">Flash Sale Expires In</p>
              
              {/* Live Timer */}
              <div className="mt-3 text-4xl sm:text-5xl font-mono font-extrabold tracking-widest text-slate-900 flex items-center gap-1.5">
                {formatTime(timeLeft)}
              </div>

              <div className="w-full h-px bg-slate-200 my-5"></div>

              {/* Price Details */}
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 line-through text-lg font-bold">₹999</span>
                <span className="text-slate-900 text-5xl font-extrabold tracking-tight">₹9</span>
                <span className="text-brand-700 text-xs font-extrabold bg-brand-500/10 px-2 py-0.5 rounded-full border border-brand-500/25">SAVE 99%</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wide">ONE-TIME CHARGE. NO CONTINUING FEES.</p>

              <RazorpayPaymentButton paymentButtonId="pl_Sr3nJvQ1zoXo3t" />

              {/* Left count indicator */}
              <p className="text-[11px] text-brand-700 mt-3 font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                Only 4 Demo Customizations Left Today!
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
