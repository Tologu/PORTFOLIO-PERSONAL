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
      description: 'Proyecto de "Porra" de desarrollo web para el Mundial 2026.',
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
      title: 'Proyecto 3',
      description: 'Descripción de tu tercer proyecto. Incluye tecnologías, aprendizajes y resultados.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && <a href={project.link} className="project-link">Ver live</a>}
              {project.github && <a href={project.github} className="project-link">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
