<template>
  <div ref="ctaContainer" class="ultra-cta-wrapper">
    <div class="container">
      <div 
        class="ultra-cta" 
        :style="tiltStyle"
      >
        <div class="cta-inner">
          <div 
            class="cta-mouse-tracker" 
            :style="mouseTrackerStyle"
          ></div>
          
          <div class="cta-body">
            <div class="cta-text-group">
              <span class="cta-badge">Oportunidade para Construtoras</span>
              <h2 class="cta-headline">Sua obra merece <br/>o <span>melhor acabamento.</span></h2>
              <p class="cta-subline">Consultoria técnica de quem é líder no mercado de tintas.</p>
            </div>
            <div class="cta-button-group">
              <a href="https://wa.me/554192546682" target="_blank" class="glass-btn">
                <div class="btn-content">
                   <img :src="whatsappIcon" alt="WhatsApp" />
                   <span>Iniciar Orçamento</span>
                </div>
                <div class="btn-glow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
// Importação correta da imagem
import whatsappIcon from "~/assets/images/whatsappIcone.png";

const ctaContainer = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const containerRect = ref({ top: 0, left: 0, width: 0, height: 0 });

// Função para atualizar a posição do mouse relativa ao container
const updateMousePosition = (e) => {
  if (!containerRect.value.width) return;
  
  // Calcula a posição X e Y de -1 a 1 (onde 0 é o centro)
  mouseX.value = ((e.clientX - containerRect.value.left) / containerRect.value.width) * 2 - 1;
  mouseY.value = ((e.clientY - containerRect.value.top) / containerRect.value.height) * 2 - 1;
};

// Recalcula o tamanho do container ao redimensionar a tela
const updateRect = () => {
  if (ctaContainer.value) {
    containerRect.value = ctaContainer.value.getBoundingClientRect();
  }
};

// CSS Computado para o elemento que segue o mouse (Parallax)
const mouseTrackerStyle = computed(() => {
  // Move o degradê oposto ao mouse para dar sensação de profundidade
  const moveX = mouseX.value * -50; // Ajuste a intensidade aqui
  const moveY = mouseY.value * -50;
  return {
    transform: `translate(${moveX}px, ${moveY}px)`,
  };
});

// CSS Computado para inclinar o card (Tilt)
const tiltStyle = computed(() => {
  const rotateX = mouseY.value * -4; // Rotaciona no eixo X baseado no Y do mouse
  const rotateY = mouseX.value * 4;  // Rotaciona no eixo Y baseado no X do mouse
  return {
    transform: `translateY(-120px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  };
});

onMounted(() => {
  updateRect();
  window.addEventListener('resize', updateRect);
  window.addEventListener('scroll', updateRect); // Importante reajustar no scroll
  
  if (ctaContainer.value) {
    ctaContainer.value.addEventListener('mousemove', updateMousePosition);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateRect);
  window.removeEventListener('scroll', updateRect);
  if (ctaContainer.value) {
    ctaContainer.value.removeEventListener('mousemove', updateMousePosition);
  }
});
</script>

<style scoped>
.ultra-cta-wrapper {
  margin-top: 10rem;
  width: 100%;
  position: relative;
  z-index: 10;
  /* Define a perspectiva para o efeito 3D de inclinação funcionar */
  perspective: 1000px; 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.ultra-cta {
  position: relative;
  /* translateY(-120px) é controlado pelo JS agora, 
     mas mantemos aqui como fallback caso o JS falhe */
  transform: translateY(-120px); 
  margin-bottom: 80px;
  /* Transição suave para quando o mouse sai do card */
  transition: transform 0.1s ease-out; 
  /* Garante que o efeito 3D seja aplicado aos filhos */
  transform-style: preserve-3d; 
}

.cta-inner {
  background: #2563eb;
  background: linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%);
  border-radius: 40px;
  padding: 60px;
  position: relative;
  overflow: hidden; /* Importante para o rastreador não sair do card */
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* --- NOVO: ELEMENTO QUE SEGUE O MOUSE --- */
.cta-mouse-tracker {
  position: absolute;
  /* Centraliza inicialmente */
  top: -250px; 
  right: -150px;
  width: 600px;
  height: 600px;
  /* O degradê laranja/amarelo da Big Cores */
  background: radial-gradient(circle, rgba(227, 147, 50, 0.5) 0%, transparent 70%);
  filter: blur(50px);
  z-index: 1;
  /* Suaviza o movimento do JS */
  transition: transform 0.2s ease-out; 
  pointer-events: none; /* Não atrapalha cliques no botão */
}

.cta-body {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  /* Levanta o conteúdo para dar mais sensação de 3D */
  transform: translateZ(50px); 
}

.cta-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fbbf24;
  display: inline-block;
  margin-bottom: 20px;
}

.cta-headline {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
}

.cta-headline span {
  color: transparent;
  -webkit-text-stroke: 1px #fff;
}

.cta-subline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
}

/* BOTÃO GLASSMORPHISM */
.glass-btn {
  position: relative;
  text-decoration: none;
  display: inline-block;
  /* Levanta o botão ainda mais para efeito 3D */
  transform: translateZ(80px); 
}

.btn-content {
  background: rgba(255, 255, 255, 1);
  color: #1e2b4c;
  padding: 20px 40px;
  border-radius: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 2;
}

.btn-content img { width: 28px; height: 28px; object-fit: contain; }

.btn-glow {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #fff;
  filter: blur(20px);
  opacity: 0;
  transition: 0.4s;
  z-index: 1;
}

.glass-btn:hover .btn-content {
  transform: scale(1.05) translateY(-5px);
}

.glass-btn:hover .btn-glow {
  opacity: 0.4;
}

/* --- MOBILE --- */
@media (max-width: 900px) {
  /* Desativa os efeitos de mouse no mobile para performance */
  .ultra-cta { transform: translateY(-120px) !important; }
  .cta-mouse-tracker { display: none; }
  
  .cta-inner { padding: 40px 30px; border-radius: 30px; }
  .cta-body { flex-direction: column; text-align: center; gap: 30px; }
  .cta-headline { font-size: 2rem; }
  .cta-headline span { -webkit-text-stroke: 0; color: #fff; text-decoration: underline #fbbf24; }
  .btn-content { width: 100%; justify-content: center; padding: 16px 20px; }
}
</style>