import React from 'react';
import alumniImage from '../assets/images/aluminiimage.jpg';
import greenBox from '../assets/images/green-box.png';

const AlumniTestimonial = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image with Green Box */}
          <div className="relative">
            {/* Green decorative box */}
            <div className="absolute -left-8 md:-left-12 bottom-0 w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 bg-lime-500 -z-10"></div>
            
            {/* Alumni Image */}
            <div className="relative">
              <img 
                src={alumniImage} 
                alt="Alumni student" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
              "I relied on my independence, tenacity and ability to take things lightly — because college was a walk in the park compared to where I grew up."
            </blockquote>

            {/* Decorative line */}
            <div className="w-16 h-1 bg-lime-500"></div>

            {/* Author */}
            <div>
              <p className="text-lg md:text-xl font-bold text-black mb-1">
                — Angelina Francis
              </p>
              <p className="text-xs md:text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Alumni 2012
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonial;
