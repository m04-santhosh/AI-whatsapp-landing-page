import React from 'react';
import { MessageSquare, Twitter, Linkedin, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Flow Builder', href: '#features' },
      { name: 'Niche Demos', href: '#demo' },
      { name: 'Lead Form', href: '#lead-form' },
      { name: 'Compliance Guide', href: '#faq' },
    ],
    company: [
      { name: 'About Us', href: '#features' },
      { name: 'Meta Partnership', href: '#features' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Contact Sales', href: '#lead-form' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Meta Developer Guidelines', href: '#' },
      { name: 'DPA Addendum', href: '#' },
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-200/80 pt-16 pb-12 overflow-hidden relative">
      {/* Subtle green ambient light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-600/5 filter blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#features" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 text-white shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                WhatsAuto<span className="text-brand-400">.ai</span>
              </span>
            </a>
            <p className="mt-4 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              We empower D2C brands, real estate brokers, educators, and service providers to automate lead qualification and customer support on the official Meta WhatsApp Cloud API.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-6">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
                { icon: <Youtube className="w-4 h-4" />, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-500/20 hover:bg-brand-500/5 flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            
            {/* Product Column */}
            <div>
              <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-widest">Platform</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-brand-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-widest">Resources</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-brand-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-extrabold text-sm text-slate-100 uppercase tracking-widest">Compliance</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1">
                      {link.name}
                      {link.href === '#' ? null : <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Separator line */}
        <div className="h-px bg-slate-900 w-full mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-semibold">
          <p>© {new Date().getFullYear()} WhatsAuto.ai. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Official Developer Integration Partner on Meta Portal.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
