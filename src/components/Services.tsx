'use client';

import { Wrench, Shield, Thermometer, Settings, Search, AlertTriangle, Cog } from 'lucide-react';
import Image from 'next/image';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Wrench,
    title: "Residential Plumbing",
    description: "Reliable solutions for your home's plumbing needs, handled with care and professionalism.",
    customImage: "/plumbing-professional-doing-his-job.jpg"
  },
  {
    icon: Shield,
    title: "Backflow Services",
    description: "Certified backflow testing, repair, and installation to protect your water supply and meet city requirements.",
    customImage: '/backflow-service-cropped.png'
  },
  {
    icon: Thermometer,
    title: "Water Heater Repair & Replacement",
    description: "Efficient, dependable service to keep hot water flowing when you need it most.",
    customImage: '/worker-repairing-water-heater.jpg'
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Quickly identifying and resolving leaks before they cause costly damage.",
    customImage: '/Gemini_Generated_Image_ln4378ln4378ln43.png'
  }
];

export default function Services() {
  const { ref: servicesRef, isInView: servicesInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <section 
      id="services" 
      ref={servicesRef}
      className="py-20 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          servicesInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Expert Services
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional plumbing solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl hover:from-slate-700/60 hover:to-slate-800/90 transition-all duration-700 border border-slate-700/30 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 overflow-hidden ${
                  servicesInView 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms` 
                }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  {/* Service Image/Icon */}
                  <div className="mb-6 flex justify-center">
                    {service.customImage ? (
                      <div className="relative">
                        <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                          <Image 
                            src={service.customImage}
                            alt="Professional Plumber at Work"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                          <Icon className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-blue-400/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}