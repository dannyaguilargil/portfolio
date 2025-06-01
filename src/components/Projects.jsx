// src/components/Projects.jsx
import React from "react";
import "../assets/styles/projects.css";

const projectsData = [
  {
    title: "Implantación y Despliegue de Plataformas Web",
    description:
         "A lo largo de mi carrera he liderado la implantación de sitios web y plataformas funcionales desde cero, garantizando una experiencia de usuario óptima, alta disponibilidad y escalabilidad. Mi enfoque incluye la planificación estratégica, selección tecnológica y coordinación de equipos multidisciplinarios para asegurar el éxito del proyecto.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/portfolio",
  },
  {
    title: "d4n70S / Sistema Operativo",
    description:
      "Distro Linux personalizada, optimizada para desarrolladores, con herramientas preinstaladas y un entorno ligero para maximizar productividad.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80",
    link: "https://github.com/d4n7.dev/task-app",
  },
  {
    title: "Sistema de Administracion de Recursos y Aplicaciones / Salud",
    description:
      "Implemente la gestion de identidades y digitalice procesos que se llevaban de forma manual, SARA esta enfocado a la gestion de informes, identidades, cuentas de cobro, citas medicas y la gestion de encuestas. Tambien tiene una version movil nativa",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/blog",
  },
   {
    title: "ASYM / Fundacion",
    description:
      "Con las tecnologias Django y React elabore mi propio sitio web para contibuir a una fundacion si animo de lucro y puedan recibir donaciones.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/blog",
  },
    {
    title: "WooCommerce inclusive / Tienda",
    description:
      "Elabora una tienda tenologica para personas con dispacidad visual.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <br /> 
      <ul className="projects-list">
        {projectsData.map(({ title, description, imageUrl, link }) => (
          <li key={title}>
            <a href={link} target="_blank" rel="noreferrer" className="project-item">
              <img src={imageUrl} alt={title} className="project-image" />
              <div>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
