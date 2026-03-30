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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 0;
  background-color: transparent; /* ← fundo transparente */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s ease-out 10s infinite;
}

.fab-icon {
  width: 60px;  /* ← ícone ocupa o botão todo */
  height: 60px;
}

.fab-text {
  display: none;
  font-size: var(--f2, 1rem);
  font-weight: var(--bold, 700);
  color: var(--cor-verde);
}

.whatsapp-fab:hover {
  transform: translateY(-3px) scale(1.05);
  animation-play-state: paused;
}

@media (min-width: 1001px) {
  .whatsapp-fab {
    width: fit-content;
    height: auto;
    border-radius: 100%;
    padding: 8px ;
    gap: 10px;
    background-color: transparent;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .fab-icon {
    width: 36px;
    height: 36px;
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

@media (hover: none) and (pointer: coarse) {
  .whatsapp-fab:hover {
    transform: none;
    animation-play-state: running;
  }
}
</style>