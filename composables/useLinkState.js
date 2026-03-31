import { useState } from "#app";

// Links estáticos que NÃO mudam entre as landing pages (Footer)
const linksDeInformacoesEstaticos = [
  {
    text: "Política de privacidade",
    path: "https://www.bigcorestintas.com.br/seguranca",
  },
  {
    text: "Política de reembolso",
    path: "https://www.bigcorestintas.com.br/politica-de-reembolso",
  },
  {
    text: "Quem somos",
    path: "https://www.bigcorestintas.com.br/quem-somos",
  },
  {
    text: "Política de entrega",
    path: "https://www.bigcorestintas.com.br/central-de-ajuda",
  },
  {
    text: "Nossas lojas",
    path: "https://www.bigcorestintas.com.br/nossas-lojas",
  },

];

const linksDeAtendimentoEstaticos = [
  { text: "ecommerce@bigcorestintas.com.br", path: "mailto:ecommerce@bigcorestintas.com.br" },
  { text: "WhatsApp", path: "https://wa.me/5541992433140" },
  { text: "Telefone", path: "tel:+5541992433140" },
  { text: "Endereço", path: "/endereco" },
];

export const useLinkState = () => {
  // Gaveta para os links do MENU SUPERIOR (Header) - Dinâmico
  const navLinks = useState("navLinks", () => []);
  
  // Gaveta para atalhos extras (opcional)
  const atalhosLinks = useState("atalhosLinks", () => []);
  
  // Gavetas fixas para o Footer
  const informacoesLinks = useState(
    "informacoesLinks",
    () => linksDeInformacoesEstaticos
  );
  const atendimentoLinks = useState(
    "atendimentoLinks",
    () => linksDeAtendimentoEstaticos
  );

  /**
   * Define os links da página atual.
   * @param {Array} nav - Links para o Header (Exclusividade, Big Cores, etc)
   * @param {Array} atalhos - Links para outras áreas se necessário
   */
  const setPageLinks = ({ nav, atalhos }) => {
    navLinks.value = nav || [];
    atalhosLinks.value = atalhos || [];
  };

  /**
   * Limpa os links ao sair da página para evitar que links 
   * de uma landing page apareçam na outra por erro de cache.
   */
  const clearLinks = () => {
    navLinks.value = [];
    atalhosLinks.value = [];
  };

  return {
    navLinks,
    atalhosLinks,
    informacoesLinks,
    atendimentoLinks,
    setPageLinks,
    clearLinks
  };
};