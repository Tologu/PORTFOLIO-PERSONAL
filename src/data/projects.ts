export type ProjectId = 1 | 2 | 3 | 4 | 5;

export interface ProjectMeta {
  id: ProjectId;
  slug: string;
  poster: string;
  video: string;
  posterFit?: 'cover' | 'contain';
  previewDecoration?: 'pharma';
  technologies: string[];
  link?: string;
  github?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
}

export const projectsData: ProjectMeta[] = [
  {
    id: 5,
    slug: 'mazo-y-gol',
    poster: 'media/mazo-y-gol/poster.png',
    video: 'media/mazo-y-gol/preview.mp4',
    posterFit: 'cover',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    link: 'https://mazo-y-gol.vercel.app',
    github: 'https://github.com/Tologu/Mazo-y-Gol',
    status: 'in-progress',
    featured: true,
  },
  {
    id: 1,
    slug: 'mundial-2026',
    poster: 'media/mundial-2026/poster.png',
    video: 'media/mundial-2026/preview.mp4',
    posterFit: 'cover',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    link: 'https://tologu.github.io/Mundial2026/',
    github: 'https://github.com/Tologu/Mundial2026',
    status: 'completed',
    featured: true,
  },
  {
    id: 2,
    slug: 'juego-31',
    poster: 'media/juego-31/poster.png',
    video: 'media/juego-31/preview.mp4',
    posterFit: 'cover',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: 'https://tologu.github.io/Juego31/',
    github: 'https://github.com/Tologu/Juego31',
    status: 'completed',
    featured: true,
  },
  {
    id: 3,
    slug: 'parafarmacia',
    poster: 'media/parafarmacia/poster.jpg',
    video: 'media/parafarmacia/preview.mp4',
    previewDecoration: 'pharma',
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Medusa.js', 'Supabase', 'Stripe'],
    status: 'in-progress',
    featured: true,
  },
  {
    id: 4,
    slug: 'portfolio',
    poster: 'media/portfolio/poster.jpg',
    video: 'media/portfolio/preview.mp4',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: 'https://tologu.github.io/PORTFOLIO-PERSONAL/',
    github: 'https://github.com/Tologu/PORTFOLIO-PERSONAL',
    status: 'completed',
  },
];

export const featuredProjects = projectsData.filter((p) => p.featured);
