<template>
    <section class="beneficios-section">
      <div class="container">
        <h2 class="section-titulo">Por que escolher a nossa construtora?</h2>
        <div class="beneficios-grid">
          
          <div class="beneficio-card">
            <div class="icone-placeholder">✓</div>
            <h3>Qualidade Superior</h3>
            <p>Utilizamos apenas materiais de primeira linha e seguimos rigorosos padrões de qualidade em cada etapa da obra.</p>
          </div>
  
          <div class="beneficio-card">
            <div class="icone-placeholder">✓</div>
            <h3>Pontualidade na Entrega</h3>
            <p>Respeitamos os prazos com um planejamento meticuloso, garantindo a entrega do seu projeto no tempo combinado.</p>
          </div>
  
          <div class="beneficio-card">
            <div class="icone-placeholder">✓</div>
            <h3>Inovação e Tecnologia</h3>
            <p>Aplicamos as mais recentes tecnologias e soluções de engenharia para projetos mais eficientes e sustentáveis.</p>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .beneficios-section {
    padding: 4rem 2rem;
    background-color: var(--cor-branco-escuro);
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .section-titulo {
    font-size: var(--f6);
    font-weight: var(--bold);
    color: var(--cor-azul-escuro);
    margin-bottom: 3rem;
  }
  .beneficios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .beneficio-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .beneficio-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  .icone-placeholder {
    font-size: 2.5rem;
    color: var(--cor-laranja);
    margin-bottom: 1rem;
  }
  .beneficio-card h3 {
    font-size: var(--f3);
    font-weight: var(--bold);
    color: var(--cor-azul-escuro);
    margin-bottom: 0.5rem;
  }
  .beneficio-card p {
    font-size: var(--f1);
    line-height: 1.6;
    color: #555;
  }
  </style>