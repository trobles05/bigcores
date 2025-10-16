<template>
    <section class="faixa-desconto-section">
      <div class="faixa faixa-1">
        <div class="texto-scrolling">
          <span> • DESCONTO DE ATÉ 40% COM FATURAMENTO DIRETO DE FÁBRICA</span>
          <span> • DESCONTO DE ATÉ 40% COM FATURAMENTO DIRETO DE FÁBRICA</span>
        </div>
      </div>
      <div class="faixa faixa-2">
        <div class="texto-scrolling">
          <span> • DESCONTO DE ATÉ 40% COM FATURAMENTO DIRETO DE FÁBRICA</span>
          <span> • DESCONTO DE ATÉ 40% COM FATURAMENTO DIRETO DE FÁBRICA</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .faixa-desconto-section {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  
  .faixa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--cor-vermelho);
    color: var(--cor-branco);
    padding: 0.75rem 0;
    font-weight: var(--bold);
    font-size: var(--f2);
    text-transform: uppercase;
    overflow: hidden;
    height: 50px;
    width: 120%;
  }
  
  /* Mantém o centro ao rotacionar */
  .faixa-1 {
    transform: translate(-50%, -50%) rotate(-3deg);
  }
  
  .faixa-2 {
    transform: translate(-50%, -50%) rotate(3deg);
  }
  
  .texto-scrolling {
    display: flex;
    gap: 120px;
    justify-content: center;
    animation: scroll 60s linear infinite;
    white-space: nowrap;
  }
  
  @keyframes scroll {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  </style>
  