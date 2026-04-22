import React from 'react';
import alumniImage from '../assets/images/aluminiimage.jpg';
import greenBox from '../assets/images/green-box.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AlumniTestimonial = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image with Blue Box */}
          <div className="anim-left relative w-full">
            {/* Blue decorative box */}
            <div className="absolute -left-8 md:-left-12 lg:-left-16 -bottom-8 md:-bottom-12 lg:-bottom-16 w-32 md:w-48 lg:w-56 xl:w-64 h-32 md:h-48 lg:h-56 xl:h-64 bg-blue-900/90 -z-10"></div>
            
            {/* Alumni Image - Larger */}
            <div className="relative">
              <img 
                src={alumniImage} 
                alt="Alumni student" 
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="anim-right space-y-4 md:space-y-6 lg:space-y-8 w-full">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">
              "I relied on my independence, tenacity and ability to take things lightly — because college was a walk in the park compared to where I grew up."
            </blockquote>

            {/* Decorative line */}
            <div className="w-16 h-1 bg-blue-900"></div>

            {/* Author */}
            <div>
              <p className="text-base md:text-lg lg:text-xl font-bold text-black mb-1">
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
