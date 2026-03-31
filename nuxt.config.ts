// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true, // modo SPA

  css: [
    '~/assets/css/variaveis.css',
    '~/assets/css/normalizar.css',
    '~/assets/css/fontes.css',
    '~/assets/css/index.css'
  ],

  nitro: {
    prerender: {
      crawler: false,
      routes: [
        '/',
        '/construtora',
        '/atendimento',
        '/endereco',
        '/sobre-nos'
      ]
    }
  },

  app: {
    baseURL: '/',

    head: {
      titleTemplate: '%s - Big Cores Tintas',

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logoB.png'
        }
      ]
    }
  }
})