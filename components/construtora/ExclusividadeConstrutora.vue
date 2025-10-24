<template>
  <section id="secaoexclusividade" class="exclusividade-section">
    <div class="container">
      <h2 class="section-titulo">EXCLUSIVIDADE PARA GRANDES PROJETOS</h2>
      <p class="section-subtitulo">
        Benefícios que fazem a diferença no seu projeto
      </p>
    </div>

    <div
      class="exclusividade-scroll"
      ref="scrollContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="exclusividade-card"
      >
        <img :src="card.icon" :alt="card.alt" class="card-icon" />
        <h3 class="card-titulo">{{ card.titulo }}</h3>
        <p class="card-descricao">{{ card.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import iconEconomia from "~/assets/images/porcentagemIcone.png";
import iconLogistica from "~/assets/images/processoIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";
import iconQualidade from "~/assets/images/logisticaIcone.png";
import iconAtendimento from "~/assets/images/qualidadeIcone.png";

const cards = [
  {
    icon: iconEconomia,
    alt: "Ícone de Porcentagem",
    titulo: "Economia Significativa",
    descricao:
      "Descontos que podem chegar a 40% em grandes volumes, reduzindo significativamente seus custos.",
  },
  {
    icon: iconQualidade,
    alt: "Ícone de Selo de Qualidade",
    titulo: "Logística Eficiente",
    descricao:
      "Entrega direta da fábrica para sua obra, com agendamento flexível conforme suas necessidades.",
  },
  {
    icon: iconLogistica,
    alt: "Ícone de Caminhão",
    titulo: "Processo Simplificado",
    descricao: "Faturamento direto da AkzoNobel para obras novas e repintura.",
  },
  {
    icon: iconSuporte,
    alt: "Ícone de Capacete de Obra",
    titulo: "Suporte Técnico Dedicado",
    descricao:
      "Conte com nossa equipe de especialistas para auxiliar na especificação de produtos e suporte total para os desafios da sua obra.",
  },
  {
    icon: iconAtendimento,
    alt: "Ícone de Atendimento",
    titulo: "Qualidade que Valoriza",
    descricao:
      "Garanta um acabamento superior com a marca líder de mercado. A qualidade Coral eleva a percepção de valor do seu empreendimento.",
  },
];

const scrollContainer = ref(null);
let isDown = false;
let startX;
let scrollLeft;

function startDrag(e) {
  isDown = true;
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = scrollContainer.value.scrollLeft;
}

function onDrag(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  const walk = (x - startX) * 1.2;
  scrollContainer.value.scrollLeft = scrollLeft - walk;
}

function stopDrag() {
  isDown = false;
}
</script>

<style scoped>
.exclusividade-section {
  padding: 5rem 0;
  background: linear-gradient(143deg, #f9fafc 30%, #ffffff 100%);
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 120px;
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
  width: 120px;
  height: 4px;
  background-color: var(--cor-laranja);
}

.section-subtitulo {
  font-size: var(--f2);
  color: var(--cor-preto);
  margin-top: 1rem;
  line-height: 1.6;
}

.exclusividade-scroll {
  display: flex;
  gap: 80px;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;
  padding: 6rem 4rem;
  user-select: none;
  scrollbar-width: none;
  margin-left: 120px;
  padding: 3rem 2rem 3rem 0;
}

.exclusividade-scroll::-webkit-scrollbar {
  display: none;
}

.exclusividade-card {
  flex: 0 0 320px;
  background: var(--cor-branco);
  border-radius: 26px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: left;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.exclusividade-card:hover {
  transform: scale(1.05) rotate3d(1, 1, 0, 3deg);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  height: 40px;
  margin-bottom: 1.5rem;
}

.card-titulo {
  font-size: var(--f2);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin-bottom: 1rem;
  position: relative;
}

.card-titulo::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 70px;
  height: 3px;
  background-color: var(--cor-laranja);
}

.card-descricao {
  font-size: var(--f1);
  color: var(--cor-preto);
  opacity: 0.8;
  line-height: 1.6;
}

@media (hover: none) {
  .exclusividade-card:hover {
    transform: none;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.08);
  }

  .exclusividade-scroll {
    cursor: default;
  }
}

@media (max-width: 1000px) {
  .container {
    margin: 0 1.5rem;
    padding: 0;
  }

  .section-titulo {
    font-size: var(--f4);
  }

  .exclusividade-scroll {
    margin-left: 0;
    padding: 2rem 1.5rem;
    gap: 20px;
  }

  .exclusividade-card {
    flex: 0 0 80%;
  }
}

@media (max-width: 480px) {
  .container {
    margin: 0 1rem;
  }

  .exclusividade-scroll {
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    cursor: default;

    padding: 2rem 0;
    gap: 1.5rem;
  }

  .exclusividade-card {
    flex-basis: auto;
    width: 90%;
  }
}
</style>
