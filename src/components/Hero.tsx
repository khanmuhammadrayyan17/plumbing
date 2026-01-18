import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-15 lg:py-18">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Honest Plumbing.
            <br />
            <span className="text-blue-400">Fair Pricing.</span>
            <br />
            Trusted Expertise.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Professional plumbing and backflow services delivered with transparency, 
            efficiency, and care—so you can feel confident inviting us into your home.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center gap-3 shadow-2xl">
              <Calendar className="w-6 h-6" />
              Schedule a Service
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Call Now
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}