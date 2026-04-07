<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-banner">
        <img
          :src="bannerLoja"
          alt="Linha Industrial Big Cores"
          class="hero-image"
        />

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <span class="hero-tag">Divisão Industrial</span>
          <h1 class="hero-title">
            Performance Extrema<br class="desktop-only" />
            Fábrica<br class="desktop-only" />
          </h1>

          <a
            href="https://wa.me/5541988051330?text=Olá!%20Gostaria%20de%20um%20suporte%20técnico%20para%20minha%20indústria."
            target="_blank"
            rel="noopener noreferrer"
            class="hero-button"
          >
            <img :src="whatsappIcone" alt="WhatsApp" class="whatsapp-icon" />
            Consultoria Técnica Industrial
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="arrow-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="benefits-row benefits-carousel">
        <div class="benefit-card">
          <div class="benefit-icon bg-azul-escuro">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Faturamento Direto</strong>
            <span>Tabelas exclusivas</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-laranja">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-2.731-6.406M14.25 10.5h4.25m-4.25 0V15h4.5m-4.25-4.5h-4.5m4.5-4.5V15" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Logística Ágil</strong>
            <span>Curitiba e RM</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-azul-marinho">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Tecnologia WEG</strong>
            <span>Distribuidores Oficiais</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-preto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Consultoria Técnica</strong>
            <span>Suporte de Campo</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerLoja from "~/assets/images/weg.png";
import whatsappIcone from "~/assets/images/whatsapp.png";
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 20px 0;
  background-color: var(--cor-branco);
  font-family: var(--font-principal);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-banner {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  /* Gradiente usando cores do seu projeto */
  background: linear-gradient(
    to right,
    rgba(22, 22, 22, 0.9) 0%,
    rgba(34, 51, 89, 0.4) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 0 40px;
  max-width: 800px;
  color: var(--cor-branco);
}

.hero-tag {
  display: inline-block;
  background: rgba(255, 107, 0, 0.2);
  color: var(--cor-laranja);
  border: 1px solid var(--cor-laranja);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: var(--f0);
  font-weight: var(--bold);
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.hero-title {
  font-size: var(--f6);
  font-weight: var(--bold);
  line-height: 1.1;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--cor-verde);
  color: var(--cor-branco);
  padding: 16px 32px;
  border-radius: 12px;
  font-size: var(--f2);
  font-weight: var(--bold);
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 8px 20px rgba(0, 187, 45, 0.3);
}

.whatsapp-icon {
  width: 24px;
  height: 24px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.hero-button:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
  box-shadow: 0 12px 25px rgba(0, 187, 45, 0.4);
}

.hero-button:hover .arrow-icon {
  transform: translateX(5px);
}

/* --- BENEFÍCIOS --- */
.benefits-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.benefit-card {
  display: flex;
  align-items: center;

  background-color: var(--cor-cinza-claro);
  border: 1px solid var(--cor-branco-escuro);
  border-radius: 12px;
  height: 80px;
}


.benefit-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  color: var(--cor-branco);
  border-radius: 11px 0 0 11px;
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 26px;
  height: 26px;
}

/* Cores das Variaveis */
.bg-azul-escuro { background-color: var(--cor-verde); }
.bg-laranja { background-color: var(--cor-laranja); }
.bg-azul-marinho { background-color: var(--cor-azul-claro); }
.bg-preto { background-color: var(--cor-vermelho); }

.benefit-text {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
}

.benefit-text strong {
  font-size: var(--f1);
  color: var(--cor-preto);
  font-weight: var(--bold);
}

.benefit-text span {
  font-size: var(--f0);
  color: var(--cor-cinza);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 992px) {
  .benefits-row { grid-template-columns: repeat(2, 1fr); }
  .hero-banner { height: 450px; }
}

@media (max-width: 640px) {
  .desktop-only { display: none; }
  .hero-banner { height: 400px; }
  .hero-content { padding: 0 20px; text-align: center; align-items: center; }
  .hero-title { font-size: var(--f4); }
  .hero-button { width: 100%; justify-content: center; }
  
  .benefits-carousel {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding-bottom: 15px;
    scrollbar-width: none;
  }
  .benefit-card { min-width: 260px; }
}
</style>