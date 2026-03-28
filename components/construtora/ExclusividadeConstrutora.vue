<template>
  <section class="benefits">
    <div class="grid">

      <!-- Card 1 -->
      <div class="card">
        <div class="icon">
          <img :src="iconEconomia" alt="Economia" />
        </div>
        <h3>Significant Economy</h3>
        <p>
          Acesso a tabelas de faturamento direto de fábrica, eliminando intermediários e reduzindo custos operacionais em até 40%.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <div class="icon">
          <img :src="iconLogistica" alt="Logística" />
        </div>
        <h3>Efficient Logistics</h3>
        <p>
          Entrega programada diretamente no canteiro de obras, garantindo o cronograma e evitando estoques desnecessários.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="card">
        <div class="icon">
          <img :src="iconAtendimento" alt="Processo" />
        </div>
        <h3>Simplified Process</h3>
        <p>
          Gestão centralizada de pedidos com faturamento facilitado e condições de crédito exclusivas para grandes projetos.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="card">
        <div class="icon">
          <img :src="iconSuporte" alt="Suporte" />
        </div>
        <h3>Dedicated Technical Support</h3>
        <p>
          Visitas técnicas in loco para especificação de produtos e acompanhamento de aplicação em todas as fases.
        </p>
      </div>

      <!-- Card destaque -->
      <div class="card highlight">
        <div class="icon highlight-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="26"
    height="26"
  >
    <path d="M3 9l3-4h12l3 4-9 10-9-10z"/>
    <path d="M6 5l6 14 6-14"/>
    <path d="M3 9h18"/>
  </svg>
</div>
        <div>
          <h3>Quality that Adds Value</h3>
          <p>
            Trabalhamos com a linha Premium da Coral, garantindo durabilidade extrema e acabamento superior que valoriza o m² do seu empreendimento final.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import iconEconomia from "~/assets/images/porcentagemIcone.png";
import iconLogistica from "~/assets/images/processoIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";
import iconQualidade from "~/assets/images/logisticaIcone.png";
import iconAtendimento from "~/assets/images/qualidadeIcone.png";
</script>

<style scoped>
.benefits {
  margin-top: 2.5rem;
  padding: 60px 0;
  background: var(--cor-branco);
  font-family: var(--font-principal);
}

.grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CARD */
.card {
  background: var(--cor-cinza-claro);
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  min-height: 180px;
}

/* ÍCONE */
.icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #eef2f7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

/* TEXTO */
.card h3 {
  font-size: var(--f2);
  font-weight: var(--bold);
  color: var(--cor-preto);
}

.card p {
  font-size: var(--f1);
  color: var(--cor-cinza);
  line-height: 1.5;
}

/* DESTAQUE */
.highlight {
  grid-column: 2 / 4;
  grid-row: 2 / 3;

  background: #0f2a4f;
  color: var(--cor-branco);

  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  padding: 32px;
  border-radius: 12px;
}

.highlight h3 {
  color: var(--cor-branco);
}

.highlight p {
  color: #c7d3e0;
}

/* ÍCONE DESTAQUE */
.highlight-icon {
  background: var(--cor-azul-marinho);
  border-radius: 16%;
  width: 66px;
  height: 46px;
}

.highlight-icon img {
  width: 26px;
  height: 26px;
}

/* RESPONSIVO */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlight {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .highlight {
    grid-column: span 1;
    flex-direction: column;
  }
}
</style>