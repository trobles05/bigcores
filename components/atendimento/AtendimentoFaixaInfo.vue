<template>
  <section class="wrapper-section" ref="statsSectionRef">
    <div class="info-wrapper">
      <div class="info-card">
        <img :src="presenteIcone" alt="Ícone de presente" class="info-icon" />
        <div class="info-text">
          <p class="info-title">3% OFF no primeiro pedido!</p>
          <p class="info-subtitle">
            Use o cupom: <span class="cupom">primeiracompra</span>
          </p>
        </div>
      </div>
      
      <div class="info-card paint-card">
        <div class="paint-icon-wrapper">
          <img
            :src="rolotintaIcone"
            alt="Ícone de rolo de tinta"
            class="info-icon paint-icon"
          />
        </div>
        <div class="info-text">
          <p class="info-title">As melhores cores é aqui</p>
          <p class="info-subtitle">
            <a
              href="https://www.bigcorestintas.com.br/"
              target="_blank"
              class="link-loja"
            >
              Visite nossas lojas &rightarrow;
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="stats-wrapper">
      <div class="stats-card">
        <p class="stats-number orange">{{ formattedClientes }}</p>
        <p class="stats-label">Clientes satisfeitos</p>
      </div>
      <div class="stats-card">
        <p class="stats-number">Mais de <br> <span class="orange">{{ formattedCores }}</span></p>
        <p class="stats-label">Variedades de cor</p>
      </div>
      <div class="stats-card">
        <p class="stats-number orange">{{ formattedLojas }}</p>
        <p class="stats-label">Lojas físicas</p>
      </div>
      <div class="stats-card">
        <p class="stats-number">Mais de <span class="orange">{{ formattedAnos }} anos</span></p>
        <p class="stats-label">No mercado</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import presenteIcone from '~/assets/images/presenteIcone.png';
import rolotintaIcone from '~/assets/images/rolotintaIcone.svg';

const statsSectionRef = ref(null);

const clientes = ref(0);
const cores = ref(0);
const lojas = ref(0);
const anos = ref(0);

const formattedClientes = computed(() => Math.round(clientes.value).toLocaleString('pt-BR'));
const formattedCores = computed(() => Math.round(cores.value).toLocaleString('pt-BR'));
const formattedLojas = computed(() => Math.round(lojas.value));
const formattedAnos = computed(() => Math.round(anos.value));

function animateCount(targetRef, targetValue, duration = 2000) {
  let startTimestamp = null;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easedProgress = easeOutCubic(progress);
    
    targetRef.value = easedProgress * targetValue;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      targetRef.value = targetValue;
    }
  };
  
  requestAnimationFrame(step);
}

let observer = null;

onMounted(() => {
  const options = {
    threshold: 0.5,
  };

  observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      animateCount(clientes, 100000, 2500);
      animateCount(cores, 3000, 2500);
      animateCount(lojas, 7, 1500);
      animateCount(anos, 30, 2000);

      observer.unobserve(statsSectionRef.value);
    }
  }, options);

  if (statsSectionRef.value) {
    observer.observe(statsSectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.wrapper-section {
  width: 100%;
  padding: 160px;
  background-color: var(--cor-cinza-escuro);
  box-sizing: border-box;
}

.info-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 100%;
}

.info-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
  background-color: var(--cor-branco);
  border-radius: 26px;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.info-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-title {
  font-size: var(--f4);
  font-weight: var(--bold);
  color: var(--cor-preto);
  margin: 0;
  line-height: 1.3;
}

.info-subtitle {
  font-size: var(--f1);
  color: var(--cor-cinza-escuro);
  margin: 0;
}

.info-subtitle .cupom {
  color: var(--cor-laranja);
  font-weight: var(--bold);
}

.info-subtitle .link-loja {
  color: var(--cor-azul-escuro);
  font-weight: var(--bold);
  text-decoration: none;
  transition: opacity 0.2s;
}

.info-subtitle .link-loja:hover {
  opacity: 0.8;
}

.divider {
  width: 100%;
  border-top: 1px solid var(--cor-cinza-claro);
  margin: 24px 0;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 100%;

}

.stats-card {
  background-color: var(--cor-branco);
  border-radius: 26px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  max-width: 220px;
  justify-self: center;
  aspect-ratio: 1.3 / 1;
}

.stats-number {
  font-size: var(--f3);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin: 0;
  line-height: 1.4;
}

.stats-label {
  font-size: var(--f2);
  font-weight: var(--regular);
  color: var(--cor-azul-escuro);
  margin: 0;
}

.stats-number.orange {
  color: var(--cor-laranja);
  font-size: var(--f3);
}

.stats-number .orange {
  color: var(--cor-laranja);
  font-size: var(--f3);
}

.paint-icon-wrapper {
  position: relative;
  flex-shrink: 0; 
  width: 48px;
  height: 128px; 
  display: flex;
  align-items: flex-start;
}

.paint-icon {
  position: relative;
  z-index: 2;
  animation: roller-move-down 40s infinite ease-in-out;
}

.paint-card .info-text {
  position: relative;
  z-index: 2;
}

.paint-icon-wrapper::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 24px; 
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 0;
  animation: paint-stripe-grow 40s infinite ease-in-out;
}

@keyframes roller-move-down {
  0%   { transform: translateY(0); }
  1.5%, 3.5% { transform: translateY(80px); }
  5%   { transform: translateY(0); }
  10%  { transform: translateY(0); }
  11.5%, 13.5% { transform: translateY(80px); }
  15%  { transform: translateY(0); }
  20%  { transform: translateY(0); }
  21.5%, 23.5% { transform: translateY(80px); }
  25%  { transform: translateY(0); }
  30%  { transform: translateY(0); }
  31.5%, 33.5% { transform: translateY(80px); }
  35%  { transform: translateY(0); }
  40%  { transform: translateY(0); }
  41.5%, 43.5% { transform: translateY(80px); }
  45%  { transform: translateY(0); }
  50%  { transform: translateY(0); }
  51.5%, 53.5% { transform: translateY(80px); }
  55%  { transform: translateY(0); }
  60%  { transform: translateY(0); }
  61.5%, 63.5% { transform: translateY(80px); }
  65%  { transform: translateY(0); }
  70%  { transform: translateY(0); }
  71.5%, 73.5% { transform: translateY(80px); }
  75%  { transform: translateY(0); }
  80%  { transform: translateY(0); }
  81.5%, 83.5% { transform: translateY(80px); }
  85%  { transform: translateY(0); }
  90%  { transform: translateY(0); }
  91.5%, 93.5% { transform: translateY(80px); }
  95%, 100% { transform: translateY(0); }
}

@keyframes paint-stripe-grow {
  0%   { height: 0; background-color: #223359; }
  1.5%, 3.5% { height: 80px; background-color: #223359; }
  5%   { height: 0; background-color: #223359; }
  10%  { height: 0; background-color: #0069AE; }
  11.5%, 13.5% { height: 80px; background-color: #0069AE; }
  15%  { height: 0; background-color: #0069AE; }
  20%  { height: 0; background-color: #058DB6; }
  21.5%, 23.5% { height: 80px; background-color: #058DB6; }
  25%  { height: 0; background-color: #058DB6; }
  30%  { height: 0; background-color: #FF6B00; }
  31.5%, 33.5% { height: 80px; background-color: #FF6B00; }
  35%  { height: 0; background-color: #FF6B00; }
  40%  { height: 0; background-color: #32A98B; }
  41.5%, 43.5% { height: 80px; background-color: #32A98B; }
  45%  { height: 0; background-color: #32A98B; }
  50%  { height: 0; background-color: #75BA41; }
  51.5%, 53.5% { height: 80px; background-color: #75BA41; }
  55%  { height: 0; background-color: #75BA41; }
  60%  { height: 0; background-color: #A5C60D; }
  61.5%, 63.5% { height: 80px; background-color: #A5C60D; }
  65%  { height: 0; background-color: #A5C60D; }
  70%  { height: 0; background-color: #FFEC00; }
  71.5%, 73.5% { height: 80px; background-color: #FFEC00; }
  75%  { height: 0; background-color: #FFEC00; }
  80%  { height: 0; background-color: #F8A400; }
  81.5%, 83.5% { height: 80px; background-color: #F8A400; }
  85%  { height: 0; background-color: #F8A400; }
  90%  { height: 0; background-color: #CD0A1A; }
  91.5%, 93.5% { height: 80px; background-color: #CD0A1A; }
  95%, 100% { height: 0; background-color: #CD0A1A; }
}

@media (max-width: 1200px) {
  /* 1. Transforma o stats-wrapper em um carrossel horizontal */
  .stats-wrapper {
    display: flex; /* Muda de grid para flex */
    overflow-x: auto; /* Habilita o scroll horizontal */
    scroll-behavior: smooth;
    cursor: grab;
    user-select: none; /* Melhora a experiência de "arrastar" */
    gap: 20px; /* Espaçamento entre os cards */

    /* * AJUSTE DA MARGEM/PADDING:
     * O padding do .wrapper-section no desktop é 160px.
     * Usamos -160px de margem para "puxar" o scroll para as bordas.
     * Usamos 160px de padding (left/right) para "empurrar" 
     * o primeiro card de volta ao alinhamento.
    */
    margin: 0 10px; 
    padding: 1.5rem 10px; /* 1.5rem top/bottom, 160px left/right */

    /* Esconde a barra de scroll */
    scrollbar-width: none; /* Firefox */
  }

  /* Esconde a barra de scroll no Chrome, Safari, etc. */
  .stats-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* 2. Ajusta os cards de estatísticas para o carrossel */
  .stats-card {
    flex-shrink: 0; /* Impede que os cards encolham */
    width: 180px; /* Define uma largura fixa */
    max-width: none; /* Remove o max-width do desktop */
    justify-self: auto; /* Remove a propriedade de grid */
    padding: 1.5rem;
  }

  .stats-label {
    font-size: var(--f1); /* Fonte menor para caber */
  }
}

/*
* ===============================================
* @MEDIA QUERY PARA RESPONSIVO (1000px)
* ===============================================
*/
@media (max-width: 1000px) {
  /* 1. Ajusta o padding principal da seção */
  .wrapper-section {
    padding: 4rem 1.5rem; /* Padding horizontal passa a ser 1.5rem */
  }

  /* 2. Empilha os cards de informação */
  .info-wrapper {
    grid-template-columns: 1fr; /* Muda de 2 colunas para 1 */
    gap: 20px;
  }

  /* 3. Ajusta o padding e fontes dos info-cards */
  .info-card {
    padding: 2.5rem 1.5rem;
  }

  .info-title {
    font-size: var(--f3); /* Reduz um pouco a fonte do título */
  }

  .info-subtitle {
    font-size: var(--f1); /* Garante que o subtítulo seja legível */
  }

  /* 4. Ajusta o carrossel para o novo padding */
  .stats-wrapper {
    /* * AQUI ESTÁ A CORREÇÃO PRINCIPAL:
     * 1. REMOVIDO o 'justify-content: center;' que causava o bug.
     * 2. Ajustado o margin/padding para o novo padding da tela (1.5rem).
    */
    margin: 0 -1.5rem;  /* Puxa para as bordas (1.5rem) */
    padding: 1.5rem;     /* Empurra o conteúdo de volta (1.5rem em todos os lados) */
  }
}
</style>
