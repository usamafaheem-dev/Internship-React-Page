const DataStatistics = () => {
  return (
    <section className="relative bg-gray-100 py-16 md:py-20 lg:py-24 z-10">
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
        <div className="mb-12 md:mb-16">
          {/* Mobile: 2 stats top, 1 centered below */}
          <div className="md:hidden">
            {/* First Row: 2 stats */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-[#a4c639] mb-3">
                  91%
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Undergrads from State
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-[#a4c639] mb-3">
                  4.2+
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Average years to degree for freshmen
                </div>
              </div>
            </div>

            {/* Second Row: 1 stat centered */}
            <div className="flex justify-center">
              <div className="text-center max-w-[200px]">
                <div className="text-5xl sm:text-6xl font-extrabold text-[#a4c639] mb-3">
                  93%
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  Freshman graduation rate
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 3 stats in one row */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#a4c639] mb-4">
                91%
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Undergrads from State
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#a4c639] mb-4">
                4.2+
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Average years to degree for freshmen
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#a4c639] mb-4">
                93%
              </div>
              <div className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                Freshman graduation rate
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button className="bg-[#a4c639] hover:bg-[#8fb02d] text-gray-900 font-bold px-10 py-3.5 uppercase tracking-wider text-sm transition-colors">
            DISCOVER MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default DataStatistics;
