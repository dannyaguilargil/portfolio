import React from 'react';
import '../assets/styles/hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Danny Aguilar</h1>
      <h2 className="hero-subtitle">Ingeniero de Back-End & Pentester</h2>
      <p className="hero-highlight">
        Escribo el código que no ves, pero que lo hace todo posible...
      </p>
      <p className="hero-description">
        Ingeniero de sistemas y gestor de proyectos, apasionado por las nuevas tecnologías,
        uso de contenedores y administración en la nube.
      </p>
    </div>
  );
};

export default Hero;
