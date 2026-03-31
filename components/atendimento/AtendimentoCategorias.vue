<template>
  <section class="categorias-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nossas Categorias</h2>
        <p class="section-subtitle">
          Soluções completas do preparo ao acabamento
        </p>
      </div>

      <div class="seletor-wrapper">
        <div class="nav-preview prev-preview desktop-only" @click="prevSlide">
          <Transition name="fade" mode="out-in">
            <img :src="prevItem.icon" :key="prevItem.title" alt="Anterior" />
          </Transition>
        </div>

        <div class="slide-card-wrapper">
          <button
            class="nav-arrow-btn left"
            @click="prevSlide"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="slide-card">
            <div class="slide-content">
              <Transition :name="transitionNameIcon" mode="out-in">
                <div class="slide-icon-container" :key="currentItem.title">
                  <div class="icon-blob-bg"></div>
                  <img
                    :src="currentItem.icon"
                    :alt="currentItem.title"
                    class="slide-icon-main"
                  />
                </div>
              </Transition>

              <Transition :name="transitionNameText" mode="out-in">
                <div class="slide-text" :key="currentItem.title">
                  <h3 class="slide-title">{{ currentItem.title }}</h3>
                  <p class="slide-description">{{ currentItem.description }}</p>
                  <NuxtLink
                    :to="currentItem.link"
                    target="_blank"
                    class="slide-button"
                  >
                    Explorar Linha <span class="arrow">→</span>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>

          <button
            class="nav-arrow-btn right"
            @click="nextSlide"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div class="slide-indicators">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="dot"
              :class="{ active: currentIndex === index }"
              @click="currentIndex = index"
            ></span>
          </div>
        </div>

        <div class="nav-preview next-preview desktop-only invisible"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import casaIcone from "~/assets/images/homeIcone.svg";
import carroIcone from "~/assets/images/carIcone.svg";
import fabricaIcone from "~/assets/images/industriaIcone.svg";

const slides = ref([
  {
    title: "Linha Residencial",
    description:
      "Ampla variedade de tintas para ambientes internos e externos, incluindo opções decorativas e impermeabilizantes de alto padrão.",
    icon: casaIcone,
    link: "https://www.bigcorestintas.com.br/linha-imobiliaria",
  },
  {
    title: "Linha Automotiva",
    description:
      "Tecnologia de ponta para o seu veículo, com produtos para preparação, pintura e polimento com brilho impecável.",
    icon: carroIcone,
    link: "https://www.bigcorestintas.com.br/linha-automotiva",
  },
  {
    title: "Linha Industrial",
    description:
      "Soluções técnicas de alto desempenho para proteção contra corrosão e revestimentos de superfícies industriais e frotas.",
    icon: fabricaIcone,
    link: "https://www.bigcorestintas.com.br/linha-industrial",
  },
]);

const currentIndex = ref(0);
const totalSlides = slides.value.length;
const transitionNameIcon = ref("icon-next");
const transitionNameText = ref("text-next");

const nextSlide = () => {
  transitionNameIcon.value = "icon-next";
  transitionNameText.value = "text-next";
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};
const prevSlide = () => {
  transitionNameIcon.value = "icon-prev";
  transitionNameText.value = "text-prev";
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
};

const currentItem = computed(() => slides.value[currentIndex.value]);
// Pega o item anterior para o preview da esquerda
const prevItem = computed(
  () => slides.value[(currentIndex.value - 1 + totalSlides) % totalSlides],
);
</script>

<style scoped>
.categorias-section {
  width: 100%;
  padding: 80px 0;
  background-color: #fbfbfb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--cor-azul-escuro);
  margin-bottom: 10px;
}
.section-subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.seletor-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* Previews Laterais */
.nav-preview {
  width: 100px;
  display: flex;
  justify-content: center;
  opacity: 0.15;
  cursor: pointer;
  transition: opacity 0.3s;
}
.nav-preview:hover {
  opacity: 0.4;
}
.nav-preview img {
  width: 60px;
  filter: grayscale(1);
}
.invisible {
  visibility: hidden;
  pointer-events: none;
}

.slide-card-wrapper {
  position: relative;
  flex: 1;
  max-width: 950px;
  display: flex;
  align-items: center;
}

/* SETAS DE NAVEGAÇÃO */
.nav-arrow-btn {
  position: absolute;
  z-index: 10;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--cor-azul-escuro);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.nav-arrow-btn:hover {
  background: var(--cor-azul-escuro);
  color: white;
  transform: scale(1.1);
}

.nav-arrow-btn.left {
  left: -22px;
}
.nav-arrow-btn.right {
  right: -22px;
}

.slide-card {
  background: #ffffff;
  border-radius: 30px;
  padding: 60px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.slide-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.slide-icon-container {
  flex-shrink: 0;
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-blob-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(74, 144, 226, 0.1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
}

.slide-icon-main {
  width: 200px;
  z-index: 1;
}

.slide-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.slide-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--cor-azul-escuro);
  margin-bottom: 15px;
}
.slide-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 30px;
}

.slide-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--cor-laranja);
  color: white;
  padding: 14px 30px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.slide-button .arrow {
  transition: transform 0.3s;
}
.slide-button:hover .arrow {
  transform: translateX(5px);
}

/* INDICADORES */
.slide-indicators {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot.active {
  width: 24px;
  background: var(--cor-laranja);
  border-radius: 10px;
}

/* TRANSITIONS */
.icon-next-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.icon-next-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.icon-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.icon-prev-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

@media (max-width: 992px) {
  .desktop-only {
    display: none;
  }
  .nav-arrow-btn {
    width: 40px;
    height: 40px;
  }
  .nav-arrow-btn.left {
    left: 10px;
  }
  .nav-arrow-btn.right {
    right: 10px;
  }
  .slide-card {
    padding: 40px 20px;
  }
  .slide-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  .slide-text {
    align-items: center;
  }
  .slide-icon-container {
    width: 180px;
    height: 180px;
  }
  .slide-icon-main {
    width: 140px;
  }
  .slide-title {
    font-size: 1.6rem;
  }
}
</style>
