import React from 'react';
import SectionContainer from '../SectionContainer';
import { PROJECTS } from '../../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <SectionContainer id="projects">
      <div className="mb-16 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Featured Projects
        </h2>
        <p className={`max-w-xl mx-auto text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
          A collection of my recent voyages into code, featuring AI integrations and immersive experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className={`group relative rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col h-full
              ${isDarkMode 
                ? 'bg-slate-800/30 border-white/10 hover:border-blue-500/50 hover:shadow-blue-500/20' 
                : 'bg-white/70 border-white/60 hover:border-blue-400/50 hover:shadow-blue-200/50'}
            `}
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/20">
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                    aria-label="View Source"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer" 
                    className="p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
              
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors`}>
                {project.title}
              </h3>
              
              <p className={`mb-6 text-sm leading-relaxed flex-grow ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tag} 
                    style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    className={`text-xs px-3 py-1 rounded-full font-medium border transition-all duration-300 transform
                      ${isDarkMode 
                        ? 'bg-slate-900/50 border-white/10 text-blue-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:scale-105' 
                        : 'bg-white border-blue-100 text-blue-700 group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:scale-105'}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <a href="https://github.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 font-medium hover:underline underline-offset-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
           View more on GitHub <ArrowRight size={16} />
         </a>
      </div>
    </SectionContainer>
  );
};

export default Projects;