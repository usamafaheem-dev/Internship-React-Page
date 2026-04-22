import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  const features = [
    {
      id: 1,
      title: 'Flexibility',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-left',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Quality',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-up',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Global',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-right',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Expertise',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-left',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Support',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-up',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Certified',
      description: 'Tristique sem nunc efficitur inceptos felis curae sociosqu litora pellentesque natoque malesuada interdum at',
      animation: 'anim-right',
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-16 md:py-20 lg:py-24 px-6 md:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose Eduversita Global University
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-x-8 lg:gap-x-12 md:gap-y-12 lg:gap-y-16 space-y-10 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.id} className={`${feature.animation} flex flex-col items-center text-center`}>
              {/* Icon Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#fcba03] flex items-center justify-center mb-5 md:mb-6">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
