import threeLineImage from '../assets/images/threelineimage.png';
import studentImage from '../assets/images/throughcretivity.png';

const ThroughCreativity = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Visual Area */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 flex justify-center items-center">
              <img 
                src={threeLineImage} 
                alt="" 
                className="w-full h-auto max-w-lg md:max-w-xl object-contain"
              />
            </div>

            {/* Student Image */}
            <div className="relative z-10">
              <img 
                src={studentImage} 
                alt="Student with laptop" 
                className="w-full h-auto max-w-md md:max-w-lg object-contain"
              />
            </div>

            {/* Stat Badge */}
            <div className="absolute top-0 left-0 md:left-8 lg:left-12 z-20 bg-white rounded-full w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-lg">
              <div className="text-[#9FD356] text-3xl md:text-4xl font-bold">4K+</div>
              <div className="text-black text-xs md:text-sm font-medium text-center leading-tight">
                STUDENT<br />ACTIVE
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Through creativity, collaboration and inclusion, we seek and solve problems to improve life on earth.
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Molestie erat torquent eget rutrum suscipit volutpat aenean viverra euismod. Lacinia facilisi pede mollis nostra consectetuer. Aliquam cursus mauris per habitant placerat suscipit nulla sagittis ante ultricies curae.
            </p>
            
            <button className="bg-[#9FD356] hover:bg-[#8BC43F] text-black font-semibold px-8 py-3 transition-colors duration-300">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThroughCreativity;
