<template>
  <section class="hero-section">
    <div class="container">
      
      <div class="hero-banner">
        <img
          :src="lojaFundo"
          alt="Fundo da loja de tintas Big Cores"
          class="hero-image"
        />
        <div class="hero-overlay"></div> 
        
        <div class="hero-content">
          <h1 class="hero-title">
            Simplifique a Compra<br />
            de Tintas para Grandes<br />
            Projetos
          </h1>
          
          <a
            href="https://wa.me/554192546682?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gr%C3%A1tis."
            target="_blank"
            rel="noopener noreferrer"
            class="hero-button"
          >
            Solicite seu Orçamento Grátis
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="arrow-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      <div class="benefits-row">
        
        <div class="benefit-card">
          <div class="benefit-icon bg-verde-teal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Valor diferenciado</strong>
            <span>do mercado</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-verde-limao">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-2.731-6.406M14.25 10.5h4.25m-4.25 0V15h4.5m-4.25-4.5h-4.5m4.5-4.5V15" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Logística</strong>
            <span>dedicada para sua necessidade</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-laranja">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Qualidade Coral</strong>
            <span>encontra somente aqui</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-vermelho">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Compra mínima</strong>
            <span>de R$ 5mil para aproveitar</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import lojaFundo from "~/assets/images/lojaFundo.png";
</script>

<style scoped>
.hero-section { 
  margin-top: 4rem;
  width: 100%;
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-banner {
  position: relative;
  width: 100%;
  height: 440px;
  border-radius: 20px;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(34, 51, 89, 0.95) 0%, rgba(34, 51, 89, 0.2) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 6%;
  max-width: 800px;
}

.hero-title {
  color: var(--cor-branco);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 32px;
  letter-spacing: -1px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--cor-laranja);
  color: var(--cor-branco);
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.hero-button:hover {
  background-color: #e66000;
  transform: translateY(-2px);
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.benefits-row {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.benefit-card {
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  height: 64px;
}

.benefit-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 100%;
  color: var(--cor-branco);
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 24px;
  height: 24px;
}

.bg-verde-teal { background-color: #2ba883; }
.bg-verde-limao { background-color: #75bc3d; }
.bg-laranja { background-color: var(--cor-laranja); }
.bg-vermelho { background-color: var(--cor-vermelho); }

.benefit-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
  color: var(--cor-azul-escuro);
  line-height: 1.3;
}

.benefit-text strong {
  font-size: 13px;
  font-weight: 700;
}

.benefit-text span {
  font-size: 12px;
  color: var(--cor-cinza-escuro);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .benefits-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-banner {
    height: 380px;
  }
  .hero-title {
    font-size: 1.8rem;
    text-align: center;
  }
  .hero-content {
    align-items: center;
    padding: 0 5%;
  }
  .hero-button {
    font-size: 16px;
    padding: 14px 24px;
  }
  .benefits-row {
    grid-template-columns: 1fr;
  }
}
</style>