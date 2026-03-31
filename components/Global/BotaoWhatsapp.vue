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
  
  /* TESTE: Fundo branco 1px menor que o logo (39px) */
  width: 39px;
  height: 39px;
  background-color: #ffffff; 
  border-radius: 50%;
  
  /* Sombra para destaque visual */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s ease-out 5s infinite;
}

.fab-icon {
  /* Logo com 40px (1px maior que o fundo) */
  width: 40px; 
  height: 40px;
  object-fit: contain;
  display: block;
  /* Garante que o logo sobreponha o fundo branco perfeitamente */
  position: relative;
  z-index: 2;
}

/* Efeito de Hover */
.whatsapp-fab:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  animation-play-state: paused;
}

/* Ajuste Desktop mantendo a lógica de 1px menor */
@media (min-width: 1001px) {
  .whatsapp-fab {
    bottom: 40px;
    right: 40px;
    /* Ícone 42px -> Fundo 41px */
    width: 41px;
    height: 41px;
  }
  
  .fab-icon {
    width: 42px;
    height: 42px;
  }
}

/* Animação de Pulso */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

/* Desabilita hover em dispositivos touch */
@media (hover: none) and (pointer: coarse) {
  .whatsapp-fab:hover {
    transform: none;
    animation-play-state: running;
  }
}
</style>