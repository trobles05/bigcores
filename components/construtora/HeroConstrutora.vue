<template>
  <section class="hero-section">
    <div class="hero-container">
      <img
        :src="lojaFundo"
        alt="Fundo da loja de tintas Big Cores"
        class="hero-image"
      />
      <div class="hero-content">
        <h1 class="hero-title">
          Simplifique a Compra de Tintas para Grandes Projetos.
        </h1>
        <p class="hero-subtitle">
          Desfrute ainda mais economicamente com a melhor qualidade. Somos
          líderes no mercado. Através de nosso parceiro oficial com a Ascothcal,
          garantimos a qualidade superior do Título Coral com benefício de
          faturamento direto na fábrica. A melhor tinta, pelo melhor preço.
        </p>
        <a
          href="https://wa.me/554192546682?text=Ol%C3%A1!%20Tenho%20interesse%20em%20comprar%20tintas."
          target="_blank"
          rel="noopener noreferrer"
          class="hero-button"
        >
          <img
            :src="whatsappIcon"
            alt="Ícone do WhatsApp"
            class="whatsapp-icon"
          />
          Quero meu desconto
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import lojaFundo from "~/assets/images/lojaFundo.png";
import whatsappIcon from "~/assets/images/whatsappIcone.png";
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 4.16vw 8.33vw;
  margin-top: 60px;
}

.hero-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1200 / 600;
  border-radius: 26px;
  overflow: visible;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 26px;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
  color: var(--cor-branco);
  max-width: 70%;
  box-sizing: border-box;
}

.hero-title {
  font-size: clamp(2rem, var(--f5), 4vw);
  font-weight: var(--bold);
  margin-bottom: 28px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1rem, var(--f3), 1.5vw);
  line-height: 1.6;
  margin-bottom: 36px;
  max-width: 800px;
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
  font-weight: var(--bold);
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
@media (max-width: 1000px) {
  .hero-section {
    padding: 4rem 1.5rem;
    margin-top: 30px;
  }

  .hero-container {
    aspect-ratio: 4 / 3;
    overflow: hidden;
  }

  .hero-image {
    border-radius: 20px;
  }

  .hero-content {
    max-width: 100%;
    align-items: center;
    text-align: center;
    padding: 8% 5%;
  }

  .hero-title {
    font-size: var(--f2);
    line-height: 1.3;
    margin-bottom: 6px;
  }

  .hero-subtitle {
    font-size: var(--f1);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .hero-button {
    padding: 8px 12px;
    font-size: var(--f1);
    justify-content: center;
  }
  .whatsapp-icon {
    width: 18px;
  }
}

/* Desabilitar hovers em dispositivos móveis */
@media (hover: none) and (pointer: coarse) {
  .hero-button:hover {
    background-color: var(--cor-verde);
    transform: none;
    box-shadow: none;
  }
}
</style>
