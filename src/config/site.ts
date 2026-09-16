const githubUsername = 'YOUR_USERNAME';

export const site = {
  name: 'YOUR_NAME',
  bio: 'YOUR_BIO',
  githubUsername,
  url: `https://${githubUsername}.github.io`,
  locale: 'en',
  description: 'Personal Website',
  role: 'Computer Science Student / Developer / AI Explorer',
  introduction: 'Exploring algorithms, artificial intelligence, software engineering and the ideas behind computation.',
} as const;

export const githubUrl = `https://github.com/${site.githubUsername}`;

export const exploring = ['Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Python', 'C++', 'Linux'] as const;
export const techStack = ['Python', 'C++', 'TypeScript', 'Astro', 'Git', 'Linux', 'Docker', 'SQL'] as const;
