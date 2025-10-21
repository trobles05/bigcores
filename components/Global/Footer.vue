<template>
  <div>
    <section class="cta-section">
      <div class="container cta-content">
        <h2>NÃO PAGUE MAIS POR TINTAS DE QUALIDADE!</h2>
        <p>Solicite agora mesmo seu orçamento com desconto especial para profissionais.</p>
        <a 
        href="https://wa.me/5541992433140?text=Tudo%20bem?%20No%20que%20posso%20ajudar%20você"
        target="_blank" 
        rel="noopener noreferrer"
        class="cta-button"
      >
        <img :src="whatsappIcon" alt="Ícone do WhatsApp" />
        <span>Fale com um atendente</span>
      </a>
      </div>
    </section>

    <footer id="contato" class="footer">
      <div class="container footer-grid">
        
        <div class="footer-column">
          <img :src="logo" alt="Big Cores Tintas" class="footer-logo" />
          <div class="social-icons">
            <a href="#"><img :src="instagramIcon" alt="Instagram" /></a>
            <a href="#"><img :src="facebookIcon" alt="Facebook" /></a>
          </div>
        </div>

        <div class="footer-column">
          <h3>Atalhos</h3>
          <ul>
            <li>
              <a href="#" @click.prevent="scrollToTop">Voltar ao topo</a>
            </li>
            <li v-for="link in atalhosLinks" :key="link.path">
              <NuxtLink :to="link.path">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Informações</h3>
          <ul>
            <li v-for="link in informacoesLinks" :key="link.path">
              <template v-if="isExternal(link.path)">
                <a :href="link.path" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
              </template>
              <template v-else>
                <NuxtLink :to="link.path">{{ link.text }}</NuxtLink>
              </template>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Atendimento</h3>
          <ul>
            <li v-for="link in atendimentoLinks" :key="link.path">
              <NuxtLink :to="link.path">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-copyright">
        <p>Copyright © 2025 Big Cores Tintas CNPJ 04.281.757/0001-90 - Todos os Direitos Reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Imports de imagens (iguais)
import logo from '~/assets/images/logoCompleta.svg';
import whatsappIcon from '~/assets/images/whatsappIcone.png';
import instagramIcon from '~/assets/images/instagramIcone.png';
import facebookIcon from '~/assets/images/facebookIcone.png';

// 1. Definição das PROPS para os links
defineProps({
  atalhosLinks: {
    type: Array,
    default: () => []
  },
  informacoesLinks: {
    type: Array,
    default: () => []
  },
  atendimentoLinks: {
    type: Array,
    default: () => []
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Detecta se um caminho é externo (URL absoluta)
const isExternal = (path) => /^https?:\/\//.test(path)
</script>

<style scoped>
.cta-section {
  font-family: var(--font-secundaria);
  position: relative;
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  text-align: center;
  padding: 8rem 1rem 4rem 1rem;
  margin-top: -5vw;
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%)
}

.cta-content h2 {
  font-size: var(--f5);
  font-weight: var(--bold);
  margin-bottom: 0.5rem;
  font-family: var(--font-primaria);
}

.cta-content p {
  font-size: var(--f2);
  margin-bottom: 2rem;
  color: var(--cor-cinza-claro);
}

.cta-button {
  font-family: var(--font-secundaria);
  background-color: var(--cor-verde);
  color: var(--cor-branco);
  padding: 0.8rem 1.5rem;
  border-radius: 26px;
  text-decoration: none;
  font-weight: var(--regular);
  font-size: var(--f2);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.2s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

.cta-button img {
  height: 1.2em;
}

.footer {
  background-color: var(--cor-azul-escuro);
  color: var(--cor-cinza-claro);
  padding: 120px 120px 10px 120px;
  border-top: 1px solid var(--cor-cinza-claro);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding-bottom: 3rem;
}

.footer-column h3 {
  color: var(--cor-branco);
  font-size: var(--f2);
  margin-bottom: 1rem;
  font-weight: var(--bold);
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.75rem;
}

.footer-column ul a {
  position: relative;
  color: var(--cor-cinza-claro);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  padding-bottom: 4px;
  /* Adicionado cursor pointer para o <a> do Voltar ao Topo */
  cursor: pointer; 
}

.footer-column ul a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--cor-branco);
  transition: width 0.3s ease-in-out;
}

.footer-column ul a:hover {
  color: var(--cor-branco);
}

.footer-column ul a:hover::after {
  width: 90%;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons img {
  height: 24px;
}

.footer-copyright {
  text-align: center;
  padding: 1rem;
  font-size: var(--f0);
  border-top: 1px solid var(--cor-branco-escuro);
}
</style>