<template>
  <div>
    <IndustrialHero />
    <IndustrialExclusividade id="exclusividade-industrial" />
    <IndustrailPorQue id="por-que-industrial" />
    <IndutrialTotinho />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useLinkState } from "~/composables/useLinkState";
import IndustrialHero from "~/components/industrial/IndustralHero.vue";
import IndustrailPorQue from "~/components/industrial/IndustrailPorQue.vue";
import IndustrialExclusividade from "~/components/industrial/IndustrialExclusividade.vue";
import IndutrialTotinho from "~/components/industrial/IndutrialTotinho.vue";


const { setPageLinks, clearLinks } = useLinkState();

const linksDaIndustrial = ref([
  { text: "Diferenciais", path: "#exclusividade-industrial" },
  { text: "Por que Big Cores", path: "#por-que-industrial" },
]);

onMounted(() => {
  nextTick(() => {
    setPageLinks({
      nav: linksDaIndustrial.value,
      atalhos: linksDaIndustrial.value,
    });
  });
});

onUnmounted(() => {
  clearLinks();
});
</script>