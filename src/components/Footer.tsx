'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Footer() {
  const { ref: footerRef, isInView: footerInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="bg-slate-900 text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          {/* Company Info */}
          <div className={`text-center transition-all duration-1000 ${
            footerInView 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Tony's Quality Plumbing LLC</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Honest plumbing, fair pricing, and trusted expertise. 
              Professional services delivered with transparency and care.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">+1 586-337-8877</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">info@tonysqualityplumbing.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Serving Your Local Area</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Tony's Quality Plumbing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}