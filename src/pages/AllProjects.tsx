import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/AllProjects.css';

interface Project {
  id: 1 | 2 | 3 | 4;
  technologies: string[];
  link?: string;
  github?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tologu.github.io/Mundial2026/',
      github: 'https://github.com/Tologu/Mundial2026',
      status: 'completed',
    },
    {
      id: 2,
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://tologu.github.io/Juego31/',
      github: 'https://github.com/Tologu/Juego31',
      status: 'completed',
    },
    {
      id: 3,
      technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Medusa.js', 'Supabase', 'Stripe'],
      status: 'in-progress',
    },
    {
      id: 4,
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://tologu.github.io/PORTFOLIO-PERSONAL/',
      github: 'https://github.com/Tologu/PORTFOLIO-PERSONAL',
      status: 'completed',
    },
  ];

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
        {projects.map(project => (
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
