import { posts } from '#shared/posts'
export default defineEventHandler(async (e) => {
  const slug = getRouterParam(e, 'slug')!
  if (!posts.some(p => p.slug === slug)) throw createError({ statusCode: 404 })
  const s = useStorage('data')
  return { comments: (await s.getItem<any[]>(`blog:${slug}:comments`)) || [], reactions: (await s.getItem<Record<string, number>>(`blog:${slug}:reactions`)) || {} }
})
