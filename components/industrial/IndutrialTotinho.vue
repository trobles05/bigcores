<template>
  <section class="toninho-portal-section">
    <div class="container">
      <div class="portal-wrapper">
        
        <div class="portal-fluid-bg">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffc107" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87.1,14.6,81.7,29.1,73.1,41.1C64.5,53.1,52.7,62.5,39.6,69.1C26.5,75.7,13.2,79.5,-0.6,80.6C-14.5,81.7,-28.9,80,-42,73.4C-55.1,66.8,-66.8,55.3,-75.1,41.9C-83.3,28.4,-88.1,14.2,-88.8,-0.4C-89.5,-15,-86.1,-30,-78.9,-43.3C-71.6,-56.6,-60.6,-68.2,-47.2,-75.8C-33.8,-83.4,-16.9,-87,0.1,-87.2C17.1,-87.3,34.2,-83.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div class="toninho-image-wrapper">
          <img 
            :src="toninhoImage" 
            alt="Toninho, Especialista Industrial Big Cores" 
            class="toninho-full-image"
          />
        </div>

        <div class="portal-content">
          <div class="text-layer layer-back">
            <h2 class="portal-headline-stroke">INDUSTRIAL</h2>
          </div>
          
          <div class="text-layer layer-front">
            <h2 class="portal-headline-solid">
              Sua indústria com <br/>suporte de quem <br/><span>entende de Weg.</span>
            </h2>
            <p class="portal-subline">
              "Fale com um técnico que entende de processo industrial. Eu te ajudo na especificação para pisos, frotas e pintura eletrostática."
            </p>
          </div>
          
          <div class="portal-actions">
            <a 
              href="https://wa.me/554192433140?text=Olá%20Toninho!%20Preciso de uma especificação técnica para a linha industrial." 
              target="_blank" 
              class="portal-btn"
            >
              <img :src="whatsappIcon" alt="WhatsApp" class="btn-icon" />
              Falar com o Toninho agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import toninhoImage from "~/assets/images/toninho.png"; 
import whatsappIcon from "~/assets/images/whatsappIcone.png";
</script>

<style scoped>
.toninho-portal-section {
  padding: 120px 0;
  background-color: var(--cor-azul-escuro); /* Azul marinho industrial bem escuro */
  position: relative;
  overflow: hidden;
  z-index: 5;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.portal-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  min-height: 600px;
}

/* --- PORTAL FLUÍDO --- */
.portal-fluid-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  z-index: 1;
  opacity: 0.4; /* Reduzi um pouco a opacidade para o azul escuro */
  filter: blur(40px);
  animation: portalWave 25s infinite linear;
}

@keyframes portalWave {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}

/* --- IMAGEM DO TONINHO --- */
.toninho-image-wrapper {
  position: absolute;
  right: -50px;
  bottom: -120px;
  width: 600px;
  z-index: 3;
}

.toninho-full-image {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 60px rgba(0,0,0,0.8));
}

/* --- CONTEÚDO --- */
.portal-content {
  position: relative;
  z-index: 4;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}

.portal-headline-stroke {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.1);
  line-height: 1;
  margin-bottom: -35px;
  transform: translateX(-30px);
}

.portal-headline-solid {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
}

.portal-headline-solid span {
  color: #ffc107; /* Amarelo Industrial */
  text-decoration: underline rgba(255, 193, 7, 0.3);
}

.portal-subline {
  font-size: 1.3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 580px;
  margin-bottom: 40px;
  font-style: italic;
  border-left: 4px solid #ffc107; /* Borda Amarela */
  padding-left: 20px;
}

/* --- BOTÃO --- */
.portal-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #25d366; /* Verde do zap direto para converter */
  color: #fff;
  padding: 20px 45px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
}

.portal-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.4);
  filter: brightness(1.1);
}

.btn-icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1100px) {
  .portal-wrapper { min-height: auto; flex-direction: column-reverse; padding-top: 60px; }
  .toninho-image-wrapper { position: relative; right: 0; bottom: -60px; width: 450px; margin-top: -80px; }
  .portal-content { text-align: center; align-items: center; }
  .portal-subline { border-left: 0; padding: 0 10px; }
  .portal-btn { width: 100%; justify-content: center; }
}
</style>