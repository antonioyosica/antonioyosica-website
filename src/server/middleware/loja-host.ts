// Produção: loja.antonioyosica.com serve a loja, antonioyosica.com serve o resto. Só actua se os dois domínios estiverem configurados.
export default defineEventHandler((e) => {
  const c = useRuntimeConfig(e).public
  if (!c.lojaHost || !c.mainHost) return
  const host = getRequestHost(e), url = getRequestURL(e), p = url.pathname
  if (/^\/(api|_nuxt|__nuxt|_ipx|brand|favicon|robots)/.test(p)) return
  const store = /^\/(produto|ler|carrinho|checkout)(\/|$)/.test(p) || p === '/loja' || p.startsWith('/loja/')
  if (host === c.lojaHost && !store && p !== '/') return sendRedirect(e, `https://${c.mainHost}${p}${url.search}`, 301)
  if (host !== c.lojaHost && store) return sendRedirect(e, `https://${c.lojaHost}${p.replace(/^\/loja/, '') || '/'}${url.search}`, 301)
})
