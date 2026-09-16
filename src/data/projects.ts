import { githubUrl } from '../config/site';

export type ProjectStatus = 'Planned' | 'In Progress' | 'Complete';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'A concise placeholder for a future technical project.',
    technologies: ['Python', 'Algorithms'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
  {
    name: 'Project Two',
    description: 'A concise placeholder for a future research-oriented project.',
    technologies: ['Machine Learning', 'C++'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
  {
    name: 'Project Three',
    description: 'A concise placeholder for a future software project.',
    technologies: ['Systems', 'Linux'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
];
