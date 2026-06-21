import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Projects.css';

interface ProjectsProps {
  onShowAll?: () => void;
}

interface Project {
  id: 1 | 2 | 3;
  technologies: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC<ProjectsProps> = ({ onShowAll }) => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tologu.github.io/Mundial2026/',
      github: 'https://github.com/Tologu/Mundial2026',
    },
    {
      id: 2,
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://tologu.github.io/Juego31/',
      github: 'https://github.com/Tologu/Juego31',
    },
    {
      id: 3,
      technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Medusa.js', 'Supabase', 'Stripe'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card ${project.id === 1 ? 'world-cup-card' : ''} ${project.id === 2 ? 'cards-game-card' : ''} ${project.id === 3 ? 'pharma-card' : ''}`}
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
            <h3 className="project-title">{t.projects.items[project.id].title}</h3>
            <p className="project-description">{t.projects.items[project.id].description}</p>
            {project.id === 2 && (
              <div className="cards-mark" aria-hidden="true">
                <div className="deck-card red-card">
                  <span className="card-rank">7</span>
                  <span className="card-center-suit">♥</span>
                  <span className="card-suit">♥</span>
                </div>
                <div className="deck-card black-card">
                  <span className="card-rank">A</span>
                  <span className="card-center-suit">♠</span>
                  <span className="card-suit">♠</span>
                </div>
              </div>
            )}
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
              {project.link && <a href={project.link} className="project-link">{t.projects.viewPage}</a>}
              {project.github && <a href={project.github} className="project-link">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
      {onShowAll && (
        <div className="projects-more">
          <button className="more-projects-btn" onClick={onShowAll}>
            {t.projects.moreProjects}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
