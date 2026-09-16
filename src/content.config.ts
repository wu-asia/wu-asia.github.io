import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    description: z.string(),
    descriptionZh: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    category: z.string(),
    categoryZh: z.string(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Algorithms', 'C++', 'Python', 'Linux', 'AI', 'Math', 'Git']),
    categoryZh: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog, notes };
