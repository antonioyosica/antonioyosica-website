# António Yosica — Nuxt 4
```
npm i && cp .env.example .env && npm run dev
```
- Conteúdo: `shared/site.ts` (alimenta páginas + concierge de IA). Página nova = nova entrada + rota em `nitro.prerender`.
- Concierge: `server/api/ask.post.ts`. Com `NUXT_ANTHROPIC_KEY` usa Claude; sem chave, usa o encaminhador local. A chave nunca vai para o browser.
- Deploy com servidor Node (o concierge precisa de `/api`): `npm run build`.
