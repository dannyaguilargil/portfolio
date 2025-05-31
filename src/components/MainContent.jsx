import React from 'react';
import About from './About';
import Projects from './Projects';
import '../assets/styles/right.css'; 

const MainContent = () => {
  return (
    <div className='right-content'>
      <About />
      <Projects />
    </div>
  );
};

export default MainContent;
