import threeLinesImage from '../assets/images/threelineimage.png';

const CTASection = () => {
  return (
    <section className="relative w-full bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden z-10">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={threeLinesImage} 
          alt="" 
          className="w-64 md:w-80 lg:w-96 opacity-10 select-none"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
          Are you ready to take the next step toward your future career?
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* CTA Button */}
        <button className="bg-[#c4d82e] hover:bg-[#b0c428] text-black font-bold px-8 py-3 md:px-10 md:py-4 uppercase tracking-wider text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg">
          APPLY NOW !
        </button>
      </div>
    </section>
  );
};

export default CTASection;
