import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#0f172a] border-r border-gray-700 flex flex-col justify-between py-10 px-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-10">Danny Aguilar</h1>
        <nav className="space-y-4 text-gray-400">
          <a href="#about" className="hover:text-white block">Sobre mí</a>
          <a href="#projects" className="hover:text-white block">Proyectos</a>
          <a href="#contact" className="hover:text-white block">Contacto</a>
        </nav>
      </div>

      <div className="flex space-x-4 text-gray-400 mt-10">
        <a href="https://github.com/dannyaguilargil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/dannyaguilargil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:danny@example.com" className="hover:text-white">
          <FaEnvelope size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
