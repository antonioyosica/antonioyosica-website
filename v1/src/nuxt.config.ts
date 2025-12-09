// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vite-pwa/nuxt',
  ],

  app: {
    head: {
      title: 'António Yosica | SEO Specialist & Software Engineer',
      htmlAttrs: {
        lang: 'pt',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'António Yosica - SEO Specialist, Software Engineer e criador do Método LEE. Transforme a sua presença digital com estratégias comprovadas.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0A0A0A' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'António Yosica',
      short_name: 'AY',
      description: 'SEO Specialist, Software Engineer e criador do Método LEE',
      theme_color: '#C9A34E',
      background_color: '#FFFFFF',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] },
    ],
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
  },

  compatibilityDate: '2024-11-01',
})
