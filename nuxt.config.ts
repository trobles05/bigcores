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
    baseURL: '/', // mantém assim para subdomínio (importante!)
    
    // --- CÓDIGO DO FAVICON ADICIONADO AQUI ---
    head: {
      link: [
        // Certifique-se de que o nome do arquivo "logo-big-cores.svg" 
        // está correto e que ele está na pasta "public/"
        { rel: 'icon', type: 'image/svg+xml', href: '/Blogo.svg' }
      ]
    }
    // --- FIM DA ADIÇÃO ---
  }
})