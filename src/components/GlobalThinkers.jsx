import globalThinkerBg from '../assets/images/globalthinker-section.jpg';

const GlobalThinkers = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[500px] overflow-hidden z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${globalThinkerBg})`,
          backgroundAttachment: 'scroll'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16 text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 md:mb-8">
            Global thinkers, Engaged leaders We'll take you higher.
          </h2>

          {/* Paragraph */}
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* CTA Button */}
          <button className="bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-bold px-10 py-3.5 uppercase tracking-wider text-sm transition-colors">
            DISCOVER MORE
          </button>

        </div>
      </div>
    </section>
  );
};

export default GlobalThinkers;
