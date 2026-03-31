<template>
  <section class="wrapper-section" ref="statsSectionRef">
    <div class="container">
      <div class="info-wrapper">
        <div class="info-card">
          <div class="icon-circle">
            <img
              :src="presenteIcone"
              alt="Ícone de presente"
              class="info-icon"
            />
          </div>
          <div class="info-text">
            <p class="info-title">3% OFF no primeiro pedido!</p>
            <p class="info-subtitle">
              Use o cupom: <span class="cupom">primeiracompra</span>
            </p>
          </div>
        </div>

        <div class="info-card paint-card">
          <div class="paint-icon-wrapper">
            <div class="paint-stripe"></div>
            <img
              :src="rolotintaIcone"
              alt="Ícone de rolo de tinta"
              class="info-icon paint-icon"
            />
          </div>
          <div class="info-text">
            <p class="info-title">As melhores cores estão aqui</p>
            <p class="info-subtitle">
              <a
                href="https://www.bigcorestintas.com.br/"
                target="_blank"
                class="link-loja"
              >
                Visite nossas lojas &rightarrow;
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="stats-carousel">
        <div class="stats-wrapper">
          <div class="stats-card">
            <p class="stats-number orange">{{ formattedClientes }}</p>
            <p class="stats-label">Clientes satisfeitos</p>
          </div>
          <div class="stats-card">
            <p class="stats-number">
              Mais de <span class="orange">{{ formattedCores }}</span>
            </p>
            <p class="stats-label">Variedades de cor</p>
          </div>
          <div class="stats-card">
            <p class="stats-number orange">{{ formattedLojas }}</p>
            <p class="stats-label">Lojas físicas</p>
          </div>
          <div class="stats-card">
            <p class="stats-number">
              Mais de <span class="orange">{{ formattedAnos }} anos</span>
            </p>
            <p class="stats-label">No mercado</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import presenteIcone from "~/assets/images/presenteIcone.png";
import rolotintaIcone from "~/assets/images/rolotintaIcone.svg";

// Nota: Lembre-se de manter suas lógicas de animação de números (animateCount) e IntersectionObserver aqui!
const formattedClientes = ref("100.000+");
const formattedCores = ref("3.000");
const formattedLojas = ref("7");
const formattedAnos = ref("30");
</script>

<style scoped>
/* --- ESTILOS BASE --- */
.wrapper-section {
  width: 100%;
  padding: 80px 0;
  background-color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.info-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.info-card {
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  gap: 24px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
}

.icon-circle {
  width: 64px;
  height: 64px;
  background-color: #f1f5f9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* --- ANIMAÇÃO DO ROLO SINCRONIZADA --- */
.paint-icon-wrapper {
  position: relative;
  flex-shrink: 0;
  width: 54px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.paint-icon {
  width: 48px;
  height: 48px;
  z-index: 3;
  animation: roller-move-down 40s infinite ease-in-out;
}

.paint-stripe {
  position: absolute;
  top: 10px;
  width: 44px;
  height: 0;
  z-index: 2;
  border-radius: 4px;
  animation: paint-stripe-grow 40s infinite ease-in-out;
}

@keyframes roller-move-down {
  0%,
  10%,
  20%,
  30%,
  40%,
  50%,
  60%,
  70%,
  80%,
  90%,
  100% {
    transform: translateY(0);
  }
  2.5%,
  7.5%,
  12.5%,
  17.5%,
  22.5%,
  27.5%,
  32.5%,
  37.5%,
  42.5%,
  47.5%,
  52.5%,
  57.5%,
  62.5%,
  67.5%,
  72.5%,
  77.5%,
  82.5%,
  87.5%,
  92.5%,
  97.5% {
    transform: translateY(45px);
  }
}

@keyframes paint-stripe-grow {
  /* Bloco 1: Azul Escuro */
  0%,
  10% {
    height: 0;
    background-color: #223359;
  }
  2.5%,
  7.5% {
    height: 45px;
    background-color: #223359;
  }

  /* Bloco 2: Azul Médio */
  10.1% {
    height: 0;
    background-color: #0069ae;
  }
  12.5%,
  17.5% {
    height: 45px;
    background-color: #0069ae;
  }

  /* Bloco 3: Azul Claro */
  20.1% {
    height: 0;
    background-color: #058db6;
  }
  22.5%,
  27.5% {
    height: 45px;
    background-color: #058db6;
  }

  /* Bloco 4: Laranja */
  30.1% {
    height: 0;
    background-color: #ff6b00;
  }
  32.5%,
  37.5% {
    height: 45px;
    background-color: #ff6b00;
  }

  /* Bloco 5: Verde Teal */
  40.1% {
    height: 0;
    background-color: #32a98b;
  }
  42.5%,
  47.5% {
    height: 45px;
    background-color: #32a98b;
  }

  /* Bloco 6: Verde Lima */
  50.1% {
    height: 0;
    background-color: #75ba41;
  }
  52.5%,
  57.5% {
    height: 45px;
    background-color: #75ba41;
  }

  /* Bloco 7: Verde Amarelo */
  60.1% {
    height: 0;
    background-color: #a5c60d;
  }
  62.5%,
  67.5% {
    height: 45px;
    background-color: #a5c60d;
  }

  /* Bloco 8: Amarelo */
  70.1% {
    height: 0;
    background-color: #ffec00;
  }
  72.5%,
  77.5% {
    height: 45px;
    background-color: #ffec00;
  }

  /* Bloco 9: Ouro */
  80.1% {
    height: 0;
    background-color: #f8a400;
  }
  82.5%,
  87.5% {
    height: 45px;
    background-color: #f8a400;
  }

  /* Bloco 10: Vermelho */
  90.1% {
    height: 0;
    background-color: #cd0a1a;
  }
  92.5%,
  97.5% {
    height: 45px;
    background-color: #cd0a1a;
  }
  100% {
    height: 0;
    background-color: #cd0a1a;
  }
}

/* --- TEXTOS E CARDS --- */
.info-text {
  display: flex;
  flex-direction: column;
}
.info-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a2b4c;
  margin-bottom: 4px;
}
.cupom {
  color: var(--cor-laranja);
  font-weight: 800;
  background: rgba(227, 147, 50, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}
.link-loja {
  color: #1a2b4c;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid var(--cor-laranja);
}
.divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  margin: 48px 0;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.stats-card {
  background: #fff;
  border-radius: 24px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.stats-number {
  font-size: 2rem;
  font-weight: 800;
  color: #1a2b4c;
  margin-bottom: 8px;
}
.stats-label {
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}
.orange {
  color: var(--cor-laranja);
}

@media (max-width: 1000px) {
  .info-wrapper {
    grid-template-columns: 1fr;
  }
  .stats-carousel {
    margin: 0 -20px;
    padding: 0 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .stats-carousel::-webkit-scrollbar {
    display: none;
  }
  .stats-wrapper {
    display: flex;
    width: max-content;
    gap: 12px;
    padding-bottom: 10px;
  }
  .stats-card {
    min-width: 180px;
    scroll-snap-align: center;
  }
}
</style>
