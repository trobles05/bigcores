<template>
  <section id="secaoporque" ref="sectionRef" class="porque-escolher-section">
    <div class="container">
      <h1>
        Por que escolher a <br />
        <span class="highlight">Big Cores tintas</span> para sua obra
      </h1>

      <div class="content-grid">
        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconParceria" alt="Parceria" />
            </div>
            <h4>Parceria Direta</h4>
            <p>Relacionamento direto com a AkzoNobel para as melhores condições do mercado.</p>
          </div>

          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconAssessoria" alt="Assessoria" />
            </div>
            <h4>Assessoria Técnica</h4>
            <p>Técnicos especialistas para auxiliar na escolha dos produtos ideais.</p>
          </div>
        </div>

        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconVariedade" alt="Variedade" />
            </div>
            <h4>Variedade</h4>
            <p>Ampla variedade de produtos para todas as etapas do seu projeto.</p>
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
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--cor-preto);
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

h1.visible {
  opacity: 1;
  transform: translateY(0);
}

.highlight {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 5px;
}

.highlight::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 60%;
  background: linear-gradient(to right, #4a90e2, #1a2b4c);
  z-index: -1;
  border-radius: 4px;
  transform: rotate(-1deg) skewX(-5deg);
  opacity: 0.9;
  color: white;
}

/* GRID E LINHA CENTRAL */
.content-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.content-grid::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--cor-laranja), transparent);
}

.grid-column {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* CARDS */
.benefit-card {
  position: relative;
  background: #f8fafc;
  padding: 28px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(28px);
  transition: all 0.5s ease;
}

.benefit-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* CONECTORES DESKTOP */
.benefit-card::before {
  content: "";
  position: absolute;
  top: 50%;
  width: 30px;
  height: 2px;
  background: var(--cor-laranja);
}

.benefit-card::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background: var(--cor-laranja);
  border: 3px solid var(--cor-branco);
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

/* Lado Esquerdo */
.grid-column:first-child .benefit-card::before { right: -30px; }
.grid-column:first-child .benefit-card::after  { right: -36px; }

/* Lado Direito */
.grid-column:last-child .benefit-card::before { left: -30px; }
.grid-column:last-child .benefit-card::after  { left: -36px; }

.icon-box {
  width: 44px; height: 44px;
  background: #fff;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.icon-box img { width: 24px; height: 24px; }

h4 { font-size: 1.2rem; font-weight: 700; color: var(--cor-azul-escuro); }
p { font-size: 0.95rem; color: #64748b; line-height: 1.5; }

/* --- RESPONSIVIDADE MOBILE --- */
@media (max-width: 850px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-left: 30px; /* Espaço para a linha lateral */
  }

  /* Move a linha central para a esquerda */
  .content-grid::before {
    left: 0;
    transform: none;
    background: linear-gradient(to bottom, var(--cor-laranja), transparent);
  }

  .grid-column {
    gap: 30px;
  }

  /* Ajusta conectores para o lado esquerdo em todos os cards */
  .benefit-card::before {
    left: -30px !important;
    right: auto !important;
    width: 30px;
  }

  .benefit-card::after {
    left: -36px !important;
    right: auto !important;
  }

  h1 { margin-bottom: 40px; }
  
  .benefit-card {
    padding: 20px;
  }
}
</style>