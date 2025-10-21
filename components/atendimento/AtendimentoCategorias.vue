<template>
  <section class="categorias-section">
    <div class="seletor-wrapper">

      <div class="nav-icon-wrapper prev-icon" @click="prevSlide">
        <Transition name="fade" mode="out-in">
          <img :src="prevItem.icon" :key="prevItem.title" alt="Categoria anterior" />
        </Transition>
      </div>

      <div class="slide-card-wrapper">
        <div class="slide-card">
          <div class="slide-content">
            
            <Transition :name="transitionNameIcon" mode="out-in">
              <div class="slide-icon-cluster" :key="currentItem.title">
                <div class="nav-arrow" @click="prevSlide">&lt;</div>
                <img :src="currentItem.icon" :alt="currentItem.title" class="slide-icon-main" />
                <div class="nav-arrow" @click="nextSlide">&gt;</div>
              </div>
            </Transition>
            
            <Transition :name="transitionNameText" mode="out-in">
              <div class="slide-text" :key="currentItem.title">
                <h3 class="slide-title">{{ currentItem.title }}</h3>
                <p class="slide-description">{{ currentItem.description }}</p>
                <NuxtLink :to="currentItem.link" class="slide-button">Ver Produto</NuxtLink>
              </div>
            </Transition>

          </div>
        </div>
      </div>

      <div class="nav-icon-wrapper next-icon" @click="nextSlide">
        <Transition name="fade" mode="out-in">
          <img :src="nextItem.icon" :key="nextItem.title" alt="Próxima categoria" />
        </Transition>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

import casaIcone from '~/assets/images/homeIcone.svg';
import carroIcone from '~/assets/images/carIcone.svg';
import fabricaIcone from '~/assets/images/industriaIcone.svg';

const slides = ref([
  {
    title: 'Linha Residencial',
    description: 'Ampla variedade de tintas para ambientes internos e externos, incluindo opções decorativas e impermeabilizantes.',
    icon: casaIcone,
    link: '/residencial'
  },
  {
    title: 'Linha Automotivo',
    description: 'Linha dedicada para o seu veículo, com produtos para preparação, pintura e polimento de alta qualidade.',
    icon: carroIcone,
    link: '/automotivo'
  },
  {
    title: 'Linha Industrial',
    description: 'Soluções técnicas de alto desempenho para a proteção contra corrosão de superfícies industriais e frotas.',
    icon: fabricaIcone,
    link: '/industrial'
  }
]);

const currentIndex = ref(0);
const totalSlides = slides.value.length;

const transitionNameIcon = ref('icon-next');
const transitionNameText = ref('text-next');

const nextSlide = () => {
  transitionNameIcon.value = 'icon-next';
  transitionNameText.value = 'text-next';
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};
const prevSlide = () => {
  transitionNameIcon.value = 'icon-prev';
  transitionNameText.value = 'text-prev';
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
};

const currentItem = computed(() => slides.value[currentIndex.value]);

// 🔧 Correção da lógica dos ícones laterais
const prevItem = computed(() => {
  const nextIndex = (currentIndex.value + 1) % totalSlides;
  return slides.value[nextIndex];
});

const nextItem = computed(() => {
  const prevIndex = (currentIndex.value - 1 + totalSlides) % totalSlides;
  return slides.value[prevIndex];
});
</script>

<style scoped>
.categorias-section {
  width: 100%;
  padding: 100px 40px;
  background-color: #ffffff;
  overflow-x: hidden;
  box-sizing: border-box;
}

.seletor-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
}

.nav-icon-wrapper {
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-icon-wrapper:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
.nav-icon-wrapper img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
.prev-icon {
  justify-self: end; 
}
.next-icon {
  display: none; 
}

.slide-card-wrapper {
  grid-column: 2 / 3;
  width: 100%;
  max-width: 1140px; 
}

.slide-card {
  background: #f6f6f6;
  border-radius: 26px;
  border-top: 4px solid var(--cor-azul-bb);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  box-sizing: border-box;
  overflow: hidden; 
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap:16rem;
}

.slide-icon-cluster {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
}

.nav-arrow {
  font-size: var(--f6);
  font-weight: bold;
  color: var(--cor-laranja);
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
}
.nav-arrow:hover {
  transform: scale(1.2);
}

.slide-icon-main {
  width: 240px;
  object-fit: contain;
}

.slide-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left; 
  max-width: 60%;
}

.slide-title {
  font-size: var(--f5);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin: 16px 0 16px 0;
}

.slide-description {
  font-size: var(--f2);
  color: var(--cor-cinza-escuro);
  margin: 0 0 26px 0;
  line-height: 1.6;
}

.slide-button {
  background-color: var(--cor-laranja);
  color: var(--cor-branco);
  padding: 1rem 1.4rem;
  border-radius: 26px;
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f2);
  transition: background-color 0.3s;
}
.slide-button:hover {
  background-color: #ff8000; 
  transform: translateY(-1.5px);
  box-shadow: 0 4px 10px rgba(255, 122, 0, 0.3); 
}

/* --- ANIMAÇÕES  --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- ÍCONES --- */
.icon-next-enter-active,
.icon-next-leave-active,
.icon-prev-enter-active,
.icon-prev-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Quando clica pra direita → tudo desliza pra direita */
.icon-next-enter-from {
  opacity: 0;
  transform: translateX(-60px) scale(0.9);
}
.icon-next-leave-to {
  opacity: 0;
  transform: translateX(60px) scale(0.9);
}

/* Quando clica pra esquerda → tudo desliza pra esquerda */
.icon-prev-enter-from {
  opacity: 0;
  transform: translateX(60px) scale(0.9);
}
.icon-prev-leave-to {
  opacity: 0;
  transform: translateX(-60px) scale(0.9);
}

/* --- TEXTO --- */
.text-next-enter-active,
.text-next-leave-active,
.text-prev-enter-active,
.text-prev-leave-active {
  transition: all 0.45s ease-in-out;
}

/* Movimento acompanha o botão clicado */
.text-next-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.text-next-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.text-prev-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.text-prev-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

</style>
