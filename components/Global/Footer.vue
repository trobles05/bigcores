<template>
  <footer id="contato" class="footer">
    <div class="container footer-grid">

      <div class="footer-column brand">
        <img :src="logo" alt="Big Cores Tintas" class="footer-logo" />

        <p class="footer-text">
          Mais cor, mais economia,<br />
          mais você.
        </p>

        <div class="social-icons">
          <a href="https://www.instagram.com/bigcorestintas?igsh=NG5xc2h3Mm13NWF2" target="_blank" ><img :src="instagramIcon" alt="Instagram" /></a>
          <a href="https://www.facebook.com/bigcorestintas/" target="_blank"><img :src="facebookIcon" alt="Facebook" /></a>
          <a href="https://www.youtube.com/@bigcorestintas" target="_blank" ><img :src="youtubeIcon" alt="YouTube" /></a>
          <a href="https://br.pinterest.com/bigcorestintas/"target="_blank" ><img :src="pinterestIcon" alt="Pinterest" /></a>
        </div>
      </div>

      <div class="footer-column">
        <h3>ACESSO RÁPIDO</h3>
        <ul>
          <li><a href="#">Exclusividade</a></li>
          <li><a href="#">Big Cores</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>INSTITUCIONAL</h3>
        <ul>
          <li><a href="https://www.bigcorestintas.com.br/seguranca" target="_blank" >Política de privacidade</a></li>
          <li><a href="https://www.bigcorestintas.com.br/politica-de-reembolso" target="_blank" >Política de reembolso</a></li>
          <li><a href="https://www.bigcorestintas.com.br/quem-somos" target="_blank" >Quem somos</a></li>
          <li><a href="https://www.bigcorestintas.com.br/central-de-ajuda" target="_blank" >Política de entrega</a></li>
          <li><a href="https://www.bigcorestintas.com.br/nossas-lojas" target="_blank" >Nossas lojas</a></li>
           <li><a href="https://www.bigcorestintas.com.br/" target="_blank" >Clube Big Cores</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>ATENDIMENTO</h3>
        <ul class="contact">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            sac@bigcorestintas.com.br
          </li>

          <!-- Telefone fixo -->
          <li>
            <img :src="telefoneIcon" alt="WhatsApp" class="contact-icon whatsapp-icon" />
            (41) 3382-1864
          </li>

          <!-- WhatsApp -->
          <li>
            <img :src="whatsappIcon" alt="WhatsApp" class="contact-icon whatsapp-icon" />
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

    <div class="footer-divider"></div>

    <div class="footer-bottom container">
      <p>
        Copyright © 2026 Big Cores Tintas CNPJ 04.261.757/0001-90
      </p>

      <p>
        Rua Almirante Alexandrino, nº 1923 - São José dos Pinhais - PR
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"; 
import logo from "~/assets/images/logoCompleta.svg";
import whatsappIcon from "~/assets/images/whatsapp.png";
import instagramIcon from "~/assets/images/instagramIcone.png";
import facebookIcon from "~/assets/images/facebookIcone.png";
import youtubeIcon from "~/assets/images/youtubeIcone.png";
import pinterestIcon from "~/assets/images/pinterestIcone.png";
import telefoneIcon from "~/assets/images/telefone.png";

const router = useRouter();
const route = useRoute();

defineProps({
  atalhosLinks: {
    type: Array,
    default: () => [],
  },
  informacoesLinks: {
    type: Array,
    default: () => [],
  },
  atendimentoLinks: {
    type: Array,
    default: () => [],
  },
});

const scrollToTop = () => {
  router.push(route.path);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const isExternal = (path) => /^https?:\/\//.test(path);
</script>

<style scoped>
.footer {
  background: #2b3f63;
  color: #c7d3e0;
  padding: 80px 60px 40px;
  font-family: var(--font-principal);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr repeat(3, 1fr);
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
}

.footer-logo {
  width: 140px;
  margin-bottom: 20px;
}

.footer-text {
  font-size: var(--f1);
  margin-bottom: 20px;
  color: var(--cor-branco);
}

.social-icons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-icons img {
  width: 24px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.social-icons img:hover {
  opacity: 1;
}

.footer-column h3 {
  color: var(--cor-branco);
  font-size: var(--f1);
  font-weight: var(--bold);
  margin-bottom: 16px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
  font-size: var(--f1);
}

.footer-column ul a {
  color:rgb(255, 255, 255);
  text-decoration: none;
  transition: 0.2s;
}

.footer-column ul a:hover {
 text-decoration: underline;
}

.contact li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.contact-icon {
  width: 18px;
  height: 18px;
  color:rgb(255, 255, 255);
  flex-shrink: 0;
}

.whatsapp-icon {
  object-fit: contain;
}

.hours {
  margin-top: 16px;
  font-size: var(--f0);
  line-height: 1.6;
}

.footer-divider {
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin: 40px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: var(--f0);
  color:rgb(255, 255, 255);
}

@media (max-width: 900px) {
  .footer {
    padding: 60px 20px 40px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>