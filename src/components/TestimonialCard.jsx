import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function TestimonialCard({ name, role, company, review, avatarUrl, rating = 5 }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between h-full group hover:shadow-emerald-950/10 hover:-translate-y-1">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/0 via-brand-500/0 to-brand-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
          ))}
        </div>
        
        {/* Review Text */}
        <p className="text-slate-650 italic text-sm sm:text-base leading-relaxed mb-6">
          "{review}"
        </p>
      </div>
      
      {/* Profile Details */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-extrabold text-brand-600 text-sm overflow-hidden shadow-inner">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span>{name.charAt(0)}</span>
            )}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
              {name}
              <CheckCircle className="w-4 h-4 text-brand-400 fill-brand-400/10" title="Verified Customer" />
            </div>
            <div className="text-slate-500 text-xs sm:text-sm font-semibold">
              {role} at <span className="text-slate-700 font-bold">{company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
