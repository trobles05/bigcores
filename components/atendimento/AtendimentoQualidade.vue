<template>
  <section id="secaoporque-qualidade" ref="sectionRef" class="porque-escolher-section">
    <div class="container">
      <h2 class="section-title">
        O Padrão de <span class="highlight">Qualidade</span> que Você Exige
      </h2>
      <p class="section-subtitle">Por que profissionais e clientes exigentes escolhem a Big Cores Tintas</p>

      <div class="content-grid">
        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconAtendimento" alt="Atendimento" />
            </div>
            <h4>Atendimento especializado</h4>
            <p>Equipe técnica de vendedores especialistas, técnicos e coloristas prontos para te ajudar.</p>
          </div>

          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconFrete" alt="Frete" />
            </div>
            <h4>Frete Grátis</h4>
            <p>Entregamos para Curitiba e RM sem custo adicional para pedidos acima de R$ 100,00.</p>
          </div>
        </div>

        <div class="grid-column">
          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconQualidade" alt="Qualidade" />
            </div>
            <h4>Qualidade Certificada</h4>
            <p>Produtos das melhores marcas, testados e aprovados por profissionais do setor.</p>
          </div>

          <div class="benefit-card">
            <div class="icon-box">
              <img :src="iconSolucoes" alt="Soluções" />
            </div>
            <h4>Soluções para Todo Projeto</h4>
            <p>Do automotivo ao residencial, temos a linha completa de ferramentas e suprimentos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import iconAtendimento from "~/assets/images/atendimentoIcone.png";
import iconFrete from "~/assets/images/logisticaIcone.png";
import iconQualidade from "~/assets/images/qualidadeIcone.png";
import iconSolucoes from "~/assets/images/palhetaIcone.png";

const sectionRef = ref(null)

onMounted(() => {
  const section = sectionRef.value
  if (!section) return

  const cards = section.querySelectorAll('.benefit-card')
  const title = section.querySelector('.section-title')

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
  padding: 100px 20px;
  background: var(--cor-branco);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* TÍTULO E SUBTÍTULO */
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--cor-preto);
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 60px;
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
  padding: 30px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

.grid-column:first-child .benefit-card::before { right: -30px; }
.grid-column:first-child .benefit-card::after  { right: -36px; }
.grid-column:last-child .benefit-card::before { left: -30px; }
.grid-column:last-child .benefit-card::after  { left: -36px; }

/* ÍCONE */
.icon-box {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.icon-box img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

h4 { font-size: 1.25rem; font-weight: 700; color: var(--cor-azul-escuro); }
p { font-size: 1rem; color: #64748b; line-height: 1.6; }

/* --- RESPONSIVIDADE MOBILE --- */
@media (max-width: 850px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-left: 30px;
  }

  .content-grid::before {
    left: 0;
    transform: none;
    background: linear-gradient(to bottom, var(--cor-laranja), transparent);
  }

  .grid-column {
    gap: 30px;
  }

  .benefit-card::before {
    left: -30px !important;
    right: auto !important;
  }

  .benefit-card::after {
    left: -36px !important;
    right: auto !important;
  }

  .benefit-card {
    padding: 25px;
  }

  .section-subtitle {
    margin-bottom: 40px;
  }
}
</style>