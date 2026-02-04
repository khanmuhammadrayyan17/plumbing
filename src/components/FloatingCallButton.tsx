'use client';

import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <a
        href="tel:+1-555-123-4567"
        className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Call PlumbingCompany"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:block font-semibold">Call Us</span>
      </a>
    </div>
  );
}