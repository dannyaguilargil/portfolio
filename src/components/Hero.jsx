import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-white">Danny Aguilar</h1>
      <h2 className="text-3xl sm:text-5xl font-semibold text-gray-400 mt-2">Desarrollador Frontend</h2>
      <p className="text-gray-400 text-md sm:text-lg max-w-[700px] mt-4">
        Construyo experiencias digitales modernas, accesibles y funcionales para la web. Me apasiona el diseño limpio, el código eficiente y transformar ideas en interfaces atractivas y usables.
      </p>
    </div>
  );
};

export default Hero;
