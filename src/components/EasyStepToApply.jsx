import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EasyStepToApply = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  const steps = [
    {
      number: '01',
      title: 'Complete Application Form',
      description: 'Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros volutpat aliquet eu diam gravida class tellus justo finibus facilisis. In taciti augue nascetur dictumst diam dapibus nam lobortis.',
      animation: 'anim-left'
    },
    {
      number: '02',
      title: 'Self-report your courses and complete CADRs',
      description: 'Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros volutpat aliquet eu diam gravida class tellus justo finibus facilisis. In taciti augue nascetur dictumst diam dapibus nam lobortis.',
      animation: 'anim-right'
    },
    {
      number: '03',
      title: 'Choose your program',
      description: 'Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros volutpat aliquet eu diam gravida class tellus justo finibus facilisis. In taciti augue nascetur dictumst diam dapibus nam lobortis.',
      animation: 'anim-left'
    },
    {
      number: '04',
      title: 'Additional information about yourself or your circumstances',
      description: 'Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros volutpat aliquet eu diam gravida class tellus justo finibus facilisis. In taciti augue nascetur dictumst diam dapibus nam lobortis.',
      animation: 'anim-right'
    },
    {
      number: '05',
      title: 'Payment of Fees',
      description: 'Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros volutpat aliquet eu diam gravida class tellus justo finibus facilisis. In taciti augue nascetur dictumst diam dapibus nam lobortis.',
      animation: 'anim-left'
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-12 md:mb-16">
          Easy Step to Apply
        </h2>

        {/* Steps List */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index}>
              <div className={`${step.animation} py-8 md:py-12 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 lg:gap-12`}>
                {/* Number */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900">
                  {step.number}
                </div>

                {/* Content */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Divider - don't show after last item */}
              {index < steps.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="anim-up bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-semibold px-8 py-3 md:px-10 md:py-4 transition-colors duration-200">
            APPLICATION FORM →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EasyStepToApply;
