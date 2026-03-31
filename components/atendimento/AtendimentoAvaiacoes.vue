<template>
  <section class="avaliacoes-section" ref="avaliacoesSection">
    <div class="container">
      <div
        class="avaliacoes-header"
        :class="{ 'is-visible': isVisible.avaliacoes }"
      >
        <span class="section-label">Aprovada por quem entende</span>
        <h2 class="section-title">
          O que nossos <span class="highlight">clientes</span> dizem no Google
        </h2>
        <p class="section-subtitle">
          Temos orgulho de manter uma nota máxima baseada em centenas de
          experiências reais.
        </p>
      </div>

      <div class="reviews-grid" :class="{ 'is-visible': isVisible.avaliacoes }">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="review-card"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="review-header">
            <div class="quote-icon"></div>
            <div class="review-stars">
              <span v-for="n in 5" :key="n">★</span>
            </div>
          </div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-footer">
            <div class="author-avatar">{{ review.author.charAt(0) }}</div>
            <p class="review-author">{{ review.author }}</p>
          </div>
        </div>
      </div>

      <div
        class="google-cta-wrapper"
        :class="{ 'is-visible': isVisible.avaliacoes }"
      >
        <p>Sua experiência também foi incrível?</p>
        <a
          href="https://g.page/r/CUXIz21dKG51EBM/review"
          target="_blank"
          class="google-btn"
        >
          <img :src="googleLogo" alt="Google" class="google-logo" />
          Avaliar no Google
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// Importação da logo local
import googleLogo from "~/assets/images/google.png";

const avaliacoesSection = ref(null);
const isVisible = ref({ avaliacoes: false });

const reviews = ref([
  {
    text: "Muito bem atendido. Preço justo! Pesquisei nas lojas mais famosas de Curitiba e a Big tinha melhor preço num galão Cetol Dek R$ 102,00 mais barato! Parabéns!",
    author: "Rogério Bueno",
  },
  {
    text: "Ótima empresa, funcionários sempre cordiais e muito atenciosos, desde o pessoal das vendas retirando quaisquer dúvidas, financeiro e os motoristas sempre de bom humor.",
    author: "Patricia Comechen",
  },
  {
    text: "Big Cores Tintas te abraça, é Família! Atendimento nota mil de todos os vendedores no geral, Sr. Joel é de uma humildade nunca vista. Loja excelente!",
    author: "Emerson Silva",
  },
  {
    text: "Uma ótima loja com bons profissionais, entendem muito do que estão vendendo e do que precisamos. A vendedora Atelice nos passa muita segurança.",
    author: "Deia Martins",
  },
  {
    text: "Fui muito bem aconselhada quanto à pintura da minha propriedade. A escolha do produto certo visando custo-benefício me poupou de dissabores futuros!",
    author: "Lucimar Precoma",
  },
  {
    text: "Atendimento top das Galáxias, onde tive todo suporte desde a venda até a entrega. Pontuais e prestativos, super indico!",
    author: "Simone Freitas",
  },
]);

let observer;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) isVisible.value.avaliacoes = true;
    },
    { threshold: 0.1 },
  );
  if (avaliacoesSection.value) observer.observe(avaliacoesSection.value);
});
onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
/* Mantive o seu estilo original, apenas garantindo que a logo fique bem ajustada */
.avaliacoes-section {
  padding: 100px 0;
  background: #fbfcfd;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.avaliacoes-header {
  text-align: center;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(20px);
  transition: 0.8s;
}
.avaliacoes-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.section-subtitle {
  color: #64748b;
  max-width: 600px;
  margin: 15px auto 0;
}

.highlight {
  position: relative;
  z-index: 1;
}
.highlight::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 65%;
  height: 30%;
  background: rgba(74, 144, 226, 0.2);
  z-index: -1;
  border-radius: 4px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  opacity: 0;
  transition: 1s 0.2s;
}
.reviews-grid.is-visible {
  opacity: 1;
}

.review-card {
  background: #fff;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.quote-icon::before {
  content: '"';
  font-family: serif;
  font-size: 4rem;
  color: #e2e8f0;
  line-height: 0.5;
  display: block;
  margin-top: 25px;
}
.review-stars {
  color: #fbbf24;
}

.review-text {
  color: #475569;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 25px;
  flex-grow: 1;
  font-size: 0.95rem;
}

.review-footer {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
}
.author-avatar {
  width: 32px;
  height: 32px;
  background: var(--cor-azul-claro, #4a90e2);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
}
.review-author {
  font-weight: 700;
  color: var(--cor-azul-escuro, #1e3a8a);
  font-size: 0.9rem;
}

.google-cta-wrapper {
  text-align: center;
  margin-top: 60px;
  opacity: 0;
  transition: 0.8s 0.5s;
}
.google-cta-wrapper.is-visible {
  opacity: 1;
}
.google-cta-wrapper p {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 20px;
}

.google-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  color: #1e293b;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: 0.3s;
}
.google-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
/* Ajuste de tamanho para o ícone local */
.google-logo {
  width: 20px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 2rem;
  }
}
</style>
