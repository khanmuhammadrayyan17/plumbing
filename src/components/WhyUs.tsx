import { CheckCircle, Shield, Clock, Users, Award, Heart } from 'lucide-react';

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
  },
  {
    icon: Heart,
    title: "Integrity over profit",
    description: "Always doing what's right for you and your home"
  }
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Why Lawrence Plumbing and Backflow, Inc.
          </h2>
          
          <div className="text-xl text-slate-600 leading-relaxed space-y-6">
            <p>
              In an industry where homeowners often worry about hidden fees and unnecessary upsells, 
              Lawrence Plumbing and Backflow, Inc. takes a different approach.
            </p>
            
            <p>
              We believe trust is earned through transparency, skill, and respect for your home. 
              Our work is done to city specifications, priced fairly, and explained clearly—so you 
              always know what you're paying for and why.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
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