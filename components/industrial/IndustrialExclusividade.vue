<template>
  <section class="benefits">
    <div class="container">
      <div class="grid">
        <div class="card">
          <div class="icon">
            <img :src="iconEconomia" alt="Economia" />
          </div>
          <h3>Faturamento Direto</h3>
          <p>
            Acesso a tabelas corporativas direto de fábrica Weg, garantindo o
            melhor custo-benefício para seu volume.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconLogistica" alt="Logística" />
          </div>
          <h3>Logística Just-in-Time</h3>
          <p>
            Entrega programada em Curitiba e Região Metropolitana para manter
            seu estoque de manutenção sempre abastecido.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconAtendimento" alt="Processo" />
          </div>
          <h3>Gestão de Contas PJ</h3>
          <p>
            Condições de crédito exclusivas para empresas, com faturamento
            facilitado e gestão centralizada de pedidos.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img :src="iconSuporte" alt="Suporte" />
          </div>
          <h3>Especificação e Laudos</h3>
          <p>
            Acompanhamento técnico para emissão de especificações de pintura e
            suporte na aplicação em ambientes críticos.
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
            <h3>Tecnologia WEG de Alta Performance</h3>
            <p>
              Referência em tintas  WEG e soluções em Pintura
              Eletrostática (Pó). Entregamos o equilíbrio perfeito entre
              proteção anticorrosiva de alta performance e acabamento industrial
              superior.
            </p>
            <a
              href="https://wa.me/5541988051330?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20linha%20industrial%20da%20WEG."
              target="_blank"
              class="cta-minimal"
            >
              Solicitar Catálogo Técnico
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="arrow"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import iconEconomia from "~/assets/images/porcentagemIcone.png";
import iconLogistica from "~/assets/images/processoIcone.png";
import iconSuporte from "~/assets/images/suporteIcone.png";
import iconAtendimento from "~/assets/images/qualidadeIcone.png";

onMounted(() => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`;
    observer.observe(card);
  });
});
</script>

<style scoped>
.benefits {
  padding: 80px 0;
  background: var(--cor-branco);
  font-family: var(--font-principal);
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

.card {
  background: var(--cor-cinza-claro);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
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
  background: var(--cor-branco);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.icon img {
  width: 24px;
  height: 24px;
}

.card h3 {
  font-size: var(--f3);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  line-height: 1.2;
}

.card p {
  font-size: var(--f1);
  color: var(--cor-cinza-escuro);
  line-height: 1.6;
}

/* CARD DESTAQUE INDUSTRIAL */
.highlight {
  grid-column: span 2;
  background: var(--cor-azul-escuro); /* Ajustado para seu preto oficial */
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

.highlight h3 {
  color: var(--cor-branco);
}
.highlight p {
  color: var(--cor-branco-escuro);
}

.cta-minimal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f1);
  margin-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--cor-branco-escuro);
  transition: all 0.3s ease;
  width: fit-content;
}

.cta-minimal:hover {
  color: var(--cor-laranja);
  border-bottom-color: var(--cor-laranja);
}

.cta-minimal:hover .arrow {
  transform: translateX(5px);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .highlight {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .highlight {
    grid-column: span 1;
  }
  .card h3 {
    font-size: var(--f2);
  }
}
</style>
