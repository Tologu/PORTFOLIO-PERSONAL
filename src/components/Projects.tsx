import React from 'react';
import { featuredProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

interface ProjectsProps {
  onShowAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onShowAll }) => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              title={t.projects.items[project.id].title}
              description={t.projects.items[project.id].description}
              viewPage={t.projects.viewPage}
              mediaPending={t.projects.mediaPending}
              statusLabel={project.status ? t.allProjects.status[project.status] : undefined}
            />
          ))}
        </div>
        {onShowAll && (
          <div className="projects-more">
            <button type="button" className="btn btn-outline" onClick={onShowAll}>
              {t.projects.moreProjects}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
