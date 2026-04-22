import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo``1.png';

const navLinks = ['Home', 'About Us', 'Academics', 'Faculty', 'Contact Us', 'Pages'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide down animation on mount - delayed start
    setTimeout(() => setIsVisible(true), 300);
    
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header-animate fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-blue-900/90 shadow-lg' : 'bg-blue-600/10'
        } backdrop-blur-sm border-b border-white/20 ${
          isVisible ? 'header-visible' : ''
        }`}
      >
        {/* ── Mobile: < 768px ── */}
        <div className="flex md:hidden h-16">
          {/* Hamburger */}
          <div className="w-[20%] flex items-center justify-center border-r border-white/10">
            <button 
              aria-label={menuOpen ? "Close menu" : "Open menu"} 
              className="text-white hover:text-[#fcba03] transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} className="text-[#fcba03]" /> : <Menu size={22} />}
            </button>
          </div>
          {/* Logo centered */}
          <div className="flex-1 flex items-center justify-center px-4">
            <img src={logo} alt="University Logo" className="h-9 object-contain" />
          </div>
        </div>

        {/* ── Tablet: 768px – 1199px ── */}
        <div className="hidden md:flex xl:hidden h-16">
          {/* Menu Icon */}
          <div className="w-[20%] flex items-center justify-center border-r border-white/10">
            <button 
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="text-white hover:text-[#fcba03] transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} className="text-[#fcba03]" /> : <Menu size={22} />}
            </button>
          </div>
          {/* Logo */}
          <div className="w-[50%] flex items-center justify-center border-r border-white/10 px-6">
            <img src={logo} alt="University Logo" className="h-10 object-contain" />
          </div>
          {/* Admission */}
          <div className="w-[30%] flex items-center justify-center px-4">
            <button className="bg-[#fcba03] hover:bg-black hover:border hover:border-[#fcba03] hover:text-white text-black font-semibold px-6 py-2.5 uppercase tracking-wider text-sm transition-all duration-300 font-['Poppins']">
              ADMISSION
            </button>
          </div>
        </div>

        {/* ── Desktop: 1200px+ ── */}
        <div className="hidden xl:flex items-stretch h-[72px]">
          {/* Logo section - 30% width */}
          <div className="w-[30%] flex items-center justify-center border-r border-white/20 h-full">
            <img src={logo} alt="University Logo" className="h-12 object-contain" />
          </div>

          {/* Nav Links - 45% width */}
          <nav className="w-[45%] flex items-center justify-center gap-8 px-8 border-r border-white/20 h-full">
            {['HOME', 'ABOUT US', 'ACADEMICS', 'FACULTY', 'CONTACT US', 'PAGES'].map((label) => (
              <a
                key={label}
                href="#"
                className={`relative font-bold uppercase tracking-wide text-[13px] whitespace-nowrap transition-colors duration-300 font-['Poppins'] group ${
                  activeLink === label.toLowerCase().replace(' ', '') 
                    ? 'text-[#fcba03]' 
                    : 'text-white hover:text-[#fcba03]'
                }`}
                onClick={() => setActiveLink(label.toLowerCase().replace(' ', ''))}
              >
                {label}
                {/* Thin elegant underline */}
                <span className={`absolute bottom-[-6px] left-0 h-[1.5px] bg-[#fcba03] transition-all duration-300 ease-out ${
                  activeLink === label.toLowerCase().replace(' ', '') 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Admission Button - 25% width */}
          <div className="w-[25%] flex items-center justify-center h-full">
            <button className="bg-[#fcba03] hover:bg-black border-2 border-transparent hover:border-[#fcba03] hover:text-white text-black font-bold px-7 py-2.5 uppercase tracking-wide text-[13px] transition-all duration-300 font-['Poppins']">
              ADMISSION
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="fixed top-16 md:top-16 left-0 w-full bg-white z-40 xl:hidden shadow-lg">
          <nav className="flex flex-col">
            {navLinks.map((label, index) => (
              <a
                key={label}
                href="#"
                className={`px-8 py-4 text-black font-semibold text-base hover:bg-gray-100 transition-colors font-['Poppins'] ${
                  index !== navLinks.length - 1 ? 'border-b border-gray-200' : ''
                }`}
                onClick={() => {
                  setActiveLink(label);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
