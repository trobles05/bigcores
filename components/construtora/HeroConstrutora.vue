<template>
  <section class="hero-section">
    <div class="hero-container">
      <img 
        :src="lojaFundo" 
        alt="Fundo da loja de tintas Big Cores"
        class="hero-image"
      />
      <div class="hero-content">
        <h1 class="hero-title">Simplifique a Compra de Tintas para Grandes Projetos.</h1>
        <p class="hero-subtitle">
          Desfrute ainda mais economicamente com a melhor qualidade. Somos líderes no mercado. 
          Através de nosso parceiro oficial com a Ascothcal, garantimos a qualidade superior do 
          Título Coral com benefício de faturamento direto na fábrica. A melhor tinta, pelo melhor preço.
        </p>
        <a 
          href="https://wa.me/5541992433140?text=Ol%C3%A1!%20Tenho%20interesse%20em%20comprar%20tintas."
          target="_blank" 
          rel="noopener noreferrer"
          class="hero-button"
        >
          <img :src="whatsappIcon" alt="Ícone do WhatsApp" class="whatsapp-icon" />
          Quero meu desconto
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import lojaFundo from '~/assets/images/lojaFundo.png';
import whatsappIcon from '~/assets/images/whatsappIcone.png';
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 120px 120px 60px 120px;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.hero-image {
  position: absolute;
  width: 100%;
  z-index: 1;
  border-radius: 26px;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 60px 40px 40px 40px;
  color: var(--cor-branco);
  max-width: 70%;
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
  max-width: 600px;
  opacity: 0.95;
}
.whatsapp-icon{
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

.whatsapp-icon {
  font-size: 1.2rem;
}

/* Responsivo */
@media (max-width: 768px) {
  .hero-section {
    padding: 0 20px;
  }

  .hero-container {
    height: 300px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-content {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 0 16px;
  }

  .hero-container {
    height: 250px;
  }

  .hero-title {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  .hero-button {
    padding: 12px 20px;
    font-size: 0.95rem;
  }
}
</style>