// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false, // modo SPA, ideal para HostGator
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
    baseURL: '/' // mantém assim para subdomínio (importante!)
  }
})
