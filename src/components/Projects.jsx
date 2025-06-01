// src/components/Projects.jsx
import React from "react";
import "../assets/styles/projects.css";

const projectsData = [
  {
    title: "Implantación y Despliegue de Plataformas Web",
    description:
         "Durante mi trayectoria profesional he liderado con éxito la implantación de sitios web y plataformas Open Source desde cero. Me encargo de todo el proceso: desde la instalación y parametrización hasta la capacitación de usuarios, asegurando una puesta en marcha eficiente y un funcionamiento óptimo desde el primer día.",
    imageUrl:
      "https://store-images.s-microsoft.com/image/apps.36138.fa0949dd-06e3-46d1-af36-312abdf59b32.2e0486ec-82b8-49cb-8843-2f33ab657891.c8ad2756-0138-4a77-bb4b-a9a15d31d784",
    link: "https://vault.dannyhub.com/",
  },
  {
    title: "d4n70S / Sistema Operativo",
    description:
      "Distro Linux personalizada, optimizada para desarrolladores, con herramientas preinstaladas y un entorno ligero para maximizar productividad.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80",
    link: "https://github.com/dannyaguilargil/d4n7OS",
  },
  {
    title: "Sistema de Administración de Recursos y Aplicaciones / Salud",
    description:
      "Implementé la gestion de identidades y digitalice procesos que se llevaban de forma manual, SARA esta enfocado a la gestion de informes, identidades, cuentas de cobro, citas medicas y la gestion de encuestas. Tambien tiene una version movil nativa",
    imageUrl:
      "https://images.openai.com/thumbnails/19fb3e9bec4ae3ba62c69c3b9eb3b1da.jpeg",
    link: "https://sara.imsalud.gov.co/",
  },
   {
    title: "ASYM / Fundación",
    description:
      "Con las tecnologias Django y React elabore mi propio sitio web para contibuir a una fundacion si animo de lucro y puedan recibir donaciones.",
    imageUrl:
      "https://www.expoknews.com/wp-content/uploads/2018/04/El-impacto-de-las-fundaciones-empresariales-como-se-esta-transformando.jpeg",
    link: "https://github.com/dannyaguilargil/asym",
  },
    {
    title: "WooCommerce inclusive / Tienda",
    description:
      "Elabora una tienda tenologica para personas con dispacidad visual.",
    imageUrl:
      "https://comprarmaquinariahosteleria.com/blog/wp-content/uploads/2023/02/como-montar-tienda-alimentacion-1024x768.jpg",
    link: "https://github.com/dannyaguilargil/VisualAI",
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
