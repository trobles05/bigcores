<template>
    <section class="porque-escolher-section">
      <div class="container">
        <div class="title-capsule">
          <h2>POR QUE ESCOLHER A BIG CORES TINTAS?</h2>
        </div>
  
        <div class="content-grid">
          <div class="grid-column">
            <div class="benefit-card">
              <img :src="iconParceria" alt="Ícone de Parceria" class="card-icon" />
              <h4>Parceria Direta</h4>
              <p>Relacionamento direto com a AkzoNobel para as melhores condições do mercado.</p>
            </div>
            <div class="benefit-card">
              <img :src="iconAssessoria" alt="Ícone de Assessoria" class="card-icon" />
              <h4>Assessoria Técnica</h4>
              <p>Técnicos especialistas para auxiliar na escolha dos produtos ideais.</p>
            </div>
          </div>
  
          <div class="grid-column">
            <div class="benefit-card">
              <img :src="iconVariedade" alt="Ícone de Variedade" class="card-icon" />
              <h4>Variedade</h4>
              <p>Além da parceria com a Tintas Coral, oferecemos uma ampla variedade de produtos para todas as etapas do seu projeto - da preparação ao acabamento.</p>
            </div>
            <div class="benefit-card">
              <img :src="iconSuporte" alt="Ícone de Suporte" class="card-icon" />
              <h4>Suporte Personalizado</h4>
              <p>Atendimento dedicado desde o orçamento até a entrega final.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // ⚠️ AÇÃO NECESSÁRIA: Substitua os caminhos pelos seus arquivos de ícone
  import iconParceria from '~/assets/images/whatsappIcone.png';
  import iconAssessoria from '~/assets/images/whatsappIcone.png';
  import iconVariedade from '~/assets/images/whatsappIcone.png';
  import iconSuporte from '~/assets/images/whatsappIcone.png';
    </script>
  
  <style scoped>
  .porque-escolher-section {
    background-color: #3a3a3a; /* Cor de fundo escura da seção */
    padding: 4rem 2rem;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  .title-capsule {
    display: inline-block;
    background-color: var(--cor-azul-escuro);
    color: var(--cor-branco);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    margin-bottom: 3rem;
  }
  .title-capsule h2 {
    font-size: var(--f3);
    font-weight: var(--bold);
    text-transform: uppercase;
    margin: 0;
  }
  
  /* A estrutura principal que cria o layout com a linha no meio */
  .content-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Duas colunas de tamanho igual */
    gap: 4rem; /* Espaço entre as colunas */
  }
  
  /* A linha vertical laranja no centro do grid */
  .content-grid::before {
    content: '';
    position: absolute;
    top: 10%; /* Começa um pouco abaixo para alinhar com os cards */
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    background-color: var(--cor-laranja);
    z-index: 1;
  }
  
  .grid-column {
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* Distribui os cards verticalmente */
    gap: 4rem;
  }
  
  .benefit-card {
    position: relative;
    background-color: #f0f0f0; /* Fundo cinza claro dos cards */
    padding: 1.5rem;
    border-radius: 12px;
    text-align: left;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    z-index: 2; /* Garante que os cards fiquem na frente da linha */
  }
  
  /* As linhas horizontais que conectam os cards à linha central */
  .benefit-card::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 3px;
    width: 2rem; /* Comprimento da linha horizontal */
    background-color: var(--cor-laranja);
  }
  /* Linha para os cards da esquerda */
  .grid-column:first-child .benefit-card::before {
    right: -2rem;
  }
  /* Linha para os cards da direita */
  .grid-column:last-child .benefit-card::before {
    left: -2rem;
  }
  
  .card-icon {
    height: 28px;
    margin-bottom: 0.75rem;
  }
  .benefit-card h4 {
    font-size: var(--f2);
    font-weight: var(--bold);
    color: var(--cor-azul-escuro);
    margin-bottom: 0.5rem;
  }
  .benefit-card p {
    font-size: var(--f1);
    color: #555;
    line-height: 1.5;
  }
  </style>