<template>
  <section class="benefits">
    <div class="container">
      <div class="grid">
        <div class="card">
          <div class="icon">
            <img :src="iconEconomia" alt="Economia" />
          </div>
          <h3>Economia significativa</h3>
          <p>
            Acesso a tabelas de faturamento direto de fábrica, eliminando intermediários.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconLogistica" alt="Logística" />
          </div>
          <h3>Logística Personalizada</h3>
          <p>
            Receba os materiais direto na obra, no momento que você precisar, respeitando seu cronograma.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconAtendimento" alt="Processo" />
          </div>
          <h3>Processo simplificado</h3>
          <p>
            Gestão centralizada de pedidos com faturamento facilitado e condições de crédito exclusivas.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconSuporte" alt="Suporte" />
          </div>
          <h3>Suporte técnico especializado</h3>
          <p>
            Visitas técnicas in loco para especificação de produtos e acompanhamento de aplicação.
          </p>
        </div>

        <div class="card highlight">
          <div class="icon highlight-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="26"
              height="26"
            >
              <path d="M3 9l3-4h12l3 4-9 10-9-10z" />
              <path d="M6 5l6 14 6-14" />
              <path d="M3 9h18" />
            </svg>
          </div>
          <div class="highlight-content">
            <h3>Qualidade que agrega valor</h3>
            <p>
              Trabalhamos com Coral e outras marcas de excelência, garantindo durabilidade e acabamento superior para valorizar seu empreendimento.
            </p>
            <a 
              href="https://wa.me/554192546682?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20os%20produtos%20Coral%20para%20meu%20projeto." 
              target="_blank" 
              class="cta-minimal"
            >
              Falar com especialista
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import iconEconomia from "~/assets/images/porcentagemIcone.png";
import iconLogistica from "~/assets/images/processoIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";
import iconAtendimento from "~/assets/images/qualidadeIcone.png";

onMounted(() => {
  const cards = document.querySelectorAll('.card')
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
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`
    observer.observe(card)
  })
})
</script>

<style scoped>
.benefits {
  padding: 80px 0;
  background: var(--cor-branco);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CARD BASE */
.card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}

.icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.icon img {
  width: 24px;
  height: 24px;
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a2b4c;
  line-height: 1.2;
}

.card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
}

/* CARD DESTAQUE (HIGHLIGHT) */
.highlight {
  grid-column: span 2;
  background: #0f2a4f;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
}

.highlight-icon {
  background: #1a3a63;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}

.highlight-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.highlight h3 { color: #fff; }
.highlight p { color: #cbd5e1; }

/* CTA MINIMALISTA */
.cta-minimal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  width: fit-content;
}

.cta-minimal .arrow {
  transition: transform 0.3s ease;
}

.cta-minimal:hover {
  color: #e39332; /* Laranja Big Cores */
  border-bottom-color: #e39332;
}

.cta-minimal:hover .arrow {
  transform: translateX(5px);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1024px) {
  .benefits { padding: 60px 0; }
  .grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .highlight { grid-column: span 2; }
}

@media (max-width: 768px) {
  .card { padding: 24px; }
  .highlight { flex-direction: column; gap: 16px; }
}

@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
  .highlight { grid-column: span 1; }
  .card h3 { font-size: 1.15rem; }
  .card p { font-size: 0.9rem; }
}
</style>