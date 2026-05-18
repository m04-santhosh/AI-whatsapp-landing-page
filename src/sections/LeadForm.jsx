import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, CheckCircle2, Lock, Sparkles, Search, Download, Trash2, Database, ChevronDown, ChevronUp } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessSize: '1-10',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [leads, setLeads] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('whatsauto_leads') || '[]');
    } catch (e) {
      return [];
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp Phone Number is required';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      // Basic E.164 phone validation check
      newErrors.phone = 'Please enter a valid WhatsApp phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium backend submit delay and persist to local database
    setTimeout(() => {
      const newLead = {
        id: 'lead_' + Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessSize: formData.businessSize,
        timestamp: new Date().toLocaleString(),
      };

      const updatedLeads = [newLead, ...leads];
      localStorage.setItem('whatsauto_leads', JSON.stringify(updatedLeads));
      setLeads(updatedLeads);

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const deleteLead = (id) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    localStorage.setItem('whatsauto_leads', JSON.stringify(updatedLeads));
    setLeads(updatedLeads);
  };

  const clearAllLeads = () => {
    if (window.confirm("Are you sure you want to delete all captured leads from the local database?")) {
      localStorage.removeItem('whatsauto_leads');
      setLeads([]);
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Full Name', 'Email', 'WhatsApp Phone', 'Monthly Volume', 'Timestamp'];
    const csvRows = [
      headers.join(','),
      ...leads.map(lead => [
        lead.id,
        `"${lead.fullName.replace(/"/g, '""')}"`,
        `"${lead.email.replace(/"/g, '""')}"`,
        `"${lead.phone.replace(/"/g, '""')}"`,
        `"${lead.businessSize.replace(/"/g, '""')}"`,
        `"${lead.timestamp.replace(/"/g, '""')}"`
      ].join(','))
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `WhatsAuto_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(lead => 
    lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="lead-form" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full glow-spot opacity-35 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full glow-spot-brand opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="badge-premium mb-4">
              <Sparkles className="w-4 h-4 fill-brand-400/20" />
              Limited Slots: 14 Free Trials Left
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Start Automating Your <span className="text-gradient-emerald">WhatsApp Inbox Today</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Claim your 14-day free trial. Unlock full WhatsApp chatbot flows, live-agent templates, automated lead collection, and real-time CRM integrations. No credit card required. Setup takes only 10 minutes.
            </p>

            {/* Bullet Highlights */}
            <div className="mt-8 flex flex-col gap-4 text-left max-w-md mx-auto lg:mx-0">
              {[
                'Instant API Approval (Official Meta partner)',
                'Qualified lead syncs to Google Sheets & CRM',
                'No-code visual Drag-and-Drop flow builder',
                'End-to-End secure payment integrations',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Lead Form Card */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-[500px] glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400"></div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-extrabold text-slate-900">Create Your Free Account</h3>
                    <p className="text-slate-550 text-xs sm:text-sm font-medium mt-1">Get immediate setup instructions in under 60 seconds.</p>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                      
                      {/* Name Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-slate-700 text-xs sm:text-sm font-bold">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50/50 border text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all duration-300 ${
                              errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-slate-200 focus:border-brand-550'
                            }`}
                          />
                        </div>
                        {errors.fullName && <span className="text-red-500 text-xs font-semibold mt-1">{errors.fullName}</span>}
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-slate-700 text-xs sm:text-sm font-bold">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50/50 border text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all duration-300 ${
                              errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-200 focus:border-brand-550'
                            }`}
                          />
                        </div>
                        {errors.email && <span className="text-red-500 text-xs font-semibold mt-1">{errors.email}</span>}
                      </div>

                      {/* Phone Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-slate-700 text-xs sm:text-sm font-bold">
                          WhatsApp Phone Number (with Country Code)
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50/50 border text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all duration-300 ${
                              errors.phone ? 'border-red-500 focus:border-red-400' : 'border-slate-200 focus:border-brand-550'
                            }`}
                          />
                        </div>
                        {errors.phone && <span className="text-red-500 text-xs font-semibold mt-1">{errors.phone}</span>}
                      </div>

                      {/* Team Size Selection */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="businessSize" className="text-slate-700 text-xs sm:text-sm font-bold">
                          Business Monthly Chats Volume
                        </label>
                        <select
                          id="businessSize"
                          name="businessSize"
                          value={formData.businessSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-300"
                        >
                          <option value="1-10">Under 1,000 chats / month</option>
                          <option value="10-50">1,000 - 10,000 chats / month</option>
                          <option value="50-250">10,000 - 50,000 chats / month</option>
                          <option value="250+">Over 50,000 chats / month</option>
                        </select>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 mt-2 px-6 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/20 disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5.5 h-5.5 rounded-full border-3 border-t-transparent border-white animate-spin"></div>
                        ) : (
                          <>
                            Activate My Free Trial
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      {/* Security Footer */}
                      <div className="flex items-center justify-center gap-1.5 mt-2 text-slate-400 text-[11px] font-semibold">
                        <Lock className="w-4 h-4" />
                        <span>GDPR & CCPA Compliant. No Credit Card Required.</span>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mb-6 shadow-inner shadow-brand-500/5">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Your Trial is Active! 🎉</h3>
                    <p className="text-slate-650 text-sm leading-relaxed mt-4 max-w-sm">
                      We have sent setup instructions to <span className="text-slate-900 font-extrabold">{formData.email}</span> and a setup code on WhatsApp to <span className="text-slate-900 font-extrabold">{formData.phone}</span>.
                    </p>
                    <a
                      href="#demo"
                      className="mt-8 px-6 py-3.5 rounded-full text-sm font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:border-slate-300 hover:text-slate-800 hover:bg-slate-100/50 transition-all duration-300 cursor-pointer"
                    >
                      Explore Interactive Demo
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* CRM Leads Database Dashboard (Demo Mode) */}
        <div className="mt-16 border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-100/50">
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="w-full flex items-center justify-between px-6 py-5 bg-slate-50 border-b border-slate-200 text-left transition-colors duration-300 hover:bg-slate-100/50 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/25 flex items-center justify-center text-brand-600 shadow-sm">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">
                  Local Leads CRM Database
                </h3>
                <p className="text-slate-550 text-xs font-semibold">
                  Admin Demo Panel &bull; Real-time client-side sync ({leads.length} records)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline-block">
                Local Database Active
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm">
                {isAdminOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>
          </button>

          <AnimatePresence>
            {isAdminOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden bg-white"
              >
                <div className="p-6">
                  {/* Top Control Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="relative w-full sm:max-w-xs">
                      <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by name, email, phone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-550 transition-all duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={exportToCSV}
                        disabled={leads.length === 0}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 disabled:bg-slate-150 disabled:text-slate-400 disabled:cursor-not-allowed transition-all duration-300 shadow-md shadow-brand-600/10 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        Export CSV
                      </button>
                      <button
                        onClick={clearAllLeads}
                        disabled={leads.length === 0}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        Purge All
                      </button>
                    </div>
                  </div>

                  {/* CRM Table */}
                  {filteredLeads.length > 0 ? (
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                        <thead>
                          <tr className="border-b border-slate-100 text-slate-500 font-extrabold uppercase tracking-wider text-[10px]">
                            <th className="py-3.5 px-4">Customer Name</th>
                            <th className="py-3.5 px-4">Contact Info</th>
                            <th className="py-3.5 px-4">Monthly Chats</th>
                            <th className="py-3.5 px-4">Capture Time</th>
                            <th className="py-3.5 px-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {filteredLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors duration-200">
                              <td className="py-3.5 px-4 font-bold text-slate-900">
                                {lead.fullName}
                              </td>
                              <td className="py-3.5 px-4 font-semibold">
                                <div className="text-slate-800">{lead.email}</div>
                                <div className="text-slate-500 text-[11px] font-bold mt-0.5">{lead.phone}</div>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 border border-slate-200 text-slate-750">
                                  {lead.businessSize === '1-10' ? 'Under 1k/mo' : lead.businessSize === '10-50' ? '1k-10k/mo' : lead.businessSize === '50-250' ? '10k-50k/mo' : 'Over 50k/mo'}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-slate-500 font-medium">
                                {lead.timestamp}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button
                                  onClick={() => deleteLead(lead.id)}
                                  className="p-2 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-400 hover:text-red-650 transition-all duration-300 cursor-pointer"
                                  title="Delete Lead Record"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mx-auto mb-3 shadow-inner">
                        <Database className="w-5 h-5" />
                      </div>
                      <h4 className="font-extrabold text-slate-750 text-sm">
                        {leads.length === 0 ? 'No Captured Leads Yet' : 'No Matching Leads Found'}
                      </h4>
                      <p className="text-slate-500 text-xs mt-1 max-w-xs mx-auto font-medium">
                        {leads.length === 0 
                          ? 'Fill out the form above to activate a free trial and watch it record here in real-time!' 
                          : 'Try adjusting your search filter keywords to find the record.'}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
