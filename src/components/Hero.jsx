import React from 'react';

const Hero = () => {
  return (
  
<div className="flex flex-col justify-center items-start h-full text-left ml-[4rem] mt-16">
  <br /> <br /> <br />
  <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-0">
    Danny Aguilar
  </h2>
  <h2 className="text-3xl sm:text-5xl font-semibold text-gray-400 mt-0 leading-tight">
    Ingeniero de Back-End & Pentester
  </h2>
  <p className="mt-2 text-lg text-accent font-mono">
    Escribo el código que no ves, pero que lo hace todo posible...
  </p>
  <p className="text-gray-400 text-md sm:text-lg max-w-[700px] mt-4">
    Ingeniero de sistemas y gestor de proyectos, apasionado por las nuevas tecnologías,
    uso de contenedores y administración en la nube.
  </p>
</div>

  );
};

export default Hero;
