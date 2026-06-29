export interface ProjectMeta {
  id: 1 | 2 | 3 | 4;
  technologies: string[];
  link?: string;
  github?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface FeaturedProjectMeta extends Omit<ProjectMeta, 'id'> {
  id: 1 | 2 | 3;
}

export const projectsData: ProjectMeta[] = [
  {
    id: 1,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
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

export const featuredProjects: FeaturedProjectMeta[] = projectsData.filter(
  (p): p is FeaturedProjectMeta => p.id <= 3,
);
