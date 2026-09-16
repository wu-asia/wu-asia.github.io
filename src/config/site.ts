const githubUsername = 'wu-asia';

export const site = {
  name: 'WU YAZHOU',
  bio: 'Computer science student interested in algorithms, artificial intelligence, machine learning, and software development.',
  bioZh: '对算法、人工智能、机器学习和软件开发感兴趣的计算机科学学生。',
  githubUsername,
  url: `https://${githubUsername}.github.io`,
  locale: 'en',
  description: 'Personal website of WU YAZHOU — computer science, algorithms, artificial intelligence, and software development.',
  descriptionZh: 'WU YAZHOU 的个人网站，记录计算机科学、算法、人工智能与软件开发。',
  role: 'Computer Science Student / Developer / AI Explorer',
  roleZh: '计算机科学学生 / 开发者 / AI 探索者',
  introduction: 'Exploring algorithms, artificial intelligence, software engineering and the ideas behind computation.',
  introductionZh: '探索算法、人工智能、软件工程，以及计算背后的思想。',
} as const;

export const githubUrl = `https://github.com/${site.githubUsername}`;

export const exploring = [
  { en: 'Algorithms', zh: '算法' },
  { en: 'Artificial Intelligence', zh: '人工智能' },
  { en: 'Machine Learning', zh: '机器学习' },
  { en: 'LaTeX', zh: 'LaTeX 排版' },
  { en: 'Java', zh: 'Java' },
  { en: 'Linux', zh: 'Linux' },
] as const;
export const techStack = ['Python', 'C++', 'TypeScript', 'Astro', 'Git', 'Linux', 'Docker', 'SQL'] as const;
