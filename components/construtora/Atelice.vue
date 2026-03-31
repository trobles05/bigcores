<template>
  <section class="atelice-portal-section">
    <div class="container">
      <div class="portal-wrapper">
        
        <div class="portal-fluid-bg">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e39332" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87.1,14.6,81.7,29.1,73.1,41.1C64.5,53.1,52.7,62.5,39.6,69.1C26.5,75.7,13.2,79.5,-0.6,80.6C-14.5,81.7,-28.9,80,-42,73.4C-55.1,66.8,-66.8,55.3,-75.1,41.9C-83.3,28.4,-88.1,14.2,-88.8,-0.4C-89.5,-15,-86.1,-30,-78.9,-43.3C-71.6,-56.6,-60.6,-68.2,-47.2,-75.8C-33.8,-83.4,-16.9,-87,0.1,-87.2C17.1,-87.3,34.2,-83.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div class="atelice-image-wrapper">
          <img 
            :src="ateliceImage" 
            alt="Atelice, especialista Big Cores" 
            class="atelice-full-image"
          />
        </div>

        <div class="portal-content">
          <div class="text-layer layer-back">
            <h2 class="portal-headline-stroke">TÉCNICA</h2>
          </div>
          
          <div class="text-layer layer-front">
            <h2 class="portal-headline-solid">
              Sua obra com <br/>assinatura de quem <br/><span>entende de tinta.</span>
            </h2>
            <p class="portal-subline">
              "Agende uma consultoria técnica comigo. Vamos blindar seu projeto contra patologias e economizar com inteligência."
            </p>
          </div>
          
          <div class="portal-actions">
            <a 
              href="https://wa.me/554192433140?text=Olá%20Atelice!%20Preciso de uma consultoria técnica para minha obra." 
              target="_blank" 
              class="portal-btn"
            >
              <img :src="whatsappIcon" alt="WhatsApp" class="btn-icon" />
              Chamar Atelice no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use a imagem original da Atelice (Vendedora com braços cruzados)
import ateliceImage from "~/assets/images/ateliceVendedora.png"; 
import whatsappIcon from "~/assets/images/whatsappIcone.png";
</script>

<style scoped>
/* --- DESIGN FORA DA CURVA --- */

.atelice-portal-section {
  padding: 120px 0;
  background-color: var(--cor-azul-escuro, #1e2b4c); /* Fundo Escuro para Destaque */
  position: relative;
  overflow: hidden; /* Corta o portal */
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

/* --- O PORTAL FLUÍDO (SVG Blob) --- */
.portal-fluid-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 900px;
  height: 900px;
  z-index: 1;
  opacity: 0.6;
  filter: blur(30px);
  /* Animação sutil de rotação para parecer vivo */
  animation: portalWave 20s infinite linear;
}

.portal-fluid-bg svg {
  width: 100%;
  height: 100%;
}

@keyframes portalWave {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}

/* --- IMAGEM DA ATELICE --- */
.atelice-image-wrapper {
  position: absolute;
  right: -50px; /* Sai um pouco da tela à direita */
  bottom: -120px; /* Sai um pouco da tela abaixo */
  width: 600px;
  z-index: 3; /* Frente do portal e do texto back */
}

.atelice-full-image {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
}

/* --- CONTEÚDO TEXTUAL --- */
.portal-content {
  position: relative;
  z-index: 4; /* À frente de tudo, exceto o braço dela se quisermos */
  max-width: 750px;
  display: flex;
  flex-direction: column;
}

.text-layer {
  position: relative;
}

/* Texto Vazado atrás da Atelice */
.portal-headline-stroke {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
  line-height: 1;
  margin-bottom: -30px;
  transform: translateX(-50px);
  z-index: 2; /* Atrás da imagem dela */
}

/* Texto Sólido na frente */
.portal-headline-solid {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
  position: relative;
  z-index: 4; /* Frente da imagem dela */
}

.portal-headline-solid span {
  color: var(--cor-laranja, #e39332);
  text-decoration: underline #f1caaf; /* Bege claro da logo */
}

.portal-subline {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 550px;
  margin-bottom: 40px;
  font-style: italic;
  border-left: 3px solid var(--cor-laranja);
  padding-left: 20px;
}

/* --- BOTÃO DE AÇÃO INSTANTÂNEA --- */
.portal-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #fff;
  color: var(--cor-azul-escuro);
  padding: 18px 40px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.portal-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background-color: #f8fafc;
}

.btn-icon {
  width: 28px;
  height: 28px;
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1100px) {
  .portal-wrapper { min-height: auto; flex-direction: column-reverse; padding-top: 80px; }
  .atelice-image-wrapper { position: relative; right: 0; bottom: -60px; width: 400px; margin-top: -100px; order: 2; }
  .portal-content { text-align: center; order: 1; align-items: center; }
  .portal-fluid-bg { width: 600px; height: 600px; }
  .portal-headline-stroke { transform: translateX(0); margin-bottom: 10px; }
  .portal-subline { border-left: 0; padding-left: 0; }
  .portal-btn { width: 100%; justify-content: center; }
}

@media (max-width: 768px) {
  .atelice-portal-section { padding: 80px 0; }
  .atolice-image-wrapper { width: 300px; bottom: -40px; }
  .portal-headline-solid { font-size: 2rem; }
  .portal-subline { font-size: 1.1rem; }
}
</style>