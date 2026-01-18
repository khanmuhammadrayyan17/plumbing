'use client';

import { Star, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// Real 5-star Google reviews for Lawrence Plumbing and Backflow, Inc.
const testimonials = [
  {
    name: "Pedro Szymanski",
    location: "5 reviews",
    rating: 5,
    text: "I had an excellent experience with Lawrence Plumbing and Backflow, thanks to Shanon. She replaced my water heater and fixed the water flow in my kitchen faucet with great professionalism and care.",
    fullText: "I had an excellent experience with Lawrence Plumbing and Backflow, thanks to Shanon. She replaced my water heater and fixed the water flow in my kitchen faucet with great professionalism and care. Shanon does very neat, high-quality work and clearly explains everything, including how to properly maintain the water heater. She provided a fair, transparent price upfront and followed through exactly as promised. Highly recommend—honest, knowledgeable, and truly customer-focused.",
    date: "2 weeks ago"
  },
  {
    name: "Jim",
    location: "Local Guide · 7 reviews",
    rating: 5,
    text: "What a relief to feel comfortable and not have to worry about being price gouged by our plumber Shannon! Her plumbing skills are outstanding and she is always point on when diagnosing and correcting any plumbing issue.",
    fullText: "What a relief to feel comfortable and not have to worry about being price gouged by our plumber Shannon! However, that is not the case, when dealing with the big Company plumbing names that have continually overcharged, time after time! They charge $450 more than what Shannon quoted for a water heater. They justify by saying, they have to pay for all of the service trucks they have available! First of all, Shannon will communicate quickly and accurately! Her plumbing skills are outstanding and she is always point on, when diagnosing and correcting any plumbing issue, that I have ever had! She always maintains a professional rapport and gracious manners! She will make it a point to get to your job and will work you into her busy schedule! She has a busy schedule because her reputation is well known throughout our community! That should tell you a lot! You can't go wrong in dealing with Lawrence Plumbing! I guarantee you will be superbly satisfied with the work she does! And always with a smile and friendly attitude!",
    date: "4 months ago"
  },
  {
    name: "Mary Leddy",
    location: "1 review",
    rating: 5,
    text: "I have been impressed with Shannon's response time, troubleshooting skills, plumbing knowledge & efficiency on three separate repair requests!! Amazing & reasonably priced as well!!",
    fullText: "I have been impressed with Shannon's response time, troubleshooting skills, plumbing knowledge & efficiency on three separate repair requests!! Most recently, my water heater was leaking in AM, and after contacting Lawrence Plumbing via text, Shannon had my new water heater installed & old one draining for removal by Noon!!! Amazing & reasonably priced as well!!",
    date: "4 months ago"
  }
];

export default function Testimonials() {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

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
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Local Homeowners
          </h2>
          
          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(4.6)}
            <span className="text-slate-600 font-medium text-lg">4.6 on Google</span>
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
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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