import { useState } from '#app'

export const useLinkState = () => {
  // Criamos "gavetas" globais para guardar as listas de links
  const navLinks = useState('navLinks', () => [])
  const atalhosLinks = useState('atalhosLinks', () => [])
  const informacoesLinks = useState('informacoesLinks', () => [])
  const atendimentoLinks = useState('atendimentoLinks', () => [])

  const setPageLinks = ({ nav, atalhos, info, atendimento }) => {
    if (nav) navLinks.value = nav
    if (atalhos) atalhosLinks.value = atalhos
    if (info) informacoesLinks.value = info
    if (atendimento) atendimentoLinks.value = atendimento
  }

  return {
    navLinks,
    atalhosLinks,
    informacoesLinks,
    atendimentoLinks,
    setPageLinks
  }
}