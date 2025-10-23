<template>
  <div>
    <HeroConstrutora />
    <FaixaDesconto />
    <ExclusividadeConstrutora id="exclusividade" />
    <PorQueEscolher id="bigcores" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useLinkState } from '~/composables/useLinkState';
import HeroConstrutora from '~/components/construtora/HeroConstrutora.vue';
import FaixaDesconto from '~/components/construtora/FaixaDesconto.vue';
import ExclusividadeConstrutora from '~/components/construtora/ExclusividadeConstrutora.vue';
import PorQueEscolher from '~/components/construtora/PorQueEscolher.vue';

const { setPageLinks } = useLinkState();

const linksDaConstrutora = ref([
  { text: 'Exclusividade', path: '/construtora#exclusividade' },
  { text: 'Big Cores', path: '/construtora#bigcores' },
  { text: 'Endereço', path: '/endereco' },
  { text: 'Sobre Nós', path: '/sobre-nos' }
]);

const linksDeInformacoes = ref([
  { text: 'Central de ajuda', path: '/ajuda' },
  { text: 'Política de reembolso', path: '/politica-reembolso' },
  { text: 'Entrega', path: '/entrega' },
  { text: 'Segurança', path: '/seguranca' },
  { text: 'Quem somos', path: '/sobre-nos' }
]);

const linksDeAtendimento = ref([
  { text: 'E-mail', path: 'mailto:contato@bigcores.com' },
  { text: 'WhatsApp', path: 'https://wa.me/5541992433140' },
  { text: 'Endereço', path: '/endereco' }
]);

onMounted(() => {
  nextTick(() => {
    setPageLinks({
      nav: linksDaConstrutora.value,
      atalhos: linksDaConstrutora.value,
      info: linksDeInformacoes.value,
      atendimento: linksDeAtendimento.value
    });
  });
});

onUnmounted(() => {
  setPageLinks({ nav: [], atalhos: [], info: [], atendimento: [] });
});
</script>