<template>
  <footer id="contato" class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column brand">
          <img :src="logo" alt="Big Cores Tintas" class="footer-logo" />
          <p class="footer-text">
            Mais cor, mais economia,<br />
            mais você.
          </p>
          <div class="social-icons">
            <a href="https://www.instagram.com/bigcorestintas" target="_blank">
              <img :src="instagramIcon" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/bigcorestintas/" target="_blank">
              <img :src="facebookIcon" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@bigcorestintas" target="_blank">
              <img :src="youtubeIcon" alt="YouTube" />
            </a>
            <a href="https://br.pinterest.com/bigcorestintas/" target="_blank">
              <img :src="pinterestIcon" alt="Pinterest" />
            </a>
          </div>
        </div>

        <div class="footer-column accordion" :class="{ 'is-open': activeMenu === 'acesso' }">
          <div class="accordion-header" @click="toggleMenu('acesso')">
            <h3>ACESSO RÁPIDO</h3>
            <span class="plus-icon">{{ activeMenu === "acesso" ? "−" : "+" }}</span>
          </div>
          <div class="accordion-content">
            <ul>
              <li v-for="link in navLinks" :key="link.text">
                <a :href="link.path">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-column accordion" :class="{ 'is-open': activeMenu === 'institucional' }">
          <div class="accordion-header" @click="toggleMenu('institucional')">
            <h3>INSTITUCIONAL</h3>
            <span class="plus-icon">{{ activeMenu === "institucional" ? "−" : "+" }}</span>
          </div>
          <div class="accordion-content">
            <ul>
              <li v-for="link in informacoesLinks" :key="link.text">
                <a :href="link.path" target="_blank">{{ link.text }}</a>
              </li>
              <li>
                <a href="https://www.bigcorestintas.com.br/" target="_blank">Clube Big Cores</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-column accordion" :class="{ 'is-open': activeMenu === 'atendimento' }">
          <div class="accordion-header" @click="toggleMenu('atendimento')">
            <h3>ATENDIMENTO</h3>
            <span class="plus-icon">{{ activeMenu === "atendimento" ? "−" : "+" }}</span>
          </div>
          <div class="accordion-content">
            <ul class="contact">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                sac@bigcorestintas.com.br
              </li>

              <li>
                <img :src="telefoneIcon" alt="Telefone" class="contact-icon" />
                (41) 3382-1864
              </li>

              <li>
                <img :src="whatsappIconFooter" alt="WhatsApp" class="contact-icon" />
                (41) 9 9243-3140
              </li>
            </ul>

            <p class="hours">
              <strong>HORÁRIO DE ATENDIMENTO:</strong><br />
              Segunda à sexta-feira: 08h às 18h.<br />
              Sábados: 08h às 12h.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom container">
      <p>Copyright © 2026 Big Cores Tintas CNPJ 04.261.757/0001-90</p>
      <p>Rua Almirante Alexandrino, nº 1923 - São José dos Pinhais - PR</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useLinkState } from "~/composables/useLinkState";
import logo from "~/assets/images/logoCompleta.svg";
import instagramIcon from "~/assets/images/instagramIcone.png";
import facebookIcon from "~/assets/images/facebookIcone.png";
import youtubeIcon from "~/assets/images/youtubeIcone.png";
import pinterestIcon from "~/assets/images/pinterestIcone.png";

// Ícones específicos para o Atendimento
import whatsappIconFooter from "~/assets/images/whatsapp.png";
import telefoneIcon from "~/assets/images/telefone.png"; // Certifique-se que o nome do arquivo está correto

const { navLinks, informacoesLinks } = useLinkState();

const activeMenu = ref(null);
const toggleMenu = (menuName) => {
  activeMenu.value = activeMenu.value === menuName ? null : menuName;
};
</script>

<style scoped>
.footer {
  background: #223359;
  color: #fff;
  padding: 80px 0 40px 0;
  font-family: var(--font-principal);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr repeat(3, 1fr);
  gap: 40px;
}

.footer-logo { width: 140px; margin-bottom: 20px; }
.footer-text { font-size: 14px; margin-bottom: 25px; color: #fff; line-height: 1.5; }
.social-icons { display: flex; gap: 15px; margin-bottom: 30px; }
.social-icons img { width: 22px; filter: brightness(0) invert(1); opacity: 0.8; }

.footer-column h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plus-icon { display: none; }

@media (min-width: 901px) {
  .accordion-content {
    max-height: none !important;
    overflow: visible !important;
    opacity: 1 !important;
    margin-top: 15px;
  }
}

.footer-column ul { list-style: none; padding: 0; margin: 0; }
.footer-column ul li {
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre ícone e texto */
}

/* Estilo dos ícones de contato */
.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.footer-column ul a { color: #fff; text-decoration: none; transition: 0.3s; }
.footer-column ul a:hover { text-decoration: underline; }

.hours {
  margin-top: 20px;
  font-size: 12px;
  color: #fff;
  line-height: 1.8;
  opacity: 0.8;
}

.footer-divider { height: 1px; background: rgba(255, 255, 255, 0.1); margin: 60px 0 30px; }
.footer-bottom { display: flex; justify-content: space-between; font-size: 12px; color: #fff; opacity: 0.7; }

@media (max-width: 900px) {
  .footer { padding: 40px 0; }
  .footer-grid { grid-template-columns: 1fr; gap: 0; }
  .brand { padding: 0 20px 30px; }
  .accordion { border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
  }
  .plus-icon { display: block; font-size: 24px; font-weight: 300; }
  .accordion-content { max-height: 0; overflow: hidden; transition: all 0.4s ease; padding: 0 20px; }
  .is-open .accordion-content { max-height: 550px; padding-bottom: 25px; }
  .footer-bottom { flex-direction: column; gap: 15px; text-align: center; }
}
</style>