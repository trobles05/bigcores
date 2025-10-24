<template>
  <section id="secaoporque" class="porque-escolher-section">
    <div class="container">
      <div class="title-capsule">
        <h2>POR QUE ESCOLHER A BIG CORES TINTAS?</h2>
      </div>

      <div class="content-grid">
        <div class="grid-column">
          <div class="benefit-card">
            <img
              :src="iconParceria"
              alt="Ícone de Parceria"
              class="card-icon"
            />
            <h4>Parceria Direta</h4>
            <p>
              Relacionamento direto com a AkzoNobel para as melhores condições
              do mercado.
            </p>
          </div>
          <div class="benefit-card">
            <img
              :src="iconAssessoria"
              alt="Ícone de Assessoria"
              class="card-icon"
            />
            <h4>Assessoria Técnica</h4>
            <p>
              Técnicos especialistas para auxiliar na escolha dos produtos
              ideais.
            </p>
          </div>
        </div>

        <div class="grid-column">
          <div class="benefit-card">
            <img
              :src="iconVariedade"
              alt="Ícone de Variedade"
              class="card-icon"
            />
            <h4>Variedade</h4>
            <p>
              Além da parceria com a Tintas Coral, oferecemos uma ampla
              variedade de produtos para todas as etapas do seu projeto - da
              preparação ao acabamento.
            </p>
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
import iconParceria from "~/assets/images/parceriaICone.png";
import iconAssessoria from "~/assets/images/acessoriaIcone.png";
import iconVariedade from "~/assets/images/variedadeIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";
</script>

<style scoped>
.porque-escolher-section {
  background-color: var(--cor-cinza-escuro);
  padding: 0 2rem 10rem 6rem;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}
.title-capsule {
  margin-top: -30px;
  display: inline-block;
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 10;
}
.title-capsule h2 {
  font-size: var(--f3);
  font-weight: var(--bold);
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
  gap: 6rem;
}

.benefit-card {
  position: relative;
  background-color: var(--cor-branco-escuro);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  color: var(--cor-preto);
  line-height: 1.5;
}

@media (max-width: 1000px) {
  .porque-escolher-section {
    padding: 4rem 1.5rem;
  }
  .title-capsule {
    margin-top: 0;
    margin-bottom: 3rem;
  }
  .title-capsule h2 {
    font-size: var(--f2);
  }

  .content-grid {
    gap: 2rem;
  }
  .grid-column {
    gap: 3rem;
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
  }
  .benefit-card h4 {
    font-size: var(--f2);
  }
  .benefit-card p {
    font-size: var(--f1);
  }
}

@media (max-width: 380px) {
  .porque-escolher-section {
    padding: 5rem 1rem;
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
