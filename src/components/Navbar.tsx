'use client';

import { Phone, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height (lg:h-20 = 80px)
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-0">
          {/* Company Name/Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Image 
                src="/Gemini_Generated_Image_y51o0cy51o0cy51o.png"
                alt="Lawrence Plumbing Logo"
                width={50}
                height={50}
                className="w-8 h-8 lg:w-13 lg:h-13"
              />
              Lawrence Plumbing, Inc.
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <a 
                href="tel:555-123-4567"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md font-medium transition-colors"
              >
                Contact
              </button>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <a 
                  href="tel:555-123-4567"
                  className="flex items-center justify-center gap-2 w-full px-3 py-2 text-blue-600 hover:text-blue-700 font-semibold border border-blue-600 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-semibold transition-colors">
                  <Calendar className="w-4 h-4" />
                  Schedule Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}