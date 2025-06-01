import React, { useState } from 'react';
import '../assets/styles/navlink.css';

const NavLinks = () => {
  const links = [
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Skills" },
  ];

  const [activeLink, setActiveLink] = useState("about");

  const handleClick = (id) => {
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="mt-6 flex flex-col items-start ml-[4rem] space-y-6">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => handleClick(link.id)}
          className={`nav-link ${activeLink === link.id ? 'fire-effect' : ''}`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;
