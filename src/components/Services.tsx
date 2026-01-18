import { Wrench, Shield, Thermometer, Settings, Search, AlertTriangle, Cog } from 'lucide-react';
import Image from 'next/image';

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
  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Some of Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for your home
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors duration-300 border border-slate-700">
                <div className="flex items-start gap-8">
                  {/* Image/Icon on the left */}
                  <div className="flex-shrink-0">
                    {service.customImage ? (
                      <Image 
                        src={service.customImage}
                        alt="Professional Plumber at Work"
                        width={120}
                        height={120}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg object-cover"
                      />
                    ) : (
                      <Icon className="w-24 h-24 lg:w-32 lg:h-32 text-blue-400" />
                    )}
                  </div>
                  
                  {/* Content on the right */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}