import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogPosts = defineCollection({
  loader: glob({
    pattern: "**/*.{md, mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blogPosts };
