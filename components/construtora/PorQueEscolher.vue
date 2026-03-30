<template>
  <section id="secaoporque" ref="sectionRef" class="porque-escolher-section">
    <div class="container">
      <h1>
        Por que escolher a <br />
        <span class="highlight">Big Cores tintas</span> para sua obra
      </h1>

      <div class="content-grid">
        <!-- COLUNA ESQUERDA -->
        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconParceria" alt="Parceria" />
            </div>
            <h4>Parceria Direta</h4>
            <p>
              Relacionamento direto com a AkzoNobel para as melhores condições
              do mercado.
            </p>
          </div>

          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconAssessoria" alt="Assessoria" />
            </div>
            <h4>Assessoria Técnica</h4>
            <p>
              Técnicos especialistas para auxiliar na escolha dos produtos
              ideais.
            </p>
          </div>
        </div>

        <!-- COLUNA DIREITA -->
        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconVariedade" alt="Variedade" />
            </div>
            <h4>Variedade</h4>
            <p>
              Ampla variedade de produtos para todas as etapas do seu projeto.
            </p>
          </div>

          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconSuporte" alt="Suporte" />
            </div>
            <h4>Suporte Personalizado</h4>
            <p>Atendimento dedicado desde o orçamento até a entrega final.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import iconParceria from "~/assets/images/parceriaICone.png";
import iconAssessoria from "~/assets/images/acessoriaIcone.png";
import iconVariedade from "~/assets/images/variedadeIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";

const sectionRef = ref(null)

onMounted(() => {
  const section = sectionRef.value
  if (!section) return

  const cards = section.querySelectorAll('.benefit-card')
  const title = section.querySelector('h1')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  if (title) observer.observe(title)
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 120}ms`
    observer.observe(card)
  })
})
</script>

<style scoped>
.porque-escolher-section {
  padding: 80px 20px;
  background: var(--cor-branco);
  font-family: var(--font-principal);
}

.container {
  max-width: 1100px;
  margin: 8rem auto;
}

/* TÍTULO */
h1 {
  font-size: var(--f5);
  font-weight: var(--bold);
  color: var(--cor-preto);
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.2;

  /* Animação */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

h1.visible {
  opacity: 1;
  transform: translateY(0);
}

/* EFEITO DE TEXTO SELECIONADO */
.highlight {
  position: relative;
  z-index: 1;
  display: inline-block;
}

.highlight::before {
  content: "";
  position: absolute;
  left: -8px;
  right: -8px;
  top: 50%;
  height: 65%;
  background: linear-gradient(
    to right,
    var(--cor-azul-claro),
    var(--cor-azul-marinho)
  );
  z-index: -1;
  border-radius: 6px;
  transform: rotate(-2deg) skewX(-5deg);
  opacity: 0.9;
}

/* GRID */
.content-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

/* LINHA CENTRAL */
.content-grid::before {
  content: "";
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--cor-laranja),
    transparent
  );
  opacity: 0.6;
}

/* COLUNAS */
.grid-column {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* CARD */
.benefit-card {
  position: relative;
  background: var(--cor-cinza-claro);
  padding: 28px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, opacity 0.5s ease, box-shadow 0.25s ease;

  /* Animação */
  opacity: 0;
  transform: translateY(28px);
}

.benefit-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.benefit-card:hover {
  transform: translateY(-4px);
}

/* CONECTOR */
.benefit-card::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 2px;
  background: var(--cor-laranja);
  opacity: 0.7;
}

.benefit-card::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: var(--cor-laranja);
  border-radius: 50%;
}

.grid-column:first-child .benefit-card::before { right: -18px; }
.grid-column:first-child .benefit-card::after  { right: -27px; }
.grid-column:last-child  .benefit-card::before { left: -18px;  }
.grid-column:last-child  .benefit-card::after  { left: -27px;  }

/* ÍCONE */
.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #eef2f7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

/* TEXTO */
.benefit-card h4 {
  font-size: var(--f2);
  font-weight: var(--bold);
  color: var(--cor-preto);
}

.benefit-card p {
  font-size: var(--f1);
  color: var(--cor-cinza);
  line-height: 1.5;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-grid::before,
  .benefit-card::before,
  .benefit-card::after {
    display: none;
  }

  .grid-column {
    gap: 24px;
  }
}
</style>