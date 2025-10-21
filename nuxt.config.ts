// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false, // Desabilita SSR, gera SPA
  css: [
    '~/assets/css/variaveis.css',
    '~/assets/css/normalizar.css',
    '~/assets/css/fontes.css',
    '~/assets/css/index.css'
  ],
  nitro: {
    prerender: {
      crawler: false, // evita erros do crawler
      routes: [
        '/', 
        '/atendimento', 
        '/endereco', 
        '/sobre-nos', 
        '/construtora', 
        '/quem-somos' // inclua todas as suas páginas
      ]
    }
  },
  app: {
    baseURL: '/' // importante para hospedagem em subpastas, se houver ajuste aqui
  }
})
