import React from 'react';
import SectionContainer from '../SectionContainer';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <SectionContainer id="home" className="pt-32">
      <div className="flex flex-col items-center text-center">
        <div className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide border backdrop-blur-md
          ${isDarkMode 
            ? 'bg-blue-500/10 border-blue-400/30 text-blue-300' 
            : 'bg-blue-600/10 border-blue-600/20 text-blue-700'
          }`}
        >
          Frontend Developer & UI Designer
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 relative">
          <span className={`block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Crafting Digital
          </span>
          <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${
            isDarkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-indigo-600'
          }`}>
            Universes
          </span>
        </h1>

        <p className={`max-w-2xl text-lg md:text-xl mb-10 leading-relaxed
          ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}
        `}>
          I build accessible, pixel-perfect, and performant web experiences that are out of this world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects"
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
              ${isDarkMode 
                ? 'bg-white text-slate-900 hover:bg-gray-100 shadow-white/10' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}
            `}
          >
            Explore My Work
          </a>
          <a 
            href="#contact"
            className={`px-8 py-4 rounded-full font-semibold border backdrop-blur-sm transition-all duration-300 hover:bg-opacity-10
              ${isDarkMode 
                ? 'border-white/20 text-white hover:bg-white' 
                : 'border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white'}
            `}
          >
            Contact Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <a href="#about" aria-label="Scroll down">
            <ArrowDown className={`${isDarkMode ? 'text-gray-500' : 'text-slate-400'}`} size={24} />
           </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
