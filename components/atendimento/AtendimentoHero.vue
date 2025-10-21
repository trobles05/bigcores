<template>
    <section class="hero-section">
      <div class="hero-container">
        <img 
          :src="bannerLoja" 
          alt="Interior da loja de tintas Big Cores"
          class="hero-image"
        />
        <div class="hero-content">
          <h1 class="hero-title">Fale com um Especialista</h1>
          <p class="hero-subtitle">
            Tem dúvidas sobre qual produto usar ou quer solicitar um
            orçamento detalhado? Entre em contato conosco. Será um
            prazer ajudar a sua construtora a economizar com
            qualidade.
          </p>
          <a 
            href="https://wa.me/5541992433140?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank" 
            rel="noopener noreferrer"
            class="hero-button"
          >
            <img :src="whatsappIcone" alt="Ícone do WhatsApp" class="whatsapp-icon" />
            Solicitar Orçamento
          </a>
        </div>
        <div class="bottom-banner">
          <img :src="logisticaIcone" alt="Ícone de logística" class="logistica-icon" />
          <span>Moradores de Curitiba e RM - Frete grátis a partir de R$ 100,00!</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import bannerLoja from '~/assets/images/bannerLoja.png';
  import whatsappIcone from '~/assets/images/whatsappIcone.png';
  import logisticaIcone from '~/assets/images/logisticaIcone.png';
  </script>
  
  <style scoped>
  .hero-section {
    width: 100%;
    padding: 120px 120px 80px 120px;
  }
  
  .hero-container {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 26px;
    overflow: visible;
  }
  
  .hero-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26px;
    object-fit: cover;
    z-index: 0;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 40px;
    color: var(--cor-branco);
    max-width: 60%; 
    box-sizing: border-box;
  }
  
  .hero-title {
    font-size: var(--f5);
    font-weight: var(--bold);
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: var(--f2);
    line-height: 1.4;
    margin-bottom: 30px;
    opacity: 0.95;
  }
  
  .whatsapp-icon {
    width: 28px;
  }
  
  .hero-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: var(--cor-verde);
    color: var(--cor-branco);
    border: none;
    padding: 12px 20px;
    border-radius: 26px;
    font-size: var(--f2);
    font-weight: var(--regular);
    cursor: pointer;
    transition: all 0.3s ease;
    width: fit-content;
  }
  
  .hero-button:hover {
    background-color: #1da851;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px var(--cor-verde-escuro);
  }
  
  .bottom-banner {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    border-radius: 26px;
    background-color: var(--cor-azul-escuro);
    color: var(--cor-branco);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 2;
    box-sizing: border-box;
  }
  
  .logistica-icon {
    width: 28px;
    height: auto;
  }
  
  .bottom-banner span {
    font-size: var(--f1);
    font-weight: var(--regular);
  }

  </style>