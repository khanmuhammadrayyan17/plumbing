import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Lawrence Plumbing and Backflow, Inc.</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Honest plumbing, fair pricing, and trusted expertise. 
              Professional services delivered with transparency and care.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">info@lawrenceplumbing.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Serving Your Local Area</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>Residential Plumbing</li>
              <li>Backflow Testing & Repair</li>
              <li>Water Heater Services</li>
              <li>Leak Detection</li>
              <li>Emergency Plumbing</li>
              <li>Plumbing Maintenance</li>
            </ul>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get Started</h4>
            <div className="space-y-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full">
                Schedule Service
              </button>
              <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full">
                Emergency Call
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Lawrence Plumbing and Backflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}