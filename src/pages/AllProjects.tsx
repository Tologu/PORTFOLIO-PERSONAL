import React from 'react';
import '../styles/AllProjects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Mundial 2026',
      description: 'Mi primer proyecto de desarrollo web para una "Porra" del Mundial 2026. Diseño sencillo y con las tecnologías básicas de frontend. Fue un proyecto divertido para practicar mis habilidades y compartirlas con familiares y amigos.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tologu.github.io/Mundial2026/',
      github: 'https://github.com/Tologu/Mundial2026',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Juego del 31',
      description: 'Implementación digital del clásico juego de cartas "31" utilizando la baraja española. El proyecto consiste en un simulador de turnos que gestiona la lógica de juego, el cálculo dinámico de puntuaciones basado en palos y una inteligencia artificial para oponentes virtuales.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://tologu.github.io/Juego31/',
      github: 'https://github.com/Tologu/Juego31',
      status: 'completed',
    },
    {
      id: 3,
      title: 'E-commerce de Parafarmacia',
      description: 'Proyecto en desarrollo de una tienda online de parafarmacia con catálogo de productos, pagos seguros y gestión moderna del backend.',
      technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Medusa.js', 'Supabase', 'Stripe'],
      status: 'in-progress',
    },
    {
      id: 4,
      title: 'Portfolio Personal',
      description: 'Este mismo portfolio personal desarrollado con React y TypeScript. Diseño responsive con animaciones CSS, formulario de contacto funcional y despliegue automático en GitHub Pages.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://tologu.github.io/PORTFOLIO-PERSONAL/',
      github: 'https://github.com/Tologu/PORTFOLIO-PERSONAL',
      status: 'completed',
    },
  ];

  const statusLabel: Record<string, string> = {
    completed: 'Completado',
    'in-progress': 'En desarrollo',
    planned: 'Planificado',
  };

  return (
    <div className="all-projects-page">
      <div className="all-projects-header">
        <button className="back-btn" onClick={onBack} aria-label="Volver al inicio">
          ← Volver
        </button>
        <h1 className="all-projects-title">Todos mis proyectos</h1>
        <p className="all-projects-subtitle">Una visión completa de todo lo que he construido</p>
      </div>

      <div className="all-projects-grid">
        {projects.map(project => (
          <div key={project.id} className="ap-card">
            {project.status && (
              <span className={`ap-status ap-status--${project.status}`}>
                {statusLabel[project.status]}
              </span>
            )}
            <h3 className="ap-card-title">{project.title}</h3>
            <p className="ap-card-description">{project.description}</p>
            <div className="ap-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="ap-tech-badge">{tech}</span>
              ))}
            </div>
            <div className="ap-links">
              {project.link && (
                <a href={project.link} className="ap-link" target="_blank" rel="noopener noreferrer">
                  Ver página
                </a>
              )}
              {project.github && (
                <a href={project.github} className="ap-link ap-link--secondary" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
