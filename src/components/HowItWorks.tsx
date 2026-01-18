import { Phone, Calendar, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Contact & Schedule",
    description: "Call or book online at a time that works for you."
  },
  {
    number: "2", 
    title: "Expert Assessment with Honest Pricing",
    description: "We diagnose the issue thoroughly and explain your options clearly—no pressure, no surprises."
  },
  {
    number: "3",
    title: "Professional Repair Done Right", 
    description: "Quality workmanship completed efficiently, safely, and to code."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Peace of Mind Section */}
        <div className="bg-white p-12 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Peace of Mind Comes Standard
          </h3>
          
          <div className="space-y-4 text-xl text-slate-600 mb-8">
            <p>No surprises. No pressure. Just honest plumbing from professionals who care about doing the job right.</p>
            <p>Trusted by homeowners who value integrity, transparency, and long-term reliability.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center gap-3 shadow-lg">
              <Calendar className="w-6 h-6" />
              Schedule Your Service
            </button>
            
            <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Call Lawrence Plumbing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}