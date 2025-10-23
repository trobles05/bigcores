<template>
  <div>
    <AtendimentoHero /> 
    <AtendimentoFaixaInfo />
    <AtendimentoCategorias />
    <AtendimentoQualidade />
    <AtendimentoAvaiacoes />
  </div>
</template>

<script setup>

import { ref } from 'vue';
import AtendimentoAvaiacoes from '~/components/atendimento/AtendimentoAvaiacoes.vue';
import { useLinkState } from '~/composables/useLinkState'

const { setPageLinks } = useLinkState()

const linksHeaderAtendimento = ref([
  { text: 'Qualidade', path: '/atendimento#qualidade' },
  { text: 'Avaliação', path: '/atendimento#avaliacao' },
  { text: 'Endereço', path: '/endereco' },
  { text: 'Sobre Nós', path: '/sobre-nos' }
]);

setPageLinks({
  nav: linksHeaderAtendimento.value,
  atalhos: linksHeaderAtendimento.value
});
</script>