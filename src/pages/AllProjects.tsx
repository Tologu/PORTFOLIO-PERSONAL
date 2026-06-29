import React from 'react';
import { projectsData } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/AllProjects.css';

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="all-projects-page">
      <div className="all-projects-header">
        <button className="back-btn" onClick={onBack} aria-label={t.allProjects.backAria}>
          ← {t.allProjects.back}
        </button>
        <h1 className="all-projects-title">{t.allProjects.title}</h1>
        <p className="all-projects-subtitle">{t.allProjects.subtitle}</p>
      </div>

      <div className="all-projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="ap-card">
            {project.status && (
              <span className={`ap-status ap-status--${project.status}`}>
                {t.allProjects.status[project.status]}
              </span>
            )}
            <h3 className="ap-card-title">{t.allProjects.items[project.id].title}</h3>
            <p className="ap-card-description">{t.allProjects.items[project.id].description}</p>
            <div className="ap-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="ap-tech-badge">{tech}</span>
              ))}
            </div>
            <div className="ap-links">
              {project.link && (
                <a href={project.link} className="ap-link" target="_blank" rel="noopener noreferrer">
                  {t.allProjects.viewPage}
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
