<template>
  <div class="quem-somos">
    <section class="hero-section">
      <div
        class="hero-image-wrapper"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
      >
        <img :src="bannerSobreNos" alt="Banner Sobre Nós" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in-up">Quem Somos</h1>
        <p class="hero-subtitle animate-fade-in-up delay-2">
          Mais de 28 anos colorindo histórias
        </p>
        <div class="hero-line animate-fade-in-up delay-3"></div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
      </div>
    </section>

    <section class="historia-section" ref="historiaSection">
      <div class="container">
        <div
          class="historia-grid"
          :class="{ 'is-visible': isVisible.historia }"
        >
          <div class="historia-text">
            <span class="section-label">Nossa História</span>
            <h2 class="section-title">
              Uma jornada de <span class="highlight">cores e dedicação</span>
            </h2>
            <div class="historia-content">
              <p>
                A <strong>Big Cores Tintas</strong> foi fundada em 1995 na
                cidade de São José dos Pinhais (PR) e conta hoje com 7 lojas
                especializadas no segmento imobiliário, automotivo e industrial.
              </p>
              <p>
                Ao longo desses mais de 28 anos, nos orgulhamos de ter
                construído uma história pautada na
                <strong class="highlight-text"
                  >ética, responsabilidade e respeito</strong
                >. Essa conduta se aplica tanto no atendimento ao cliente,
                quanto no tratamento com todos os funcionários.
              </p>
            </div>
          </div>

          <div class="historia-visual">
            <div class="visual-bg"></div>
            <div class="visual-card">
              <div class="visual-content">
                <img
                  :src="matrizValores"
                  alt="Matriz Big Cores"
                  class="matriz-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section" ref="statsSection">
      <div class="stats-bg-blur blur-1"></div>
      <div class="stats-bg-blur blur-2"></div>

      <div class="container">
        <div class="stats-grid">
          <div
            class="stat-card"
            @mouseenter="hoveredStat = 0"
            @mouseleave="hoveredStat = null"
          >
            <div class="stat-number">{{ displayCounters.anos }}+</div>
            <div class="stat-label">Anos de História</div>
          </div>
          <div
            class="stat-card orange"
            @mouseenter="hoveredStat = 1"
            @mouseleave="hoveredStat = null"
          >
            <div class="stat-number">{{ displayCounters.lojas }}</div>
            <div class="stat-label">Lojas Especializadas</div>
          </div>
          <div
            class="stat-card"
            @mouseenter="hoveredStat = 2"
            @mouseleave="hoveredStat = null"
          >
            <div class="stat-number">
              {{ displayCounters.clientes.toLocaleString("pt-BR") }}+
            </div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section" ref="timelineSection">
      <div class="container">
        <div
          class="timeline-header"
          :class="{ 'is-visible': isVisible.timeline }"
        >
          <span class="section-label">Nossa Trajetória</span>
          <h2 class="section-title">Linha do Tempo</h2>
        </div>

        <div class="timeline">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="timeline-item"
            :class="{
              'is-visible': isVisible.timeline,
              'is-right': index % 2 === 1,
            }"
            :style="{ transitionDelay: `${index * 0.1}s` }"
          >
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-desc">{{ item.desc }}</p>
            </div>
            <div class="timeline-dot"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="valores-section" ref="valoresSection">
      <div class="container">
        <div
          class="valores-header"
          :class="{ 'is-visible': isVisible.valores }"
        >
          <span class="section-label">Nossos Pilares</span>
          <h2 class="section-title">Valores que nos guiam</h2>
        </div>

        <div class="valores-grid">
          <div
            v-for="(valor, index) in valores"
            :key="index"
            class="valor-card"
            :class="{ 'is-visible': isVisible.valores }"
            :style="{ transitionDelay: `${index * 0.1}s` }"
            @mouseenter="hoveredValor = index"
            @mouseleave="hoveredValor = null"
          >
            <img :src="valor.image" :alt="valor.title" class="valor-icon" />
            <h3 class="valor-title">{{ valor.title }}</h3>
            <p class="valor-desc">{{ valor.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="compromisso-section" ref="compromissoSection">
      <div class="container">
        <div
          class="compromisso-content"
          :class="{ 'is-visible': isVisible.compromisso }"
        >
          <div class="compromisso-icon">💼</div>
          <h2 class="compromisso-title">Nosso Compromisso</h2>
          <p class="compromisso-text">
            Acreditamos que a valorização de colaboradores é primordial para
            oferecer um atendimento de excelência. Investimos periodicamente na
            capacitação e treinamento de todos os nossos colaboradores e desta
            forma buscamos sanar da melhor forma possível as necessidades de
            nossos clientes.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import bannerSobreNos from "~/assets/images/bannerSobre-nos.png";
import matrizValores from "~/assets/images/matrizLoja.png";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useLinkState } from "~/composables/useLinkState";

import alvo from "~/assets/images/alvo.png";
import parceriaIcone from "~/assets/images/parceriaIcone.png";
import selequalidade from "~/assets/images/trofel.png";
import grafico from "~/assets/images/grafico.png";
import suporteIcone from "~/assets/images/suporteIcone.png";
import acessoriaIcone from "~/assets/images/acessoriaIcone.png";

const { setPageLinks } = useLinkState();

const linksDaPagina = ref([
  { text: "Endereço", path: "/endereco" },
  { text: "Atendimento ao cliente", path: "/atendimento" },
  { text: "Atendimento a emrpesa", path: "/construtora" },
]);

const scrollY = ref(0);
const hoveredStat = ref(null);
const hoveredValor = ref(null);

const historiaSection = ref(null);
const statsSection = ref(null);
const timelineSection = ref(null);
const valoresSection = ref(null);
const compromissoSection = ref(null);

const isVisible = ref({
  historia: false,
  stats: false,
  timeline: false,
  valores: false,
  compromisso: false,
});

const counters = ref({
  anos: 0,
  lojas: 0,
  clientes: 0,
});
const displayCounters = computed(() => counters.value);

const timeline = [
  {
    year: "1995",
    title: "Fundação",
    desc: "Nascemos em São José dos Pinhais com o sonho de revolucionar o mercado de tintas",
  },
  {
    year: "2000",
    title: "Expansão",
    desc: "Abrimos nossa segunda loja e ampliamos o portfólio de produtos",
  },
  {
    year: "2010",
    title: "Consolidação",
    desc: "Chegamos a 4 lojas e nos tornamos referência regional",
  },
  {
    year: "2020",
    title: "Modernização",
    desc: "Investimento em tecnologia e capacitação contínua da equipe",
  },
  {
    year: "2025",
    title: "Hoje",
    desc: "7 lojas, mais de 100 mil clientes satisfeitos e crescendo sempre",
  },
];

const valores = [
  {
    image: alvo,
    title: "Ética",
    desc: "Agimos com transparência e honestidade em todas as nossas relações",
  },
  {
    image: parceriaIcone,
    title: "Respeito",
    desc: "Valorizamos cada pessoa que faz parte da nossa jornada",
  },
  {
    image: selequalidade,
    title: "Excelência",
    desc: "Buscamos sempre superar expectativas e entregar o melhor",
  },
  {
    image: grafico,
    title: "Responsabilidade",
    desc: "Comprometidos com nossos clientes, equipe e comunidade",
  },
  {
    image: suporteIcone,
    title: "Inovação",
    desc: "Evoluímos constantemente para melhor atender você",
  },
  {
    image: acessoriaIcone,
    title: "Qualidade",
    desc: "Oferecemos apenas produtos e serviços de alta performance",
  },
];

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const animateCounters = () => {
  const duration = 2000;
  const steps = 60;
  const increment = duration / steps;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    const progress = step / steps;
    counters.value = {
      anos: Math.floor(28 * progress),
      lojas: Math.floor(7 * progress),
      clientes: Math.floor(100000 * progress),
    };
    if (step >= steps) clearInterval(timer);
  }, increment);
};

onMounted(() => {
  setTimeout(() => {
    setPageLinks({
      nav: linksDaPagina.value,
      atalhos: linksDaPagina.value,
      info: [],
      atendimento: [],
    });
  }, 0);

  window.addEventListener("scroll", handleScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === historiaSection.value) {
          isVisible.value.historia = entry.isIntersecting;
        }
        if (
          entry.target === statsSection.value &&
          entry.isIntersecting &&
          counters.value.anos === 0
        ) {
          isVisible.value.stats = true;
          animateCounters();
        }
        if (entry.target === timelineSection.value) {
          isVisible.value.timeline = entry.isIntersecting;
        }
        if (entry.target === valoresSection.value) {
          isVisible.value.valores = entry.isIntersecting;
        }
        if (entry.target === compromissoSection.value) {
          isVisible.value.compromisso = entry.isIntersecting;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (historiaSection.value) observer.observe(historiaSection.value);
  if (statsSection.value) observer.observe(statsSection.value);
  if (timelineSection.value) observer.observe(timelineSection.value);
  if (valoresSection.value) observer.observe(valoresSection.value);
  if (compromissoSection.value) observer.observe(compromissoSection.value);
});

onUnmounted(() => {
  setPageLinks({
    nav: [],
    atalhos: [],
    info: [],
    atendimento: [],
  });
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.quem-somos {
  background: linear-gradient(to bottom, var(--cor-branco), var(--cor-branco-escuro));
  min-height: 100vh;
}

.container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-label {
  color: var(--cor-preto);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--cor-azul-escuro);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight {
  color: var(--cor-laranja);
}

.highlight-text {
  color: var(--cor-laranja);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollWheel {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(0.5rem);
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--cor-azul-escuro) 10%,
    rgba(0, 0, 0, 0.6) 60%,
    var(--cor-laranja) 100%
  );
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  max-width: 80rem;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 800;
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--cor-azul-bb);
  font-weight: 300;
  line-height: 1.5;
}

.hero-line {
  width: 6rem;
  height: 0.25rem;
  background: var(--cor-laranja);
  margin: 3rem auto 0;
  border-radius: 9999px;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.delay-2 {
  animation-delay: 0.4s;
}

.delay-3 {
  animation-delay: 0.6s;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 1.5rem;
  height: 2.5rem;
  border: 2px solid var(--cor-cinza);
  border-radius: 9999px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
}

.scroll-wheel {
  width: 0.375rem;
  height: 0.75rem;
  background: var(--cor-cinza-claro);
  border-radius: 9999px;
  animation: scrollWheel 2s ease-in-out infinite;
}

.historia-section {
  padding: 8rem 0;
}

.historia-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.historia-grid.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.historia-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.125rem;
  color: var(--cor-preto);
  line-height: 1.7;
}

.historia-visual {
  position: relative;
}

.visual-bg {
  position: absolute;
  inset: 0;
  background: var(--degrade-azul);
  border-radius: 1.5rem;
  transform: rotate(6deg);
}

.visual-card {
  position: relative;
  background:var(--cor-branco);
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  transform: rotate(0);
  transition: transform 0.5s ease;
}

.visual-card:hover {
  transform: rotate(-2deg);
}

.visual-content {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #dbeafe, #fed7aa);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.matriz-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.paint-brush-icon {
  font-size: 6rem;
  animation: spin 20s linear infinite;
}

.stats-section {
  padding: 6rem 0;
  background: linear-gradient(to right, var(--cor-azul-marinho) 8%, var(--cor-azul-escuro) 30%);
  position: relative;
  overflow: hidden;
}

.stats-bg-blur {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  opacity: 0.1;
  animation: pulse 3s ease-in-out infinite;
}

.blur-1 {
  top: 5rem;
  left: 2.5rem;
  width: 18rem;
  height: 18rem;
  background: #ea580c;
}

.blur-2 {
  bottom: 5rem;
  right: 2.5rem;
  width: 24rem;
  height: 24rem;
  background: var(--cor-azul-escuro);
  animation-delay: 1s;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  z-index: 10;
}

.stat-card {
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.stat-card:hover {
  transform: scale(1.1);
}

.stat-number {
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 800;
  color: var(--cor-branco);
  margin-bottom: 1rem;
}

.stat-card.orange .stat-number {
  color: var(--cor-laranja);
}

.stat-label {
  font-size: 1.5rem;
  color: var(--cor-branco-escuro);
}

.timeline-section {
  padding: 8rem 0;
}

.timeline-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.timeline-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--cor-azul-marinho), var(--cor-laranja));
  transform: translateX(-50%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.6s ease-out;
}

.timeline-item.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item.is-right {
  transform: translateX(50px);
}

.timeline-item.is-right.is-visible {
  transform: translateX(0);
}

.timeline-content {
  background: var(--cor-branco-escuro);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-item:nth-child(even) .timeline-content:first-child {
  text-align: left;
}

.timeline-item:nth-child(odd) .timeline-content:last-child {
  text-align: left;
}

.timeline-item:nth-child(odd) .timeline-content:first-child {
  text-align: right;
}

.timeline-content:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}

.timeline-dot {
  width: 1.5rem;
  height: 1.5rem;
  background: var(--cor-laranja);
  border-radius: 9999px;
  border: 4px solid white;
  box-shadow: 0 0 0 4px var(--cor-azul-escuro);
  position: relative;
  z-index: 10;
}

.timeline-year {
  font-size: 2rem;
  font-weight: 800;
  color: var(--cor-preto);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cor-preto);
  margin-bottom: 0.5rem;
}

.timeline-desc {
  color: var(--cor-cinza-escuro);
  line-height: 1.6;
}

.valores-section {
  padding: 8rem 0;
  background: var(--cor-branco);
}

.valores-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.valores-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.valores-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.valor-card {
  background: var(--cor-branco);
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
  cursor: pointer;
}

.valor-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.valor-card:hover {
  transform: translateY(-10px) rotateY(5deg);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}

.valor-icon {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  margin-bottom: 1rem;
}

.valor-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cor-azul-escuro);
  margin-bottom: 0.75rem;
}

.valor-desc {
  color: var(--cor-cinza-escuro);
  line-height: 1.6;
}
.compromisso-section {
  padding: 8rem 0;
  background: linear-gradient(155deg, var(--cor-azul-escuro) 40%, var(--cor-laranja));
}

.compromisso-content {
  text-align: center;
  max-width: 50rem;
  margin: 0 auto;
  color: white;
  opacity: 0;
  transform: scale(0.9);
  transition: all 1s ease-out;
}

.compromisso-content.is-visible {
  opacity: 1;
  transform: scale(1);
}

.compromisso-icon {
  font-size: 5rem;
  margin-bottom: 2rem;
  animation: float 3s ease-in-out infinite;
}

.compromisso-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.compromisso-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #e0e7ff;
}

@media (min-width: 768px) {
  .historia-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .valores-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .valores-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .timeline::before {
    left: 1rem;
    transform: translateX(0); 
  }

  .timeline-item {
    grid-template-columns: auto 1fr;
    gap: 1.5rem; 
  }

  .timeline-content {
    grid-column: 2 / 3; 
    text-align: left !important;
  }

  .timeline-dot {
    grid-column: 1 / 2; 
    grid-row: 1;
  }
  .timeline-item,
  .timeline-item.is-right {
    transform: translateX(30px); 
  }

  .timeline-item.is-visible,
  .timeline-item.is-right.is-visible {
    transform: translateX(0);
  }

  .timeline-item:nth-child(odd) .timeline-content:first-child {
    text-align: left;
  }
}

@media (hover: none) {
  .visual-card:hover {
    transform: rotate(0);
  }

  .stat-card:hover {
    transform: scale(1);
  }

  .timeline-content:hover {
    transform: scale(1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .valor-card:hover {
    transform: translateY(0) rotateY(0);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}
</style>
