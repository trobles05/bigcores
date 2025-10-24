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
          Tem dúvidas sobre qual produto usar ou quer solicitar um orçamento
          detalhado? Entre em contato conosco. Será um prazer ajudar a sua
          construtora a economizar com qualidade.
        </p>
        <a
          href="https://wa.me/5541992433140?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista."
          target="_blank"
          rel="noopener noreferrer"
          class="hero-button"
        >
          <img
            :src="whatsappIcone"
            alt="Ícone do WhatsApp"
            class="whatsapp-icon"
          />
          Solicitar Orçamento
        </a>
      </div>

      <div class="bottom-banner">
        <img
          :src="logisticaIcone"
          alt="Ícone de logística"
          class="logistica-icon"
        />
        <span
          >Moradores de Curitiba e RM - Frete grátis a partir de R$
          100,00!</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerLoja from "~/assets/images/bannerLoja.png";
import whatsappIcone from "~/assets/images/whatsappIcone.png";
import logisticaIcone from "~/assets/images/logistica2Icone.png";
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
  overflow: hidden;
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
  max-width: 700px;
  box-sizing: border-box;
}

.hero-title {
  font-size: var(--f5);
  font-weight: var(--bold);
  margin-bottom: 28px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--f3);
  line-height: 1.6;
  margin-bottom: 36px;
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
  position: relative;
  margin-top: 20px;
  width: 100%;
  border-radius: 26px;
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-sizing: border-box;
  z-index: 2;
  text-align: center;
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
    padding: 2rem 1.5rem;
    margin-top: 30px;
  }

  .hero-container {
    aspect-ratio: 4 / 3;
    overflow: visible;
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
    font-size: var(--f4);
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: var(--f1);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .hero-button {
    padding: 10px 16px;
    font-size: var(--f1);
    justify-content: center;
  }

  .whatsapp-icon {
    width: 18px;
  }

  .bottom-banner {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 90%;
    padding: 0.8rem 1rem;
    border-radius: 20px;
    bottom: -30px;
  }

  .bottom-banner span {
    font-size: var(--f1);
    text-align: center;
    line-height: 1.4;
  }

  .logistica-icon {
    width: 24px;
  }
}

@media (max-width: 360px) {
  .hero-section {
    padding: 1.5rem 1rem;
    margin-top: 20px;
  }

  .hero-container {
    background-color: var(--cor-azul-escuro);
    border-radius: 16px;
    padding: 1.5rem 1rem;
    aspect-ratio: auto;
    overflow: visible;
  }

  .hero-content {
    padding: 0;
    height: auto;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  .hero-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-bottom: 0.875rem;
  }

  .hero-button {
    padding: 8px 12px;
    font-size: 0.75rem;
    gap: 6px;
    border-radius: 20px;
    width: 100%;
    max-width: 200px;
  }

  .whatsapp-icon {
    width: 16px;
  }

  .bottom-banner {
    width: 92%;
    padding: 0.625rem 0.75rem;
    border-radius: 16px;
    bottom: -25px;
    gap: 0.375rem;
  }

  .bottom-banner span {
    font-size: 0.625rem;
    line-height: 1.3;
  }

  .logistica-icon {
    width: 20px;
  }
}
</style>
