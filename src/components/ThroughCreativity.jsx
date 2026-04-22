import threeLineImage from '../assets/images/threelineimage.png';
import studentImage from '../assets/images/throughcretivity.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ThroughCreativity = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Visual Area */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center min-h-[280px] md:min-h-[500px]">
            {/* Decorative Background Shape */}
            <div className="anim-scale absolute inset-0 flex justify-center items-center">
              <div className="relative w-[70%] md:w-full h-auto max-w-lg md:max-w-xl">
                <img 
                  src={threeLineImage} 
                  alt="" 
                  className="w-full h-auto object-contain opacity-0"
                />
                <div className="absolute inset-0 bg-blue-900/90 rounded-lg" style={{
                  WebkitMaskImage: `url(${threeLineImage})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${threeLineImage})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }}></div>
              </div>
            </div>

            {/* Student Image */}
            <div className="anim-right relative z-10 w-[65%] md:w-full">
              <img 
                src={studentImage} 
                alt="Student with laptop" 
                className="w-full h-auto max-w-md md:max-w-lg object-contain"
              />
            </div>

            {/* Stat Badge */}
            <div className="anim-left absolute top-[15%] left-0 md:top-[20%] md:left-4 lg:left-6 z-20 bg-white rounded-full w-16 h-16 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-xl">
              <div className="text-blue-900 text-lg md:text-2xl lg:text-3xl font-bold">4K+</div>
              <div className="text-black text-[7px] md:text-[10px] font-medium text-center leading-tight">
                STUDENT<br />ACTIVE
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="anim-up text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Through creativity, collaboration and inclusion, we seek and solve problems to improve life on earth.
            </h2>
            
            <p className="anim-up text-gray-700 text-base md:text-lg leading-relaxed">
              Molestie erat torquent eget rutrum suscipit volutpat aenean viverra euismod. Lacinia facilisi pede mollis nostra consectetuer. Aliquam cursus mauris per habitant placerat suscipit nulla sagittis ante ultricies curae.
            </p>
            
            <button className="anim-up bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-semibold px-8 py-3 transition-colors duration-300">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThroughCreativity;
