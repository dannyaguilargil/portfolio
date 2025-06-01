import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import '../assets/styles/right.css'; 

const MainContent = () => {
  return (
    <div className='right-content'>
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default MainContent;
