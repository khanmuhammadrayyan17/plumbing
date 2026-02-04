'use client';

import { CheckCircle, Shield, Clock, Users, Award, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Shield,
    title: "No price gouging—ever",
    description: "Honest, upfront pricing without hidden fees or surprise charges"
  },
  {
    icon: CheckCircle,
    title: "Fair, transparent pricing",
    description: "You'll always know what you're paying for and why"
  },
  {
    icon: Clock,
    title: "Fast, reliable response times",
    description: "Quick service when you need it most"
  },
  {
    icon: Award,
    title: "Strong troubleshooting expertise",
    description: "Deep technical knowledge to solve complex problems"
  },
  {
    icon: CheckCircle,
    title: "Work completed to code",
    description: "All backflow and plumbing work meets city specifications"
  },
  {
    icon: Users,
    title: "Locally trusted",
    description: "Community-recommended by satisfied neighbors"
  }
];

export default function WhyUs() {
  const { ref: whyUsRef, isInView: whyUsInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <section 
      id="about" 
      ref={whyUsRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
          whyUsInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Why PlumbingCompany
          </h2>
          
          <div className="text-xl text-slate-600 leading-relaxed space-y-6">
            <p>
              In an industry where homeowners often worry about hidden fees and unnecessary upsells, 
              PlumbingCompany takes a different approach.
            </p>
            
            <p>
              We believe trust is earned through transparency, skill, and respect for your home. 
              Our work is done to city specifications, priced fairly, and explained clearly—so you 
              always know what you're paying for and why.
            </p>
          </div>
        </div>
        
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          whyUsInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`group flex items-start space-x-5 p-6 rounded-xl hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50/30 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-blue-100/50 ${
                    whyUsInView 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${500 + index * 150}ms` 
                  }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}