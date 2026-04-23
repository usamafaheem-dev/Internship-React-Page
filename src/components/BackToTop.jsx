import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-500 group animate-slideInUp"
          aria-label="Back to top"
        >
          <ChevronUp 
            size={28} 
            className="group-hover:animate-pulse transition-all duration-300" 
          />
          
          {/* Elegant rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 animate-spin-slow"></div>
          
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;