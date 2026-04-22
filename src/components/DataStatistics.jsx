import { useState, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const DataStatistics = () => {
  const sectionRef = useScrollAnimation(0.15);
  const [counters, setCounters] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Counter for 91%
            let count1 = 0;
            const interval1 = setInterval(() => {
              count1 += 1;
              setCounters(prev => ({ ...prev, stat1: count1 }));
              if (count1 >= 91) clearInterval(interval1);
            }, 50);

            // Counter for 4.2+
            let count2 = 0;
            const interval2 = setInterval(() => {
              count2 += 0.1;
              setCounters(prev => ({ ...prev, stat2: count2 }));
              if (count2 >= 4.2) clearInterval(interval2);
            }, 80);

            // Counter for 93%
            let count3 = 0;
            const interval3 = setInterval(() => {
              count3 += 1;
              setCounters(prev => ({ ...prev, stat3: count3 }));
              if (count3 >= 93) clearInterval(interval3);
            }, 48);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative bg-gray-100 py-16 md:py-20 lg:py-24 z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-16">
        
        {/* Top Content Area - Heading and Paragraph */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {/* Mobile: Stacked Layout */}
          <div className="md:hidden">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              The Eduversita story through data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Faucibus dictum dapibus feugiat si magna ultrices habitant. Habitant sodales ridiculus faucibus vulputate arcu at lobortis nibh fringilla ad ultrices. A class torquent rhoncus est placerat lacinia scelerisque dui sapien condimentum nunc.
            </p>
          </div>

          {/* Desktop: Two-Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The Eduversita story through data
            </h2>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Faucibus dictum dapibus feugiat si magna ultrices habitant. Habitant sodales ridiculus faucibus vulputate arcu at lobortis nibh fringilla ad ultrices. A class torquent rhoncus est placerat lacinia scelerisque dui sapien condimentum nunc.
            </p>
          </div>
        </div>

        {/* Stats Area */}
        <div ref={statsRef} className="mb-12 md:mb-16">
          {/* Mobile: 2 stats top, 1 centered below */}
          <div className="md:hidden">
            {/* First Row: 2 stats */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              {/* Stat 1 - Left animation */}
              <div className="anim-left text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-3">
                  {counters.stat1}%
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Undergrads from State
                </div>
              </div>

              {/* Stat 2 - Up animation */}
              <div className="anim-up text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-3">
                  {counters.stat2.toFixed(1)}+
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Average years to degree for freshmen
                </div>
              </div>
            </div>

            {/* Second Row: 1 stat centered - Right animation */}
            <div className="flex justify-center">
              <div className="anim-right text-center max-w-[200px]">
                <div className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-3">
                  {counters.stat3}%
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Freshman graduation rate
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 3 stats in one row */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-12 lg:gap-16">
            {/* Stat 1 - Left animation */}
            <div className="anim-left text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-blue-900 mb-4">
                {counters.stat1}%
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Undergrads from State
              </div>
            </div>

            {/* Stat 2 - Up animation */}
            <div className="anim-up text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-blue-900 mb-4">
                {counters.stat2.toFixed(1)}+
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Average years to degree for freshmen
              </div>
            </div>

            {/* Stat 3 - Right animation */}
            <div className="anim-right text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-blue-900 mb-4">
                {counters.stat3}%
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Freshman graduation rate
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button className="bg-[#fcba03] border-2 border-transparent hover:bg-black hover:border-[#fcba03] text-white font-bold px-10 py-3.5 uppercase tracking-wider text-sm transition-colors">
            DISCOVER MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default DataStatistics;
