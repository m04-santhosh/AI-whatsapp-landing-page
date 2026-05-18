import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do I need a separate phone number for WhatsApp automation?',
      answer: 'Yes, we recommend using a clean phone number that does not have an active personal WhatsApp account. You can quickly deregister an existing account or register a new virtual number. This number connects directly to the official Meta Cloud API.',
    },
    {
      question: 'Is this officially approved by WhatsApp and Meta?',
      answer: 'Yes, absolutely! Unlike risky web-scraping chrome extensions that violate Meta terms of service, WhatsAuto uses the official Meta WhatsApp Business Cloud API. Your account is 100% compliant with zero risk of phone number bans.',
    },
    {
      question: 'Can my automated conversations hand over to a human agent?',
      answer: 'Yes, seamlessly. We provide an integrated multi-agent live chat inbox. If the AI detects a complex inquiry or a customer explicitly requests a human, it automatically halts the chatbot, tags the thread, and alerts your team.',
    },
    {
      question: 'Does my business require Meta verification to get started?',
      answer: 'No, you do not need an approved business profile to start! You can immediately launch in developer-sandbox mode. To lift the baseline cap of 250 daily outbound chats, verifying your business takes only a few business days.',
    },
    {
      question: 'What is the setup process and do I need a programmer?',
      answer: 'Our builder is 100% no-code. We provide pre-built, conversion-optimized templates for E-commerce, SaaS, Real Estate, and retail stores. Setting up your API credentials and deploying your first chat flow takes less than 10 minutes.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden border-t border-b border-slate-200/80">
      <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full glow-spot-brand opacity-15 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="badge-premium mb-4">Common Enquiries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about the official API, compliance, or human-agent routing? We have compiled everything you need to know.
          </p>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <FAQAccordion
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
