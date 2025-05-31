import React from "react";

const projectsData = [
  {
    title: "Implantación y Despliegue de Plataformas Web",
    description:
      "A lo largo de mi carrera he liderado la implantacion de sitios web y plataformas funcionales desde cero, me encargo de todo el proceso desde la configuracion del servidor hasta el despliegue en produccion, utilizo las herramientas modernas para automatizar despliegues y adaptar cada solucion a las necesidades especificas del cliente o de la organizacion. ",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/portfolio",
  },
  {
    title: "App de Tareas",
    description:
      "Aplicación para gestionar tareas diarias con una interfaz limpia y funcional, usando React y localStorage.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80",
    link: "https://github.com/d4n7.dev/task-app",
  },
  {
    title: "Blog de Tecnología",
    description:
      "Blog personal donde comparto tutoriales, análisis y noticias sobre desarrollo frontend y backend.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    link: "https://dannyhub.com/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="">
      <br /> <br /> 
     
      <ul className="space-y-8">
        {projectsData.map(({ title, description, imageUrl, link }) => (
          <li key={title}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-6 group"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-24 h-24 object-cover rounded-md flex-shrink-0 group-hover:brightness-90 transition"
              />
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
