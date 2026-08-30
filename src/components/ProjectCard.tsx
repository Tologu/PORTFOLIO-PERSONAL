import React, { useRef, useState } from 'react';
import type { ProjectMeta } from '../data/projects';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: ProjectMeta;
  title: string;
  description: string;
  viewPage: string;
  mediaPending: string;
  statusLabel?: string;
}

const PHARMA_PILL =
  'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f48a.svg';

const canHoverVideo = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const mediaUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  title,
  description,
  viewPage,
  mediaPending,
  statusLabel,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterOk, setPosterOk] = useState(project.previewDecoration !== 'pharma');
  const [isPlaying, setIsPlaying] = useState(false);

  const posterSrc = mediaUrl(project.poster);
  const videoSrc = mediaUrl(project.video);
  const isPharma = project.previewDecoration === 'pharma';

  const playPreview = async () => {
    if (!canHoverVideo() || isPharma) return;

    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        video.load();
      }
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <article
      className={`project-card ${isPlaying ? 'is-playing' : ''} ${isPharma ? 'pharma-card' : ''}`}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      <div className="project-preview">
        {isPharma ? (
          <div className="project-preview-pharma" aria-hidden="true">
            <div className="pharma-loader">
              <img src={PHARMA_PILL} alt="" className="pharma-pill" loading="lazy" decoding="async" />
            </div>
          </div>
        ) : posterOk ? (
          <img
            src={posterSrc}
            alt=""
            className={`project-preview-image project-preview-image--${project.posterFit ?? 'contain'}`}
            onError={() => setPosterOk(false)}
          />
        ) : (
          <div className="project-preview-fallback" aria-hidden="true">
            <span>{mediaPending}</span>
          </div>
        )}
        {!isPharma && (
          <video
            ref={videoRef}
            className="project-preview-video"
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterOk ? posterSrc : undefined}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="project-body">
        {project.status && statusLabel && (
          <span className={`ap-status ap-status--${project.status}`}>{statusLabel}</span>
        )}
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              {viewPage}
            </a>
          )}
          {project.github && (
            <a href={project.github} className="project-link is-ghost" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
