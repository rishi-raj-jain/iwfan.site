import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    emoji: z.string(),
    description: z.string().optional().nullable(),
    original: z.string().optional().nullable(),
    created_at: z.date({ coerce: true }),
  }),
})

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({}),
})

export const collections = {
  posts: postsCollection,
  docs: docsCollection,
}
