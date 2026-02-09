import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'py-4 bg-opacity-80 backdrop-blur-lg shadow-lg translate-y-0' 
        : 'py-6 bg-opacity-0 backdrop-blur-none'
      }
      ${isDarkMode 
        ? (scrolled ? 'bg-[#0f172a]/80 border-b border-white/10' : '') 
        : (scrolled ? 'bg-white/80 border-b border-black/5' : '')
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group flex items-center text-2xl font-bold font-mono tracking-tighter cursor-pointer select-none">
          <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>H</span>
          <span className={`overflow-hidden transition-all duration-500 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ongpeng
          </span>
          <span className={`mx-1 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`}>{'\\'}</span>
          <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>W</span>
          <span className={`overflow-hidden transition-all duration-500 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ei
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noreferrer" : ""}
              className={`relative px-2 py-1 text-sm font-medium uppercase tracking-wider transition-colors duration-300
                ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}
                group
              `}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full
                ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}
              `} />
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 
              ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
           <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 
              ${isDarkMode ? 'bg-white/10 text-yellow-300' : 'bg-slate-200 text-slate-700'}`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b transition-all
          ${isDarkMode ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-black/5'}
        `}>
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-slate-800'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
