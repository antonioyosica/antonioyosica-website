import { posts } from '#shared/posts'
export default defineEventHandler(async (e) => {
  const slug = getRouterParam(e, 'slug')!
  if (!posts.some(p => p.slug === slug)) throw createError({ statusCode: 404 })
  const b = await readBody<any>(e), name = String(b?.name ?? '').trim().slice(0, 60), text = String(b?.text ?? '').trim().slice(0, 1500)
  if (b?.website) return { id: 'x', name, text, at: Date.now() } // honeypot: finge sucesso
  if (name.length < 2 || text.length < 2) throw createError({ statusCode: 400, statusMessage: 'Escreve o teu nome e o comentário.' })
  if (!allow(`c:${getRequestIP(e, { xForwardedFor: true })}`, 1, 30000)) throw createError({ statusCode: 429, statusMessage: 'Espera um pouco antes de comentar outra vez.' })
  const s = useStorage('data'), k = `blog:${slug}:comments`, c = { id: crypto.randomUUID(), name, text, at: Date.now() }
  await s.setItem(k, [c, ...((await s.getItem<any[]>(k)) || [])].slice(0, 500))
  return c
})
