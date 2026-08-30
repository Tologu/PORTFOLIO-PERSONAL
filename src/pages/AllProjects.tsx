import React from 'react';
import { projectsData } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectCard from '../components/ProjectCard';
import '../styles/AllProjects.css';

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="all-projects-page">
      <div className="all-projects-header">
        <button type="button" className="btn btn-outline back-btn" onClick={onBack} aria-label={t.allProjects.backAria}>
          ← {t.allProjects.back}
        </button>
        <h1 className="section-title">{t.allProjects.title}</h1>
        <p className="all-projects-subtitle">{t.allProjects.subtitle}</p>
      </div>

      <div className="all-projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            title={t.projects.items[project.id].title}
            description={t.projects.items[project.id].description}
            viewPage={t.allProjects.viewPage}
            mediaPending={t.projects.mediaPending}
            statusLabel={project.status ? t.allProjects.status[project.status] : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
