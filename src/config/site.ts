const githubUsername = 'wu-asia';

export const site = {
  name: 'WU YAZHOU',
  bio: 'Computer science student interested in algorithms, artificial intelligence, machine learning, and software development.',
  githubUsername,
  url: `https://${githubUsername}.github.io`,
  locale: 'en',
  description: 'Personal website of WU YAZHOU — computer science, algorithms, artificial intelligence, and software development.',
  role: 'Computer Science Student / Developer / AI Explorer',
  introduction: 'Exploring algorithms, artificial intelligence, software engineering and the ideas behind computation.',
} as const;

export const githubUrl = `https://github.com/${site.githubUsername}`;

export const exploring = ['Algorithms', 'Artificial Intelligence', 'Machine Learning', 'LaTeX', 'Java', 'Linux'] as const;
export const techStack = ['Python', 'C++', 'TypeScript', 'Astro', 'Git', 'Linux', 'Docker', 'SQL'] as const;
