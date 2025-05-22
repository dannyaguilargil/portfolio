import React from 'react';
import About from './About';
import Projects from './Projects';

const MainContent = () => {
  return (
    <div className="space-y-16">
      <About />
      <Projects />
    </div>
  );
};

export default MainContent;
