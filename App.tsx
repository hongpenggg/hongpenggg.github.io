import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StarBackground from './components/StarBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`relative min-h-screen font-sans antialiased transition-colors duration-500`}>
      {/* Background */}
      <StarBackground isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default App;
