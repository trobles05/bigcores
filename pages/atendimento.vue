<template>
  <div>
    <AtendimentoHero />
    <AtendimentoFaixaInfo />
    <AtendimentoCategorias id="categorias" />
    <AtendimentoQualidade id="qualidade" />
    <AtendimentoAvaiacoes id="avaliacoes" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import AtendimentoAvaiacoes from "~/components/atendimento/AtendimentoAvaiacoes.vue";
import { useLinkState } from "~/composables/useLinkState";
import AtendimentoHero from "~/components/atendimento/AtendimentoHero.vue";
import AtendimentoFaixaInfo from "~/components/atendimento/AtendimentoFaixaInfo.vue";
import AtendimentoCategorias from "~/components/atendimento/AtendimentoCategorias.vue";
import AtendimentoQualidade from "~/components/atendimento/AtendimentoQualidade.vue";

const { setPageLinks } = useLinkState();

const linksHeaderAtendimento = ref([
  { text: "Departamentos", path: "/atendimento#categorias" },
  { text: "Avaliações", path: "/atendimento#avaliacoes" },
  { text: "Endereço", path: "/endereco" },
  { text: "Sobre Nós", path: "/sobre-nos" },
]);

onMounted(() => {
  nextTick(() => {
    setPageLinks({
      nav: linksHeaderAtendimento.value,
      atalhos: linksHeaderAtendimento.value,
    });
  });
});

onUnmounted(() => {
  setPageLinks({ nav: [], atalhos: [] });
});
</script>
