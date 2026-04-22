import liveasifyouImage from '../assets/images/liveasifyou.jpg';

const InspirationalBanner = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden z-10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${liveasifyouImage})`,
          backgroundAttachment: 'scroll'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      
      {/* Content */}
      <div className="relative z-[2] h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 md:mb-8">
            Live as if you were to die tomorrow. Learn as if you were to live forever.
          </h2>
          
          {/* Paragraph */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          
          {/* Button */}
          <button className="bg-[#9ACD32] hover:bg-[#8AB82E] text-black font-semibold px-8 md:px-10 py-3 md:py-4 text-sm md:text-base tracking-wider transition-colors duration-300">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationalBanner;
