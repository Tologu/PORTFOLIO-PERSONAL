import React from 'react';
import { featuredProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Projects.css';

interface ProjectsProps {
  onShowAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onShowAll }) => {
  const { t } = useLanguage();
  const projects = featuredProjects;

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
