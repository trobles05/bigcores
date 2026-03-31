<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-banner">
        <video
          ref="videoPlayer"
          autoplay
          loop
          muted
          playsinline
          class="hero-image"
        >
          <source :src="lojaFundo" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <h1 class="hero-title">
            Simplifique a Compra<br class="desktop-only" />
            de Tintas para Grandes<br class="desktop-only" />
            Projetos
          </h1>

          <a
            href="https://wa.me/554192546682?text=Olá!%20Gostaria%20de%20solicitar%20um%20agendamento."
            target="_blank"
            rel="noopener noreferrer"
            class="hero-button"
          >
            <img :src="whatsappIcone" alt="WhatsApp" class="whatsapp-icon" />
            Solicitar um orçamento
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
          <div class="benefit-icon bg-verde-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Valor diferenciado</strong>
            <span>do mercado</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-verde-limao">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-2.731-6.406M14.25 10.5h4.25m-4.25 0V15h4.5m-4.25-4.5h-4.5m4.5-4.5V15"
              />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Logística</strong>
            <span>dedicada para você</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-laranja">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Qualidade Coral</strong>
            <span>encontra aqui</span>
          </div>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon bg-vermelho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div class="benefit-text">
            <strong>Compra mínima</strong>
            <span>de R$ 5mil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import whatsappIcone from "~/assets/images/whatsapp.png";
import { ref, onMounted } from 'vue';
import lojaFundo from "~/public/lojaFundo.mp4"; 

const videoPlayer = ref(null);

onMounted(() => {
  if (videoPlayer.value) {
    // Ajusta a velocidade: 1.0 é normal, 0.7 é 30% mais lento
    videoPlayer.value.playbackRate = 0.9; 
  }
});
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 20px 0;
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
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%); /* Centraliza o vídeo */
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(26, 43, 76, 0.85) 0%,
    rgba(26, 43, 76, 0.3) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  max-width: 700px;
}

.hero-title {
  color: var(--cor-branco);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 28px;
  letter-spacing: -0.5px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--cor-laranja);
  color: var(--cor-branco);
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 4px 15px rgba(227, 147, 50, 0.3);
}

.arrow-icon {
  width: 18px;
  height: 18px;
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
  background-color: #fff;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  height: 72px;
  transition: transform 0.2s;
}

.benefit-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  color: var(--cor-branco);
  border-radius: 11px 0 0 11px;
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 22px;
  height: 22px;
}

.bg-verde-teal {
  background-color: #2ba883;
}
.bg-verde-limao {
  background-color: #75bc3d;
}
.bg-laranja {
  background-color: #e39332;
}
.bg-vermelho {
  background-color: #d63031;
}

.benefit-text {
  padding: 0 12px;
  display: flex;
  flex-direction: column;
}

.benefit-text strong {
  font-size: 12px;
  color: #1e2b4c;
  font-weight: 700;
}

.benefit-text span {
  font-size: 11px;
  color: #64748b;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 12px; /* Aumentei um pouco o espaço para o ícone */
  background-color: var(--cor-laranja);
  color: var(--cor-branco);
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 4px 15px rgba(227, 147, 50, 0.3);
}

.whatsapp-icon {
  width: 24px;  /* Tamanho ideal para o botão */
  height: 24px;
  object-fit: contain;
}

.hero-button:hover {
  transform: translateY(-2px);
  background-color: #f39c12; /* Um tom levemente mais claro no hover */
  box-shadow: 0 6px 20px rgba(227, 147, 50, 0.4);
}

/* --- AJUSTES MOBILE / CARROSSEL --- */
@media (max-width: 992px) {
  .benefits-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .desktop-only {
    display: none;
  }

  .hero-banner {
    height: 420px;
    border-radius: 15px;
  }

  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(26, 43, 76, 0.9) 0%,
      rgba(26, 43, 76, 0.6) 100%
    );
  }

  .hero-content {
    padding: 0 20px;
    align-items: center;
    text-align: center;
  }

  .hero-title {
    font-size: 1.85rem;
    margin-bottom: 24px;
  }

  .hero-button {
    width: 100%;
    justify-content: center;
    padding: 16px;
  }

  .benefits-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 12px;
    padding: 10px 4px 20px 4px;
    scrollbar-width: none;
  }

  .benefits-carousel::-webkit-scrollbar {
    display: none;
  }

  .benefit-card {
    min-width: 260px;
    scroll-snap-align: center;
    flex-shrink: 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
}
</style>
