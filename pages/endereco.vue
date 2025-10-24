<template>
  <section class="lojas-section">
    <div class="seletor-wrapper">
      <div class="nav-icon-wrapper prev-icon" @click="prevSlide">
        <Transition name="fade" mode="out-in">
          <img
            :src="prevLoja.image"
            :key="prevLoja.title"
            alt="Loja anterior"
            class="loja-preview-img"
          />
        </Transition>
      </div>

      <div class="slide-card-wrapper">
        <div class="slide-card">
          <div class="slide-content">
            <Transition :name="transitionNameIcon" mode="out-in">
              <div class="slide-icon-cluster" :key="currentLoja.title">
                <div class="nav-arrow" @click="prevSlide"><</div>
                <img
                  :src="currentLoja.image"
                  :alt="currentLoja.title"
                  class="slide-icon-main"
                />
                <div class="nav-arrow" @click="nextSlide">></div>
              </div>
            </Transition>

            <Transition :name="transitionNameText" mode="out-in">
              <div class="slide-text" :key="currentLoja.title">
                <h3 class="slide-title">{{ currentLoja.title }}</h3>
                <p class="slide-description">{{ currentLoja.address }}</p>

                <div class="button-group">
                  <NuxtLink
                    :to="currentLoja.googleMapsLink"
                    target="_blank"
                    class="slide-button"
                  >
                    <img
                      :src="localIcone"
                      alt="Ícone de endereço"
                      class="button-icon"
                    />
                    Endereço
                  </NuxtLink>

                  <NuxtLink
                    :to="currentLoja.whatsappLink"
                    target="_blank"
                    class="slide-button whatsapp-button"
                  >
                    <img
                      :src="whatsappIcone"
                      alt="Ícone do WhatsApp"
                      class="button-icon"
                    />
                    WhatsApp
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="nav-icon-wrapper next-icon" @click="nextSlide">
        <Transition name="fade" mode="out-in">
          <img
            :src="nextLoja.image"
            :key="nextLoja.title"
            alt="Próxima loja"
            class="loja-preview-img"
          />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useLinkState } from "~/composables/useLinkState";

import matrizImg from "~/assets/images/matrizLoja.png";
import filial1Img from "~/assets/images/filia1Loja.png";
import filial2Img from "~/assets/images/filia2Loja.png";
import filial3Img from "~/assets/images/filia3Loja.png";
import filial4Img from "~/assets/images/filia4Loja.png";
import filial5Img from "~/assets/images/filia5Loja.png";
import filial6Img from "~/assets/images/filia6Loja.png";
import localIcone from "~/assets/images/local2Icone.png";
import whatsappIcone from "~/assets/images/whatsappIcone.png";

const { setPageLinks } = useLinkState();

const linksDaPagina = ref([
  { text: "Sobre Nós", path: "/sobre-nos" },
  { text: "Atendimento ao cliente", path: "/atendimento" },
  { text: "Atendimento a emrpesa", path: "/construtora" },
]);

onMounted(() => {
  nextTick(() => {
    setPageLinks({
      nav: linksDaPagina.value,
      atalhos: linksDaPagina.value,
      info: [],
      atendimento: [],
    });
  });
});

onUnmounted(() => {
  setPageLinks({ nav: [], atalhos: [], info: [], atendimento: [] });
});

const mapsBaseUrl = "https://www.google.com/maps/search/?api=1&query=";
const whatsappBaseUrl = "https://wa.me/5541992433140";

const lojas = ref([
  {
    title: "MATRIZ",
    address:
      "Rua Almirante Alexandrino, 1823, Afonso Pena - São José dos Pinhais - PR, 83045-210",
    image: matrizImg,
    googleMapsLink: `${mapsBaseUrl}Rua+Almirante+Alexandrino,+1823,+Afonso+Pena+-+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83045-210`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL I",
    address:
      "Rua Joinville, 2767, São Pedro - São José dos Pinhais - PR, 83020-540",
    image: filial1Img,
    googleMapsLink: `${mapsBaseUrl}Rua+Joinville,+2767,+S%C3%A3o+Pedro+-+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83020-540`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL II",
    address:
      "Av. Senador Salgado Filho, 6367, Uberaba - Curitiba - PR, 81580-000",
    image: filial2Img,
    googleMapsLink: `${mapsBaseUrl}Av.+Senador+Salgado+Filho,+6367,+Uberaba+-+Curitiba+-+PR,+81580-000`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL III",
    address:
      "Av. Rui Barbosa, 5820, Afonso Pena - São José dos Pinhais - PR, 83045-350",
    image: filial3Img,
    googleMapsLink: `${mapsBaseUrl}Av.+Rui+Barbosa,+5820,+Afonso+Pena+-+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83045-350`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL IV",
    address:
      "R. Pastor Carlos Frank, 617 (esquina com Sítio Cercado), Boqueirão - Curitiba - PR, 81650-170",
    image: filial4Img,
    googleMapsLink: `${mapsBaseUrl}R.+Pastor+Carlos+Frank,+617+(esquina+com+S%C3%ADtio+Cercado),+Boqueir%C3%A3o+-+Curitiba+-+PR,+81650-170`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL V",
    address: "Av. Wenceslau Braz, 2510, Lindoia - Curitiba - PR, 81010-000",
    image: filial5Img,
    googleMapsLink: `${mapsBaseUrl}Av.+Wenceslau+Braz,+2510,+Lindoia+-+Curitiba+-+PR,+81010-000`,
    whatsappLink: whatsappBaseUrl,
  },
  {
    title: "FILIAL VI",
    address: "Rodovia da Uva, 1184, Roça Grande - Colombo - PR, 83402-000",
    image: filial6Img,
    googleMapsLink: `${mapsBaseUrl}Rodovia+da+Uva,+1184,+Ro%C3%A7a+Grande+-+Colombo+-+PR,+83402-000`,
    whatsappLink: whatsappBaseUrl,
  },
]);

const currentIndex = ref(0);
const totalLojas = lojas.value.length;

const transitionNameIcon = ref("icon-next");
const transitionNameText = ref("text-next");

const nextSlide = () => {
  transitionNameIcon.value = "icon-next";
  transitionNameText.value = "text-next";
  currentIndex.value = (currentIndex.value + 1) % totalLojas;
};

const prevSlide = () => {
  transitionNameIcon.value = "icon-prev";
  transitionNameText.value = "text-prev";
  currentIndex.value = (currentIndex.value - 1 + totalLojas) % totalLojas;
};

const currentLoja = computed(() => lojas.value[currentIndex.value]);

const prevLoja = computed(() => {
  const prevIndex = (currentIndex.value - 1 + totalLojas) % totalLojas;
  return lojas.value[prevIndex];
});

const nextLoja = computed(() => {
  const nextIndex = (currentIndex.value + 1) % totalLojas;
  return lojas.value[nextIndex];
});
</script>

<style scoped>
.lojas-section {
  width: 100%;
  padding: 100px 40px;
  background-color: #f0f0f0;
  overflow-x: hidden;
  box-sizing: border-box;
}

.seletor-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  margin: 64px auto;
}

.nav-icon-wrapper {
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-icon-wrapper:hover {
  opacity: 1;
  transform: scale(1.05);
}
.nav-icon-wrapper img.loja-preview-img {
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
  background: var(--cor-branco);
  border-radius: 26px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
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
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

.slide-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 50%;
}

.slide-title {
  font-size: var(--f6);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin: 0 0 16px 0;
}

.slide-description {
  font-size: 0.95rem;
  color: var(--cor-cinza-escuro);
  margin: 0;
  line-height: 1.6;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 26px;
}

.slide-button {
  background-color: var(--cor-laranja);
  color: var(--cor-branco);
  padding: 0.8rem 1.2rem;
  border-radius: 26px;
  text-decoration: none;
  font-weight: var(--regular);
  font-size: var(--f1);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.slide-button:hover {
  background-color: #ff8000;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 122, 0, 0.4);
}

.button-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.icon-next-enter-active,
.icon-next-leave-active,
.icon-prev-enter-active,
.icon-prev-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.icon-next-enter-from {
  opacity: 0;
  transform: translateX(-60px) scale(0.9);
}
.icon-next-leave-to {
  opacity: 0;
  transform: translateX(60px) scale(0.9);
}
.icon-prev-enter-from {
  opacity: 0;
  transform: translateX(60px) scale(0.9);
}
.icon-prev-leave-to {
  opacity: 0;
  transform: translateX(-60px) scale(0.9);
}

.text-next-enter-active,
.text-next-leave-active,
.text-prev-enter-active,
.text-prev-leave-active {
  transition: all 0.45s ease-in-out;
}
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
@media (max-width: 1000px) {
  .lojas-section {
    padding: 4rem 1.5rem;
  }

  .seletor-wrapper {
    display: block;
    margin: 0 auto;
  }

  .nav-icon-wrapper.prev-icon,
  .nav-icon-wrapper.next-icon {
    display: none;
  }

  .slide-card-wrapper {
    grid-column: auto;
    max-width: 100%;
  }

  .slide-card {
    padding: 2rem 1.5rem;
  }

  .slide-content {
    flex-direction: column;
    gap: 1rem;
  }
  .slide-icon-cluster {
    gap: 0.5rem;
  }

  .slide-text {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  .slide-icon-main {
    width: 70%;
  }

  .slide-title {
    font-size: var(--f4);
  }

  .slide-description {
    font-size: var(--f2);
  }

  .button-group {
    justify-content: center;
  }

  .slide-button {
    font-size: var(--f2);
  }
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
    transform: translateX(40px);
  }
}
</style>
