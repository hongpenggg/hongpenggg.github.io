import React from 'react';
import SectionContainer from '../SectionContainer';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <SectionContainer id="about">
      <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-500
        ${isDarkMode 
          ? 'bg-slate-900/40 border-white/10 shadow-black/20' 
          : 'bg-white/60 border-white/50 shadow-slate-200/50'}
      `}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className={`absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200
              ${isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'bg-gradient-to-r from-blue-400 to-indigo-400'}
            `}></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/800/800?random=10" 
                  alt="Hongpeng Wei" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
          </div>
          
          <div>
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              About Me
            </h2>
            <div className={`space-y-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              <p>
                Hello! I'm Hongpeng, a passionate developer based in the digital cosmos. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My journey began when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
               <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Tech Stack
               </h3>
               <ul className={`grid grid-cols-2 gap-2 text-sm font-mono ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                 <li className="flex items-center gap-2">▹ JavaScript (ES6+)</li>
                 <li className="flex items-center gap-2">▹ React</li>
                 <li className="flex items-center gap-2">▹ TypeScript</li>
                 <li className="flex items-center gap-2">▹ Node.js</li>
                 <li className="flex items-center gap-2">▹ Tailwind CSS</li>
                 <li className="flex items-center gap-2">▹ Next.js</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
