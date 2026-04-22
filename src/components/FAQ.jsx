import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: 'PELLENTESQUE NAM EU LIBERO HIMENAEOS NIBH VIVERRA SEMPER?',
      answer: 'At quisque libero enim fusce neque aliquet id facilisis letius. Consequat felis habitasse potenti inceptos vitae ligula interdum mi litora scelerisque morbi. Arcu tempus ad urna convallis malesuada dictumst mollis adipiscing potenti nunc aenean.'
    },
    {
      question: 'ELIT MASSA FINIBUS CONSEQUAT COMMODO HAC VEL?',
      answer: 'At quisque libero enim fusce neque aliquet id facilisis letius. Consequat felis habitasse potenti inceptos vitae ligula interdum mi litora scelerisque morbi. Arcu tempus ad urna convallis malesuada dictumst mollis adipiscing potenti nunc aenean.'
    },
    {
      question: 'FACILISIS PRIMIS CURAE HENDRERIT NOSTRA AUGUE HIMENAEOS TEMPUS?',
      answer: 'At quisque libero enim fusce neque aliquet id facilisis letius. Consequat felis habitasse potenti inceptos vitae ligula interdum mi litora scelerisque morbi. Arcu tempus ad urna convallis malesuada dictumst mollis adipiscing potenti nunc aenean.'
    },
    {
      question: 'MAXIMUS INTEGER URNA MOLESTIE PORTA VEL HABITASSE GRAVIDA?',
      answer: 'At quisque libero enim fusce neque aliquet id facilisis letius. Consequat felis habitasse potenti inceptos vitae ligula interdum mi litora scelerisque morbi. Arcu tempus ad urna convallis malesuada dictumst mollis adipiscing potenti nunc aenean.'
    },
    {
      question: 'CONDIMENTUM GRAVIDA FELIS VITAE EU?',
      answer: 'At quisque libero enim fusce neque aliquet id facilisis letius. Consequat felis habitasse potenti inceptos vitae ligula interdum mi litora scelerisque morbi. Arcu tempus ad urna convallis malesuada dictumst mollis adipiscing potenti nunc aenean.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Intro Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold text-orange-600 uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Frequently Ask Questions.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between px-6 py-4 md:py-5 text-left transition-colors duration-200 ${
                    openIndex === index
                      ? 'bg-lime-500 text-black'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xs md:text-sm font-semibold pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 text-lime-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="bg-white px-6 py-5 md:py-6">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
