import { GraduationCap, FileCheck, Award, Bookmark } from 'lucide-react';
import campusImage from '../assets/images/hero-bg-image.jpg';
import greenBox from '../assets/images/green-box.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhoWeAre = () => {
  const sectionRef = useScrollAnimation(0.15);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-12 md:py-16 lg:py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32 md:mb-40 lg:mb-48">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="anim-up text-[#ff4500] text-xs md:text-sm font-bold uppercase tracking-widest">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="anim-up text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Knowledge will bring you the opportunity to make a difference.
            </h2>
            
            <p className="anim-up text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Vivamus nulla mauris vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetur habitant blandit.
            </p>
            
            <div>
              <button className="anim-up bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors">
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Right Column - Image Composition */}
          <div className="relative flex items-center justify-center lg:justify-end pb-32 md:pb-40">
            {/* Container for the composition */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Green decorative box - positioned behind */}
              <div className="anim-down absolute -left-8 -bottom-8 w-3/4 h-3/4 z-0">
                <div className="w-full h-full bg-blue-900/90"></div>
              </div>
              
              {/* Main campus image */}
              <div className="anim-right relative z-10">
                <img 
                  src={campusImage} 
                  alt="University Campus" 
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
              
              {/* Floating white card - positioned on top */}
              <div className="anim-scale absolute -right-4 -bottom-20 md:-right-8 md:-bottom-24 z-30 bg-white shadow-2xl p-6 md:p-8 w-[240px] md:w-[280px] flex flex-col items-center text-center">
                {/* Orange bookmark icon */}
                <div className="mb-3">
                  <Bookmark className="w-8 h-8 md:w-10 md:h-10 text-[#ff4500] fill-[#ff4500]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
                  40+ Years of History
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                  Netus amet congue justo vehicula ante sed cursus mus sodales ridiculus duis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature Card 1 - White Background - Left se aaye */}
          <div className="anim-left bg-white p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#fcba03] flex items-center justify-center mb-6">
              <GraduationCap className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Most employable
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Adipiscing sociosqu placerat platea rutrum ut eros vestibulum posuere dictum blandit massa porttitor amet.
            </p>
          </div>

          {/* Feature Card 2 - Green Background (Center) - Top se aaye */}
          <div className="anim-up bg-[#fcba03] p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <FileCheck className="w-10 h-10 text-[#fcba03]" strokeWidth={2} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Certified Institute
            </h3>
            
            <p className="text-gray-800 text-sm leading-relaxed">
              Adipiscing sociosqu placerat platea rutrum ut eros vestibulum posuere dictum blandit massa porttitor amet.
            </p>
          </div>

          {/* Feature Card 3 - White Background - Right se aaye */}
          <div className="anim-right bg-white p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#fcba03] flex items-center justify-center mb-6">
              <Award className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Top 50 university
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Adipiscing sociosqu placerat platea rutrum ut eros vestibulum posuere dictum blandit massa porttitor amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
