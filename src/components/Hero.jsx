import heroBg from '../assets/images/hero-bg-image.jpg';
import heroCharacter from '../assets/images/herocharacterimge.png';
import greenShape from '../assets/images/threelineimage.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85 z-[1]" />

      {/* Content Container */}
      <div className="relative z-[2] min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-24 lg:pt-0">
          {/* Desktop: Two Column Layout | Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:mt-32 lg:ml-22">
              {/* Heading */}
              <h1
                className="anim-up text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white  mb-6"
                style={{ fontFamily: 'Poppins, serif' }}
              >
                Making a Difference through Leadership, Service, and Success.
              </h1>

              {/* Paragraph */}
              <p className="anim-up delay-200 text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Aliquet eget quis sit odio aptent id euismod amet turpis leo. Hac aptent arcu semper nibh curabitur efficitur cubilia. Eget nibh dui tincidunt hendrerit euismod.
              </p>

              {/* CTA Button */}
              <button className="anim-up delay-400 bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-bold px-10 py-4 uppercase tracking-wide transition-all duration-300 text-lg">
                APPLY NOW!
              </button>
            </div>

            {/* Right Image Composition Column */}
            <div className="w-full lg:w-1/2 flex items-end justify-start lg:absolute lg:bottom-0 lg:right-0">
              <div className="relative w-full max-w-md lg:max-w-2xl">
                {/* Green Shape Behind - Larger and positioned behind student */}
                <div className="anim-down left-3  delay-200 absolute bottom-0 w-[90%] z-0">
                  <div className="relative w-full h-auto">
                    <img
                      src={greenShape}
                      alt=""
                      className="w-full h-auto opacity-0"
                    />
                    <div className="absolute inset-0 bg-blue-900/90" style={{
                      WebkitMaskImage: `url(${greenShape})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${greenShape})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center'
                    }}></div>
                  </div>
                </div>

                {/* Hero Characters Image - Grayscale and fixed at bottom */}
                <div className="anim-left relative z-10 left-5 md:left-10">
                  <img
                    src={heroCharacter}
                    alt="University Students"
                    className="w-[85%] h-auto grayscale"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
