<template>
    <a
      :href="whatsappLink"
      class="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <img 
        src="~/assets/images/whatsappIcone.png" 
        alt="Ícone do WhatsApp" 
        class="fab-icon"
      />
      
      <span class="fab-text">precisa de ajuda?</span>
    </a>
  </template>
  
  <script setup>
  import { useWhatsapp } from '~/composables/useWhatsapp'
  
  const { whatsappLink } = useWhatsapp()
  </script>
  
  <style scoped>
  .whatsapp-fab {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 0;
    background-color: var(--cor-verde);
    color: var(--cor-branco);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    animation: pulse 2s infinite;
  }
  
  .fab-text {
    display: none;
    font-size: var(--f2, 1rem); 
    font-weight: var(--bold, 700); 
  }
  

  .fab-icon {
    width: 32px;  /* Ajuste o tamanho se necessário */
    height: 32px; /* Ajuste o tamanho se necessário */
  }
  
  .whatsapp-fab:hover {
    background-color: #1da851;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 16px var(--cor-verde-escuro, rgba(0, 0, 0, 0.3));
    animation-play-state: paused;
  }
  
  @media (min-width: 1001px) {
    .whatsapp-fab {
      width: fit-content; 
      height: auto;
      border-radius: 26px;
      padding: 12px 20px;
      gap: 10px; 
    }
  
    .fab-text {
      display: inline;
    }
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  /* Desabilitar hovers em dispositivos móveis */
  @media (hover: none) and (pointer: coarse) {
    .whatsapp-fab:hover {
      background-color: var(--cor-verde);
      transform: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      animation-play-state: running;
    }
  }
  </style>