<template>
  <section class="porque-escolher-section">
    <div class="container">
      <div class="section-header">
        <h2>O Padrão de Qualidade que Você Exige</h2>
        <div class="title-underline"></div>
        <p>
          Por que profissionais e clientes exigentes escolhem a Big Cores Tintas
        </p>
      </div>

      <div class="content-grid">
        <div class="grid-column">
          <div class="benefit-card">
            <img
              :src="iconAtendimento"
              alt="Ícone de Atendimento"
              class="card-icon"
            />
            <h4>Atendimento especializado</h4>
            <p>
              Equipe técnica de vendedores especialistas, técnicos e coloristas.
            </p>
          </div>
          <div class="benefit-card">
            <img :src="iconFrete" alt="Ícone de Frete" class="card-icon" />
            <h4>Frete Grátis</h4>
            <p>
              Entregamos para Curitiba e RM sem custo adicional para pedidos
              acima de R$ 100,00.
            </p>
          </div>
        </div>

        <div class="grid-column">
          <div class="benefit-card">
            <img
              :src="iconQualidade"
              alt="Ícone de Qualidade"
              class="card-icon"
            />
            <h4>Qualidade Certificada</h4>
            <p>
              Produtos das melhores marcas, testados e aprovadas por
              profissionais do setor.
            </p>
          </div>
          <div class="benefit-card">
            <img
              :src="iconSolucoes"
              alt="Ícone de Soluções"
              class="card-icon"
            />
            <h4>Soluções para Todo Projeto</h4>
            <p>
              Do automotivo ao residencial, temos a linha completa de tintas,
              ferramentas e suprimentos para garantir o melhor resultado em
              qualquer superfície.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconAtendimento from "~/assets/images/atendimentoIcone.png";
import iconFrete from "~/assets/images/logisticaIcone.png";
import iconQualidade from "~/assets/images/qualidadeIcone.png";
import iconSolucoes from "~/assets/images/palhetaIcone.png";
</script>

<style scoped>
.porque-escolher-section {
  background-color: var(--cor-branco-escuro);
  padding: 120px 40px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.section-header h2 {
  font-size: var(--f5);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin: 0 0 10px 0;
}
.title-underline {
  width: 80px;
  height: 4px;
  background-color: var(--cor-laranja);
  margin: 0 auto 15px auto;
}
.section-header p {
  font-size: var(--f2);
  color: var(--cor-cinza-escuro);
  margin: 0;
}

.content-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.content-grid::before {
  content: "";
  position: absolute;
  top: 1%;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  background-color: var(--cor-laranja);
  z-index: 1;
}

.grid-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 4rem;
}

.benefit-card {
  position: relative;
  background-color: var(--cor-branco);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  z-index: 2;
}

.benefit-card::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  width: 2rem;
  background-color: var(--cor-laranja);
}
.grid-column:first-child .benefit-card::before {
  right: -2rem;
}
.grid-column:last-child .benefit-card::before {
  left: -2rem;
}

.card-icon {
  height: 32px;
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
  color: var(--cor-cinza-escuro);
  line-height: 1.5;
}

@media (max-width: 1000px) {
  .porque-escolher-section {
    padding: 4rem 1.5rem;
  }

  .section-header h2 {
    font-size: var(--f4);
  }
  .section-header p {
    font-size: var(--f2);
  }

  .content-grid {
    gap: 2rem;
  }

  .grid-column {
    gap: 2rem;
  }

  .benefit-card::before {
    width: 1rem;
  }
  .grid-column:first-child .benefit-card::before {
    right: -1rem;
  }
  .grid-column:last-child .benefit-card::before {
    left: -1rem;
  }

  .benefit-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
  .card-icon {
    height: 28px;
    margin-bottom: 0.5rem;
  }
  .benefit-card h4 {
    font-size: var(--f2);
  }
  .benefit-card p {
    font-size: var(--f1);
    line-height: 1.4;
  }
}

@media (max-width: 380px) {
  .porque-escolher-section {
    padding: 3rem 1rem;
  }

  .content-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .content-grid::before {
    display: none;
  }

  .benefit-card::before {
    display: none;
  }

  .benefit-card {
    text-align: center;
    padding: 1.5rem 1rem;
  }
}
</style>
