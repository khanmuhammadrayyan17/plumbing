'use client';

import { Star, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

// Real 5-star Google reviews for Tony's Quality Plumbing LLC
const testimonials = [
  {
    name: "Gjeuland Marku",
    location: "Local Guide · 17 reviews · 7 photos",
    rating: 5,
    text: "I would highly recommend using their service. He was on time, did great work and the price was more then reasonable. I definitely plan on hiring him again to do my toilet installation and will be recommending him to friends and family",
    fullText: "I would highly recommend using their service. He was on time, did great work and the price was more then reasonable. I definitely plan on hiring him again to do my toilet installation and will be recommending him to friends and family",
    date: "4 months ago"
  },
  {
    name: "Jonah Mansour",
    location: "2 reviews",
    rating: 5,
    text: "My cousen referred me and it was the best decision I ever made using this company. Quick and efficient/cost effective workmanship.",
    fullText: "My cousen referred me and it was the best decision I ever made using this company. Quick and efficient/cost effective workmanship.",
    date: "8 months ago"
  },
  {
    name: "D V",
    location: "1 review",
    rating: 5,
    text: "I highly recommend Tony's Quality Plumbing. Tony and his crew came out on short notice and did an excellent job on replacing the water heater, the sump pump, and the damaged main shutoff valve.",
    fullText: "I highly recommend Tony's Quality Plumbing. Tony and his crew came out on short notice and did an excellent job on replacing the water heater, the sump pump, and the damaged main shutoff valve. They offered helpful advice on how to prevent future plumbing issues. They are professional, knowledgeable, and work with care. A great experience from start to finish. I would definitely use them again for any plumbing needs.",
    date: "10 months ago"
  }
];

export default function Testimonials() {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const renderStars = (rating: number, totalStars: number = 5) => {
    return (
      <div className="flex gap-1">
        {[...Array(totalStars)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-6 h-6 ${
              i < Math.floor(rating) 
                ? 'fill-yellow-400 text-yellow-400' 
                : i < rating 
                  ? 'fill-yellow-400/50 text-yellow-400' 
                  : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="reviews" 
      ref={testimonialsRef}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          testimonialsInView 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-12'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Local Homeowners
          </h2>
          
          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(4.6)}
            <span className="text-slate-600 font-medium text-lg">4.7 on Google</span>
            <a 
              href="https://www.google.com/search?q=Lawrence+Plumbing+and+Backflow+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:text-blue-700 transition-colors"
              title="View all Google reviews"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedReviews.includes(index);
            const displayText = isExpanded ? testimonial.fullText : testimonial.text;
            
            return (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 border border-transparent hover:border-blue-100/50 hover:-translate-y-2 ${
                  testimonialsInView 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 200}ms` 
                }}
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                  "{displayText}"
                  {testimonial.fullText !== testimonial.text && (
                    <button
                      onClick={() => toggleReview(index)}
                      className="ml-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  {testimonial.location && (
                    <div className="text-slate-600 text-sm">{testimonial.location}</div>
                  )}
                  <div className="text-sm text-slate-500 mt-1">Google Review • {testimonial.date}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action to view more reviews */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Lawrence+Plumbing+and+Backflow+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            View All Google Reviews
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}