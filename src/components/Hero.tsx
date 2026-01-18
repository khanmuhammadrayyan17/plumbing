'use client';

import { Phone, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref: heroRef, isInView: heroInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/plumbing-professional-doing-his-job (1).jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-15 lg:py-18">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          heroInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          {/* Main Headline */}
          <h1 className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            heroInView 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            Honest Plumbing.
            <br />
            <span className="text-blue-400">Fair Pricing.</span>
            <br />
            Trusted Expertise.
          </h1>
          
          {/* Subheadline */}
          <p className={`text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            heroInView 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            Professional plumbing and backflow services delivered with transparency, 
            efficiency, and care—so you can feel confident inviting us into your home.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${
            heroInView 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105">
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Schedule a Service
            </button>
            
            <a 
              href="tel:+1-586-337-8877"
              className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Call Now
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}