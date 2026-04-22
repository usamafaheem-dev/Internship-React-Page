import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import React from 'react';
import logo from '../assets/images/logo``1.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const sectionRef = useScrollAnimation(0.15);
  
  const locations = ['Jakarta', 'Surabaya', 'Medan', 'Palangkaraya'];
  
  const helpfulLinks = [
    'Faculty',
    'Academics',
    'Admissions + Aid',
    'Campus Life',
    'Alumni'
  ];
  
  const aboutLinks = [
    'About us',
    'Leadership',
    'Careers',
    'News & Article',
    'Legal Notice'
  ];

  const policies = [
    'Term of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Contact us'
  ];

  const socialLinks = [
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'twitter', label: 'Twitter', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' }
  ];

  return (
    <footer ref={sectionRef} className="relative bg-blue-900 text-white z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10">
          
          {/* Column 1: Brand + Contact */}
          <div className="anim-up space-y-3">
            <img src={logo} alt="Eduversita Logo" className="h-10 md:h-12 object-contain mb-4" />
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Jalan Cempaka Wangi No 22</p>
              <p className="text-gray-300">Jakarta - Indonesia</p>
              
              <div className="flex items-center gap-2 text-[#fcba03] hover:text-[#e0a803] transition-colors cursor-pointer">
                <Mail size={14} />
                <span>support@yourdomain.tld</span>
              </div>
              
              <div className="flex items-center gap-2 text-[#fcba03] hover:text-[#e0a803] transition-colors cursor-pointer">
                <Phone size={14} />
                <span>+6221.2002.2012</span>
              </div>
            </div>
          </div>

          {/* Column 2: Locations */}
          <div className="anim-left">
            <h3 className="text-base md:text-lg font-bold mb-4">Locations</h3>
            <ul className="space-y-1.5">
              {locations.map((location) => (
                <li key={location}>
                  <a 
                    href="#" 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#fcba03] transition-colors text-sm font-medium group"
                  >
                    <ArrowUpRight size={14} className="text-[#fcba03] group-hover:translate-x-1 transition-transform" />
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Helpful Links */}
          <div className="anim-up">
            <h3 className="text-base md:text-lg font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-1.5">
              {helpfulLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#fcba03] transition-colors text-sm font-medium group"
                  >
                    <ArrowUpRight size={14} className="text-[#fcba03] group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About */}
          <div className="anim-right">
            <h3 className="text-base md:text-lg font-bold mb-4">About</h3>
            <ul className="space-y-1.5">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#fcba03] transition-colors text-sm font-medium group"
                  >
                    <ArrowUpRight size={14} className="text-[#fcba03] group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright / Policy Row */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* First Line: Copyright */}
          <div className="text-xs text-gray-400 text-center md:text-left mb-3">
            <p>Copyright © 2022 Eduversita, All rights reserved. Powered by Usama Faheem.</p>
          </div>
          
          {/* Second Line: Policies + Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left: Policies */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-gray-400">
              {policies.map((policy, index) => (
                <React.Fragment key={policy}>
                  <a href="#" className="hover:text-[#fcba03] transition-colors whitespace-nowrap">
                    {policy}
                  </a>
                  {index < policies.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ name, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-[#fcba03] text-white hover:text-black transition-all duration-300 rounded text-xs font-bold"
                >
                  {name === 'facebook' && 'f'}
                  {name === 'instagram' && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                  {name === 'twitter' && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                  {name === 'linkedin' && <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
