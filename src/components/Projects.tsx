import React from 'react';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Mundial 2026',
      description: 'Mi primer proyecto de desarrollo web para una "Porra" del Mundial 2026. Diseño sencillo y con las tecnologías básicas de frontend. Fue un proyecto divertido para practicar mis habilidades y compartirlas con familiares y amigos.  ',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tologu.github.io/Mundial2026/',
      github: 'https://github.com/Tologu/Mundial2026'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción de tu segundo proyecto. Destaca los puntos clave y las características principales.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'E-commerce de Parafarmacia',
      description: 'Proyecto en desarrollo de una tienda online de parafarmacia con catálogo de productos, pagos seguros y gestión moderna del backend.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Medusa.js', 'Supabase', 'Stripe']
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card ${project.id === 1 ? 'world-cup-card' : ''} ${project.id === 3 ? 'pharma-card' : ''}`}
          >
            {project.id === 1 && (
              <div className="world-cup-orbit" aria-hidden="true">
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/26bd.svg"
                  alt=""
                  className="world-cup-ball ball-one"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/26bd.svg"
                  alt=""
                  className="world-cup-ball ball-two"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.id === 3 && (
              <div className="pharma-loader" aria-hidden="true">
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f48a.svg"
                  alt=""
                  className="pharma-pill"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && <a href={project.link} className="project-link">Ver página</a>}
              {project.github && <a href={project.github} className="project-link">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
