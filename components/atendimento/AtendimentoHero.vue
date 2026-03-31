<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-wrapper">
        <img
          :src="bannerLoja"
          alt="Interior da loja de tintas Big Cores"
          class="hero-image"
        />

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <span class="hero-tag">Atendimento Exclusivo</span>
          <h1 class="hero-title">
            Fale com um <br class="desktop-only" />
            Especialista
          </h1>
          <p class="hero-subtitle">
            Tem dúvidas sobre produtos ou quer um orçamento detalhado? Nossa
            equipe técnica atende construtoras e clientes do e-commerce com
            agilidade e qualidade.
          </p>

          <div class="hero-actions">
            <a
              href="https://wa.me/554192433140?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              class="hero-button main-btn"
            >
              <img :src="whatsappIcone" alt="WhatsApp" class="whatsapp-icon" />
              Solicitar Orçamento
            </a>

          
          </div>
        </div>

        <div class="bottom-banner">
          <div class="banner-inner">
            <img :src="logisticaIcone" alt="Logística" class="logistica-icon" />
            <p>
              Moradores de <strong>Curitiba e RM</strong> - Frete grátis a
              partir de <strong>R$ 100,00!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerLoja from "~/assets/images/bannerLoja.png";
import whatsappIcone from "~/assets/images/whatsapp.png";
import logisticaIcone from "~/assets/images/logistica2Icone.png";
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 60px 0;
  background-color: var(--cor-branco);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-wrapper {
  position: relative;
  width: 100%;
  min-height: 550px; /* Aumentado levemente para caber os botões */
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(26, 43, 76, 0.95) 0%,
    rgba(26, 43, 76, 0.4) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 60px;
  max-width: 700px;
  color: var(--cor-branco);
}

.hero-tag {
  display: inline-block;
  background-color: rgba(227, 147, 50, 0.2);
  color: #f1caaf;
  border: 1px solid #e39332;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 35px;
  color: rgba(255, 255, 255, 0.85);
}

/* --- AJUSTE NAS ACTIONS --- */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px; /* Estilo mais moderno */
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.main-btn {
  background-color: #25d366;
  color: white;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}


.hero-button:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
}

.whatsapp-icon {
  width: 22px;
  height: 22px;
}

/* --- BANNER INFERIOR --- */
.bottom-banner {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 3;
  max-width: 380px;
}

.banner-inner {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.logistica-icon {
  width: 30px;
  height: auto;
}
.banner-inner p {
  font-size: 13px;
  margin: 0;
  line-height: 1.4;
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1024px) {
  .hero-wrapper {
    min-height: auto;
    flex-direction: column;
  }
  .bottom-banner {
    position: relative;
    bottom: 0;
    right: 0;
    max-width: 100%;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    text-align: center;
    padding: 40px 20px;
  }
  .hero-actions {
    justify-content: center;
    width: 100%;
  }
  .hero-button {
    width: 100%;
    justify-content: center;
  }
  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(26, 43, 76, 0.9) 0%,
      rgba(26, 43, 76, 1) 100%
    );
  }
  .banner-inner {
    background: #1a2b4c;
  }
}
</style>
