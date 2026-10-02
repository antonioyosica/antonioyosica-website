import { products } from '#shared/loja'
const bad = (m: string) => createError({ statusCode: 400, statusMessage: m })
export default defineEventHandler(async (e) => {
  const b = await readBody<any>(e), c = b?.cliente || {}
  if (c.website) return { id: 'DEMO-0', total: 0 } // honeypot
  if (!allow(`o:${getRequestIP(e, { xForwardedFor: true })}`, 5, 600000)) throw createError({ statusCode: 429, statusMessage: 'Demasiados pedidos. Tenta mais tarde.' })
  const nome = String(c.nome || '').trim().slice(0, 100), email = String(c.email || '').trim().slice(0, 150)
  if (nome.length < 2 || !/^\S+@\S+\.\S+$/.test(email)) throw bad('Nome e e-mail válidos são obrigatórios.')
  if (!Array.isArray(b.items) || !b.items.length || b.items.length > 20) throw bad('Carrinho vazio.')
  let total = 0
  const lines = b.items.map((l: any) => { // o preço vem SEMPRE do catálogo do servidor, nunca do browser
    const p = products.find(x => x.slug === l?.id); if (!p || p.read) throw bad('Artigo inválido.')
    const v = p.variants?.find(x => x.id === l.v); if (p.variants && !v) throw bad('Variante inválida.')
    const q = Math.min(10, Math.max(1, Math.floor(+l.q || 1))), unit = v?.price ?? p.price; total += unit * q
    return { id: p.slug, v: v?.id || '', q, unit }
  })
  const id = 'DEMO-' + Date.now().toString(36).toUpperCase()
  await useStorage('data').setItem(`loja:pedidos:${id}`, { id, demo: true, status: 'novo', at: new Date().toISOString(), nome, email, telefone: String(c.telefone || '').slice(0, 40), local: String(c.local || '').slice(0, 200), lines, total })
  return { id, total }
})
