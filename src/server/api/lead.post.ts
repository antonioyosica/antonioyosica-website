import { forms } from '#shared/forms'
export default defineEventHandler(async (e) => {
  const b = await readBody<any>(e), type = String(b?.type)
  if (!forms[type]) throw createError({ statusCode: 400 })
  if (b.website) return { ok: true } // honeypot
  const data: Record<string, string> = {}
  for (const f of forms[type]) { const v = String(b[f.k] ?? '').trim().slice(0, 2000); if (f.req && !v) throw createError({ statusCode: 400, statusMessage: `Falta: ${f.l}` }); data[f.k] = v }
  if (!/^\S+@\S+\.\S+$/.test(data.email)) throw createError({ statusCode: 400, statusMessage: 'E-mail inválido.' })
  if (!allow(`l:${getRequestIP(e, { xForwardedFor: true })}`, 3, 600000)) throw createError({ statusCode: 429, statusMessage: 'Demasiados pedidos. Tenta mais tarde.' })
  const lead = { type, at: new Date().toISOString(), ...data }
  await useStorage('data').setItem(`leads:${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, lead)
  const hook = useRuntimeConfig(e).leadWebhook
  if (hook) $fetch(hook, { method: 'POST', body: lead }).catch(() => {}) // Slack/Make/Zapier: opcional
  return { ok: true }
})
