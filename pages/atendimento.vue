<template>
  <div>
    <AtendimentoHero />
    <AtendimentoFaixaInfo id="beneficios" />
    <AtendimentoCategorias id="categorias" />
    <AtendimentoQualidade id="qualidade" />
    <AtendimentoAvaiacoes id="avaliacoes" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLinkState } from "~/composables/useLinkState";
import AtendimentoHero from "~/components/atendimento/AtendimentoHero.vue";
import AtendimentoFaixaInfo from "~/components/atendimento/AtendimentoFaixaInfo.vue";
import AtendimentoCategorias from "~/components/atendimento/AtendimentoCategorias.vue";
import AtendimentoQualidade from "~/components/atendimento/AtendimentoQualidade.vue";
import AtendimentoAvaiacoes from "~/components/atendimento/AtendimentoAvaiacoes.vue";

const { setPageLinks, clearLinks } = useLinkState();

// Links atualizados conforme seu pedido: Benefícios e Categorias
const linksHeaderAtendimento = ref([
  { text: "Benefícios", path: "#beneficios" },
  { text: "Categorias", path: "#categorias" },
]);

onMounted(() => {
  // Definindo os links diretamente no mounted para o Header ler imediatamente
  setPageLinks({
    nav: linksHeaderAtendimento.value,
    atalhos: linksHeaderAtendimento.value,
  });
});

onUnmounted(() => {
  // Limpa os links ao sair da página
  clearLinks();
});
</script>