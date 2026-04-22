import { GraduationCap, FileCheck, Award, Bookmark } from 'lucide-react';
import campusImage from '../assets/images/hero-bg-image.jpg';
import greenBox from '../assets/images/green-box.png';

const WhoWeAre = () => {
  return (
    <section className="relative bg-gray-50 py-12 md:py-16 lg:py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[#ff4500] text-xs md:text-sm font-bold uppercase tracking-widest">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Knowledge will bring you the opportunity to make a difference.
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Vivamus nulla mauris vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetur habitant blandit.
            </p>
            
            <div>
              <button className="bg-[#fcba03] hover:bg-[#e0a803] text-gray-900 font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors">
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Right Column - Image Composition */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Container for the composition */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Green decorative box - positioned behind */}
              <div className="absolute -left-8 -bottom-8 w-3/4 h-3/4 z-0">
                <img 
                  src={greenBox} 
                  alt="" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              
              {/* Main campus image */}
              <div className="relative z-10">
                <img 
                  src={campusImage} 
                  alt="University Campus" 
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
              
              {/* Floating white card - positioned on top */}
              <div className="absolute -right-4 -bottom-6 md:-right-8 md:-bottom-8 z-20 bg-white shadow-xl p-6 max-w-[200px] md:max-w-[240px]">
                {/* Orange bookmark icon */}
                <div className="absolute -top-3 left-6">
                  <Bookmark className="w-8 h-8 text-[#ff4500] fill-[#ff4500]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-2">
                  40+ Years of History
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  Netus amet congue justo vehicula ante sed cursus mus sodales ridiculus duis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature Card 1 - White Background */}
          <div className="bg-white p-8 text-center flex flex-col items-center">
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

          {/* Feature Card 2 - Green Background (Center) */}
          <div className="bg-[#fcba03] p-8 text-center flex flex-col items-center">
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

          {/* Feature Card 3 - White Background */}
          <div className="bg-white p-8 text-center flex flex-col items-center">
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
