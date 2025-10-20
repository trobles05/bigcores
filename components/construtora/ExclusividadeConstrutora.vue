<template>
  <section class="exclusividade-section">
    <div class="container">
      <h2 class="section-titulo">EXCLUSIVIDADE PARA GRANDES PROJETOS</h2>
      <p class="section-subtitulo">
        Benefícios que fazem a diferença no seu projeto
      </p>
    </div>

    <div class="exclusividade-grid">
      <div class="exclusividade-card">
        <img :src="iconEconomia" alt="Ícone de Porcentagem" class="card-icon" />
        <h3 class="card-titulo">Economia Significativa</h3>
        <p class="card-descricao">
          Descontos que podem chegar a 40% em grandes volumes, reduzindo
          significativamente seus custos.
        </p>
      </div>

      <div class="exclusividade-card">
        <img
          :src="iconQualidade"
          alt="Ícone de Selo de Qualidade"
          class="card-icon"
        />
        <h3 class="card-titulo">Logística Eficiente</h3>
        <p class="card-descricao">
          Entrega direta da fábrica para sua obra, com agendamento flexível
          conforme suas necessidades.
        </p>
      </div>

      <div class="exclusividade-card">
        <img :src="iconLogistica" alt="Ícone de Caminhão" class="card-icon" />
        <h3 class="card-titulo">Processo Simplificado</h3>
        <p class="card-descricao">
          Faturamento direto da AkzoNobel para obras novas e repintura.
        </p>
      </div>

      <div class="exclusividade-card">
        <img
          :src="iconSuporte"
          alt="Ícone de Capacete de Obra"
          class="card-icon"
        />
        <h3 class="card-titulo">Suporte Técnico Dedicado</h3>
        <p class="card-descricao">
          Conte com nossa equipe de especialistas para auxiliar na especificação
          de produtos e suporte total para os desafios da sua obra.
        </p>
      </div>

      <div class="exclusividade-card">
        <img
          :src="iconAtendimento"
          alt="Ícone de Atendimento"
          class="card-icon"
        />
        <h3 class="card-titulo">Qualidade que Valoriza</h3>
        <p class="card-descricao">
          Garanta um acabamento superior com a marca líder de mercado. A
          qualidade Coral eleva a percepção de valor do seu empreendimento.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconEconomia from "~/assets/images/porcentagemIcone.png";
import iconLogistica from "~/assets/images/presenteIcone.png";
import iconSuporte from "~/assets/images/presenteIcone.png";
import iconQualidade from "~/assets/images/presenteIcone.png";
import iconAtendimento from "~/assets/images/presenteIcone.png";
</script>

<style scoped>
.exclusividade-section {
  padding: 4rem 0 6rem 120px;
  background-color: var(--cor-branco); 
  overflow: hidden;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.section-titulo {
  font-size: var(--f5);
  color: var(--cor-azul-escuro); 
  font-weight: var(--bold); 
  position: relative;
  padding-bottom: 0.5rem;
}

.section-titulo::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 38%;
  max-width: 250px;
  height: 4px; 
  background-color: var(--cor-laranja); 
  z-index: 1;
}

.section-subtitulo {
  font-size: var(--f2);
  color: var(--cor-prto); 
  opacity: 0.9;
  margin: 2rem;
  line-height: 1.5;
}

.exclusividade-grid {
  display: flex;
  gap: 60px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  position: relative;
  padding-bottom: 1.5rem;
}

.exclusividade-grid::before,
.exclusividade-grid::after {
  content: "";
  position: sticky;
  top: 0;
  width: 50px;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.exclusividade-grid::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
.exclusividade-grid::-webkit-scrollbar-thumb {
  background: var(--degrade-azul);
  border-radius: 26px;
}
.exclusividade-grid::-webkit-scrollbar-track {
  background: var(--cor-cinza-claro);
}

.exclusividade-card {
  flex-shrink: 0;
  width: 340px;
  background-color: var(--cor-branco);
  padding: 2rem 1.5rem;
  border-radius: 26px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: left;
  border: 1px solid var(--cor-cinza-claro);
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-icon {
  height: 32px;
  margin-bottom: 1rem;
}
.card-titulo {
  position: relative;
  font-size: var(--f2);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
}
.card-titulo::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 3px;
  background-color: var(--cor-laranja);
}
.card-descricao {
  font-size: var(--f1);
  line-height: 1.6;
  color: var(--cor-preto);
  opacity: 0.8;
}
</style>