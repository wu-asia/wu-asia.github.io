import { githubUrl } from '../config/site';

export type ProjectStatus = 'Planned' | 'In Progress' | 'Complete';

export interface Project {
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    name: 'Project One',
    nameZh: '项目一',
    description: 'A concise placeholder for a future technical project.',
    descriptionZh: '未来技术项目的简短占位说明。',
    technologies: ['Python', 'Algorithms'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
  {
    name: 'Project Two',
    nameZh: '项目二',
    description: 'A concise placeholder for a future research-oriented project.',
    descriptionZh: '未来研究型项目的简短占位说明。',
    technologies: ['Machine Learning', 'C++'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
  {
    name: 'Project Three',
    nameZh: '项目三',
    description: 'A concise placeholder for a future software project.',
    descriptionZh: '未来软件项目的简短占位说明。',
    technologies: ['Systems', 'Linux'],
    github: githubUrl,
    featured: true,
    status: 'Planned',
  },
];
