<template>
  <div>
    <HeroConstrutora />
    <ExclusividadeConstrutora id="exclusividade" />
    <PorQueEscolher id="bigcores" />
   
    <Atelice />
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useLinkState } from "~/composables/useLinkState";
import HeroConstrutora from "~/components/construtora/HeroConstrutora.vue";
import ExclusividadeConstrutora from "~/components/construtora/ExclusividadeConstrutora.vue";
import PorQueEscolher from "~/components/construtora/PorQueEscolher.vue";

import CtaFinal from "~/components/construtora/CtaFinal.vue";
import Atelice from "~/components/construtora/Atelice.vue";

const { setPageLinks, clearLinks } = useLinkState();

// Menu focado apenas nos diferenciais da página
const linksDaConstrutora = ref([
  { text: "Exclusividade", path: "#exclusividade" },
  { text: "Big Cores", path: "#bigcores" },
]);

onMounted(() => {
  nextTick(() => {
    // Define os links para o Header dinâmico
    setPageLinks({
      nav: linksDaConstrutora.value,
      atalhos: linksDaConstrutora.value,
    });
  });
});

onUnmounted(() => {
  // Limpa o estado global ao sair da página
  clearLinks();
});
</script>
