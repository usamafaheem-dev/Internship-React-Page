import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProgramsSection = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  const programs = [
    {
      id: 1,
      title: "Master's Degree Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      isHighlighted: false,
      animation: 'anim-left'
    },
    {
      id: 2,
      title: "Bachelor's Degree Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      isHighlighted: true,
      animation: 'anim-up'
    },
    {
      id: 3,
      title: "Associate's Degree Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      isHighlighted: false,
      animation: 'anim-right'
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-16 md:py-20 lg:py-24 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Title Area */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Majors, minors & graduate programs
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Cards Area */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-stretch">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`${program.animation} flex-1 relative pb-16 pt-10 px-8 rounded-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                program.isHighlighted
                  ? 'bg-[#fcba03] text-black shadow-xl'
                  : 'bg-blue-900/90 text-white shadow-lg'
              }`}
            >
              {/* Card Content */}
              <div className="text-center">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  program.isHighlighted ? 'text-black' : 'text-white'
                }`}>
                  {program.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${
                  program.isHighlighted ? 'text-black opacity-90' : 'text-white opacity-90'
                }`}>
                  {program.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <button
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                    program.isHighlighted 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-[#fcba03] text-black'
                  }`}
                  aria-label={`Learn more about ${program.title}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
