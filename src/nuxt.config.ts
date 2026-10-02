export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  css: ['~/assets/css/main.css', '~/assets/css/pages.css', '~/assets/css/loja.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'pt-AO' },
      titleTemplate: (t) => (t ? `${t} — António Yosica` : 'António Yosica — Lembrado. Encontrado. Escolhido.'),
      meta: [{ name: 'theme-color', content: '#024A35' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }],
      link: [
        { rel: 'icon', href: '/brand/y-verde.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mynerve&family=Space+Grotesk:wght@400;500;700&display=swap' }
      ]
    }
  },
  runtimeConfig: { anthropicKey: '', leadWebhook: '', public: { contactEmail: '', bookingUrl: '', lojaHost: '', mainHost: '' } },
  nitro: { storage: { data: { driver: 'fs', base: './.data' } }, prerender: { routes: ['/', '/lee', '/ideias', '/experiencias', '/sobre', '/trabalhe-comigo', '/contacto', '/agendar', '/convidar', '/galeria', '/loja', '/experiencias/lee-cilab', '/experiencias/lee-meet-greet', '/negocios/vaawel'] } }
})
