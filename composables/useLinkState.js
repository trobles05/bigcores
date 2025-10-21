import { useState } from '#app'

// Links estáticos para o footer
const linksDeInformacoesEstaticos = [
  { text: 'Central de ajuda', path: 'https://www.bigcorestintas.com.br/help.ehc' },
  { text: 'Política de reembolso', path: 'https://www.bigcorestintas.com.br/help.ehc#Cancelamentos' },
  { text: 'Entrega', path: 'https://www.bigcorestintas.com.br/help.ehc#Entregas' },
  { text: 'Segurança', path: 'https://www.bigcorestintas.com.br/help.ehc#Seguranca' },
  { text: 'Quem somos', path: '/quem-somos' }
];

const linksDeAtendimentoEstaticos = [
  { text: 'E-mail', path: 'mailto:contato@bigcores.com' },
  { text: 'WhatsApp', path: 'https://wa.me/5541992433140' },
  { text: 'Telefone', path: 'tel:+5541992433140' },
  { text: 'Endereço', path: '/endereco' }
];

export const useLinkState = () => {
  // Criamos "gavetas" globais para guardar as listas de links
  const navLinks = useState('navLinks', () => [])
  const atalhosLinks = useState('atalhosLinks', () => [])
  const informacoesLinks = useState('informacoesLinks', () => linksDeInformacoesEstaticos)
  const atendimentoLinks = useState('atendimentoLinks', () => linksDeAtendimentoEstaticos)

  const setPageLinks = ({ nav, atalhos }) => {
    if (nav) navLinks.value = nav
    if (atalhos) atalhosLinks.value = atalhos
  }

  return {
    navLinks,
    atalhosLinks,
    informacoesLinks,
    atendimentoLinks,
    setPageLinks
  }
}