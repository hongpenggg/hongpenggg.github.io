import React from 'react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`relative min-h-screen flex items-center justify-center py-20 px-6 ${className}`}>
      <div className="container mx-auto max-w-6xl z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
