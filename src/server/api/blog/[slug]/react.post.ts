import { posts } from '#shared/posts'
const OK = ['Raiva', 'Admiração', 'Curiosidade', 'Inspiração']
export default defineEventHandler(async (e) => {
  const slug = getRouterParam(e, 'slug')!
  if (!posts.some(p => p.slug === slug)) throw createError({ statusCode: 404 })
  const b = await readBody<any>(e)
  if (!OK.includes(b?.r)) throw createError({ statusCode: 400 })
  if (!allow(`r:${getRequestIP(e, { xForwardedFor: true })}`, 30, 60000)) throw createError({ statusCode: 429 })
  const s = useStorage('data'), k = `blog:${slug}:reactions`, r = (await s.getItem<Record<string, number>>(k)) || {}
  r[b.r] = Math.max(0, (r[b.r] || 0) + (b.d === -1 ? -1 : 1)); await s.setItem(k, r)
  return r
})
