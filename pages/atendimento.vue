<template>
  <div>
    <AtendimentoHero /> 
    <AtendimentoFaixaInfo />
    <AtendimentoCategorias />
    <AtendimentoSecaoQualidade id="qualidade" />
    <AtendimentoSecaoAvaliacao id="avaliacao" />
    
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useLinkState } from '~/composables/useLinkState'

const { setPageLinks } = useLinkState()

const linksHeaderAtendimento = ref([
  { text: 'Qualidade', path: '/atendimento#qualidade' },
  { text: 'Avaliação', path: '/atendimento#avaliacao' },
  { text: 'Endereço', path: '/endereco' },
  { text: 'Sobre Nós', path: '/sobre-nos' }
]);

// 2. Listas de links do Footer (que podem ser iguais às da outra página)
const linksDeInformacoes = ref([
  { text: 'Central de ajuda', path: '/ajuda' },
  // ... etc ...
  { text: 'Quem somos', path: '/sobre-nos' }
]);

const linksDeAtendimentoFooter = ref([
  { text: 'E-mail', path: 'mailto:contato@bigcores.com' },
  // ... etc ...
  { text: 'Endereço', path: '/endereco' }
]);

// 3. Enviando os links para o layout (app.vue)
setPageLinks({
  nav: linksHeaderAtendimento.value,
  atalhos: linksHeaderAtendimento.value,
  info: linksDeInformacoes.value,
  atendimento: linksDeAtendimentoFooter.value
});
</script>