import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-4xl font-bold text-white mb-10">Danny Aguilar</h1>
        <nav className="flex flex-col space-y-6 text-gray-400 text-xl">
          <a href="#about" className="hover:text-white transition">Sobre mí</a>
          <a href="#projects" className="hover:text-white transition">Proyectos</a>
          <a href="#contact" className="hover:text-white transition">Contacto</a>
        </nav>
      </div>

      <div className="flex space-x-8 mt-10 text-gray-400 justify-start">
        <a href="https://github.com/dannyaguilargil" target="_blank" rel="noreferrer" className="hover:text-white">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/dannyaguilargil" target="_blank" rel="noreferrer" className="hover:text-white">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:danny@example.com" className="hover:text-white">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default HeroSidebar;
