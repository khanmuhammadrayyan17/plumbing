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
      // Responsive navbar height: 64px on mobile, 80px on desktop (lg+)
      const isMobile = window.innerWidth < 1024; // lg breakpoint is 1024px
      const navbarHeight = isMobile ? 64 : 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-0">
          {/* Company Logo/Name */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-3 text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/logo.png"
                  alt="PlumbingCompany Logo"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                PlumbingCompany
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
            >
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <a 
                href="tel:+1-555-123-4567"
                className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Schedule
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="group p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" /> : 
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              }
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
                  href="tel:+1-555-123-4567"
                  className="flex items-center justify-center gap-2 w-full px-3 py-2 text-blue-600 hover:text-blue-700 font-semibold border border-blue-600 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-semibold transition-colors"
                >
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