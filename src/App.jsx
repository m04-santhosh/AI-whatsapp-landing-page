import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import LeadForm from './sections/LeadForm';
import DemoCTA from './sections/DemoCTA';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-brand-500 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Achievement/Stats Section */}
        <Stats />

        {/* 3. Lead Form Section */}
        <LeadForm />

        {/* 4. ₹1 Demo CTA Section */}
        <DemoCTA />

        {/* 5. Testimonials / Reviews */}
        <Testimonials />

        {/* 6. FAQ Section */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
