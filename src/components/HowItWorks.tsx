'use client';

import { Phone, Calendar, Upload, User, Home, Mail, Clock, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import Image from 'next/image';

export default function ScheduleService() {
  const { ref: scheduleRef, isInView: scheduleInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const [formData, setFormData] = useState({
    serviceFor: 'Property Owner',
    preferredDate: '',
    preferredTime: '',
    firstName: '',
    lastName: '',
    businessName: '',
    address: '',
    contactNumber: '',
    email: '',
    serviceTypes: [] as string[],
    otherService: '',
    description: '',
    images: null as File[] | null
  });

  const serviceTypes = [
    'Repair or replace water heaters',
    'Replace Kitchen Faucet', 
    'Replace Garbage Disposal',
    'Replace Lavy/Bathroom Faucet',
    'Replace Toilet',
    'Leak Repair',
    'Sewer Repair', 
    'Shower Repair',
    'Unclog shower drains',
    'Other'
  ];

  const handleServiceTypeChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(service)
        ? prev.serviceTypes.filter(s => s !== service)
        : [...prev.serviceTypes, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="schedule"
      ref={scheduleRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"
    >
      {/* Plumbing-Themed Background Pattern */}
<div className="absolute inset-0">
        {/* Plumbing Pattern Overlay */}
        <div className="absolute inset-0 opacity-12">
          {/* Plumbing SVG Patterns */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Pipe Network Pattern */}
              <pattern id="pipePattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Horizontal Pipes */}
                <rect x="20" y="40" width="80" height="8" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" rx="4"/>
                <rect x="20" y="72" width="80" height="8" fill="none" stroke="rgba(96, 165, 250, 0.25)" strokeWidth="2" rx="4"/>
                
                {/* Vertical Pipes */}
                <rect x="40" y="20" width="8" height="80" fill="none" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="2" rx="4"/>
                <rect x="72" y="20" width="8" height="80" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2" rx="4"/>
                
                {/* Pipe Joints */}
                <circle cx="44" cy="44" r="6" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="2"/>
                <circle cx="76" cy="76" r="6" fill="none" stroke="rgba(147, 197, 253, 0.35)" strokeWidth="2"/>
                
                {/* Pipe Elbows */}
                <path d="M 20 44 L 40 44 Q 44 44 44 40 L 44 20" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
                <path d="M 76 100 L 76 80 Q 76 76 80 76 L 100 76" fill="none" stroke="rgba(96, 165, 250, 0.25)" strokeWidth="2"/>
              </pattern>
              
              {/* Water Drops Pattern */}
              <pattern id="dropPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 40 15 Q 35 25 40 35 Q 45 25 40 15 Z" fill="rgba(147, 197, 253, 0.4)"/>
                <path d="M 20 50 Q 17 56 20 62 Q 23 56 20 50 Z" fill="rgba(96, 165, 250, 0.3)"/>
                <path d="M 60 65 Q 57 71 60 77 Q 63 71 60 65 Z" fill="rgba(59, 130, 246, 0.35)"/>
              </pattern>
              
              {/* Wrench Pattern */}
              <pattern id="wrenchPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Wrench outline */}
                <g transform="translate(50,50) rotate(45)">
                  <rect x="-15" y="-3" width="30" height="6" fill="none" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1.5" rx="3"/>
                  <rect x="12" y="-8" width="8" height="16" fill="none" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1.5" rx="2"/>
                  <rect x="-20" y="-8" width="8" height="16" fill="none" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1.5" rx="2"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pipePattern)"/>
            <rect width="100%" height="100%" fill="url(#dropPattern)"/>
            <rect width="100%" height="100%" fill="url(#wrenchPattern)"/>
          </svg>
          
          {/* Floating Plumbing Elements */}
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M 8 16 L 24 16 M 16 8 L 16 24" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="4" fill="none" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="absolute top-40 right-32 transform rotate-45 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="10" width="20" height="4" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" rx="2"/>
              <rect x="18" y="6" width="4" height="12" fill="none" stroke="rgba(96, 165, 250, 0.35)" strokeWidth="2" rx="2"/>
            </svg>
          </div>
          
          <div className="absolute bottom-32 left-40 transform rotate-(-15) animate-bounce" style={{ animationDuration: '4s' }}>
            <svg width="28" height="28" viewBox="0 0 28 28">
              <path d="M 14 5 Q 10 10 14 18 Q 18 10 14 5 Z" fill="rgba(147, 197, 253, 0.4)"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 right-20 transform rotate-30">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <rect x="8" y="16" width="20" height="4" fill="none" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="2" rx="2"/>
              <rect x="24" y="10" width="6" height="16" fill="none" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="2" rx="3"/>
              <rect x="6" y="10" width="6" height="16" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2" rx="3"/>
            </svg>
          </div>
          
          <div className="absolute top-1/2 left-12 animate-pulse" style={{ animationDuration: '3s' }}>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="6" r="2" fill="rgba(96, 165, 250, 0.4)"/>
              <path d="M 10 8 Q 8 12 10 16 Q 12 12 10 8 Z" fill="rgba(147, 197, 253, 0.3)"/>
            </svg>
          </div>
          
          <div className="absolute top-1/3 right-16 transform rotate-60">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path d="M 6 16 L 18 16 Q 22 16 22 12 L 22 6" fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="22" cy="6" r="3" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/40 to-blue-800/50"></div>
        
        {/* Subtle accent shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          scheduleInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Book Your Service
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-4">
            Schedule your plumbing service online - we'll call to confirm your appointment
          </p>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            <span className="font-semibold">Hablamos español</span> • Call{' '}
            <a href="tel:+1-555-123-4567" className="text-blue-300 hover:text-blue-200 font-semibold">
              +1 (555) 123-4567
            </a>{' '}
            or email{' '}
            <a href="mailto:info@plumbingcompany.com" className="text-blue-300 hover:text-blue-200 font-semibold">
              info@plumbingcompany.com
            </a>{' '}
            to schedule a weekend appointment.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          scheduleInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Service For */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <User className="w-4 h-4 inline mr-2" />
                    Is this service for:
                  </label>
                  <div className="space-y-3">
                    {['Property Owner', 'Contractor'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="serviceFor"
                          value={option}
                          checked={formData.serviceFor === option}
                          onChange={(e) => setFormData(prev => ({ ...prev, serviceFor: e.target.value }))}
                          className="mr-3 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-slate-700 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Date & Time
                  </label>
                  <div className="space-y-3">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                      <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    First & Last Name
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Business Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Address and Contact */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Home className="w-4 h-4 inline mr-2" />
                    Service Address
                  </label>
                  <textarea
                    placeholder="Enter full address including city, state, and zip code"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  <Wrench className="w-4 h-4 inline mr-2" />
                  Service Type <span className="text-slate-400 font-normal">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <label key={service} className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.serviceTypes.includes(service)}
                        onChange={() => handleServiceTypeChange(service)}
                        className="mt-0.5 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-700 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                
                {formData.serviceTypes.includes('Other') && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Please specify other service..."
                      value={formData.otherService}
                      onChange={(e) => setFormData(prev => ({ ...prev, otherService: e.target.value }))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Description of Plumbing Problem
                </label>
                <textarea
                  placeholder="Please describe the plumbing issue in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Images of Plumbing Problem <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">Drag & drop files here or click to browse</p>
                  <p className="text-sm text-slate-400">PNG, JPG up to 10MB each</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setFormData(prev => ({ ...prev, images: e.target.files ? Array.from(e.target.files) : null }))}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="mt-4 inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                    Choose Files
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="group flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule Service Now
                </button>
                
                <a
                  href="tel:+1-555-123-4567"
                  className="group flex-1 border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Call Instead
                </a>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}