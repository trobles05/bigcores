<template>
  <div>
    <ConstrutoraHeroConstrutora />
    <ConstrutoraFaixaDesconto />
    <ConstrutoraExclusividadeConstrutora id="exclusividade" /> 
    <ConstrutoraPorQueEscolher id="bigcores" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
// 1. Importe o "mensageiro"
import { useLinkState } from '~/composables/useLinkState'

// 2. Pegue a FUNÇÃO de definir os links
const { setPageLinks } = useLinkState()

// 3. Defina suas listas de links (como antes)
const linksDaConstrutora = ref([
  { text: 'Exclusividade', path: '/construtora#exclusividade' },
  { text: 'Big Cores', path: '/construtora#bigcores' },
  { text: 'Endereço', path: '/endereco' },
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

setPageLinks({
  nav: linksDaConstrutora.value,       
  atalhos: linksDaConstrutora.value,    
  info: linksDeInformacoes.value,       
  atendimento: linksDeAtendimento.value 
});
</script>