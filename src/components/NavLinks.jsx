import React from 'react';

const NavLinks = () => {
  return (
    <nav className="mt-16 flex flex-col space-y-4 text-gray-400">
      <a href="#about" className="hover:text-white text-lg font-medium">Sobre mí</a>
      <a href="#projects" className="hover:text-white text-lg font-medium">Proyectos</a>
      <a href="#contact" className="hover:text-white text-lg font-medium">Contacto</a>
    </nav>
  );
};

export default NavLinks;
