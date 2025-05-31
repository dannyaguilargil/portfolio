import React from 'react';

const NavLinks = () => {
  return (
    <nav className="mt-6 flex flex-col items-start ml-[4rem] space-y-6 text-gray-400">
      <a
        href="#about"
        className="group relative pl-4 text-lg font-medium hover:text-accent transition-colors duration-300"
      >
        <span className="absolute left-0 top-0 h-full w-1 rounded bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        Sobre mí
      </a>

      <a
        href="#projects"
        className="group relative pl-4 text-lg font-medium hover:text-accent transition-colors duration-300"
      >
        <span className="absolute left-0 top-0 h-full w-1 rounded bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        Proyectos
      </a>
    </nav>
  );
};

export default NavLinks;
