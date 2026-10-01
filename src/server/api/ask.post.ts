import { pages, routes, stages } from '#shared/site'

type Reply = { stage: (typeof stages)[number] | null; answer: string; links: { to: string; label: string }[] }
const L = (to: string, label: string) => ({ to, label })

function local(q: string): Reply {
  const t = q.toLowerCase()
  if (/evento|palestra|conferência|convid/.test(t)) return { stage: 'escolhido', answer: 'Para eventos, o caminho é directo: diz-me o tema e o público.', links: [L('/trabalhe-comigo', 'Eventos'), L('/contacto', 'Falar com o António')] }
  if (/empresa|organiza|equipa|marca da/.test(t)) return { stage: 'encontrado', answer: 'Uma organização visível não é a que fala mais, é a que é encontrada pelas pessoas certas.', links: [L('/trabalhe-comigo', 'Empresas'), L('/lee', 'O Método LEE')] }
  if (/lee|método|metodo/.test(t)) return { stage: null, answer: 'LEE: Lembrado, Encontrado, Escolhido. Quem não é lembrado não é encontrado; quem não é encontrado dificilmente é escolhido.', links: [L('/lee', 'Ver o método'), L('/sobre', 'De onde vem')] }
  if (/escolh|decis|contrat|promo|oportunidade|entrevista/.test(t)) return { stage: 'escolhido', answer: 'O problema parece estar na decisão: entre alternativas, porque haveriam de te escolher?', links: [L('/lee', 'A batalha pela decisão'), L('/trabalhe-comigo', 'Trabalhar comigo')] }
  if (/encontr|google|seo|pesquis|aparec/.test(t)) return { stage: 'encontrado', answer: 'Parece uma questão de descoberta: as pessoas certas não te encontram quando te procuram.', links: [L('/lee', 'A batalha pela descoberta'), L('/ideias', 'Ideias sobre visibilidade')] }
  return { stage: 'lembrado', answer: 'Provavelmente começa na memória: se ninguém se lembra de ti, não há nada para encontrar.', links: [L('/lee', 'A batalha pela memória'), L('/sobre', 'Sobre o António')] }
}

const system = `És o concierge do site de António Yosica (estrategista, engenheiro de software, criador do Método LEE: Lembrado, Encontrado, Escolhido). Português de Angola, directo, humano, sem jargão corporativo.
Diagnostica em que fase a pessoa está bloqueada ("lembrado", "encontrado" ou "escolhido", ou null se não se aplica) e responde em 2 frases no máximo.
Usa SÓ este conteúdo, nunca inventes serviços, preços, datas ou resultados: ${JSON.stringify(pages)}.
Responde APENAS JSON: {"stage":...,"answer":"...","links":[{"to":"/rota","label":"..."}]} com 1 a 3 links, rotas permitidas: ${routes.join(', ')}.`

export default defineEventHandler(async (event): Promise<Reply> => {
  const body = await readBody<{ q?: string }>(event)
  const q = String(body?.q ?? '').trim().slice(0, 400)
  if (!q) throw createError({ statusCode: 400, statusMessage: 'Escreve o que precisas.' })
  const key = useRuntimeConfig(event).anthropicKey
  if (!key) return local(q)
  try {
    const r: any = await $fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', timeout: 15000,
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: { model: 'claude-sonnet-5-5', max_tokens: 400, system, messages: [{ role: 'user', content: q }] }
    })
    const j = JSON.parse(String(r.content?.[0]?.text ?? '').replace(/```json|```/g, '').trim())
    const links = (j.links ?? []).filter((l: any) => routes.includes(l?.to)).slice(0, 3)
    return { stage: stages.includes(j.stage) ? j.stage : null, answer: String(j.answer).slice(0, 500), links: links.length ? links : [L('/lee', 'O Método LEE')] }
  } catch { return local(q) }
})
