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
          <a href="#"><img :src="instagramIcon" alt="Instagram" /></a>
          <a href="#"><img :src="facebookIcon" alt="Facebook" /></a>
          <a href="#"><img :src="youtubeIcon" alt="YouTube" /></a>
          <a href="#"><img :src="pinterestIcon" alt="Pinterest" /></a>
        </div>
      </div>

      <div class="footer-column">
        <h3>MINHA CONTA</h3>
        <ul>
          <li><a href="#">Carrinho de compras</a></li>
          <li><a href="#">Meus pedidos</a></li>
          <li><a href="#">Cadastro</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>DEPARTAMENTOS</h3>
        <ul>
          <li><a href="#">Linha imobiliária</a></li>
          <li><a href="#">Linha automotiva</a></li>
          <li><a href="#">Linha industrial</a></li>
          <li><a href="#">Ferramentas</a></li>
          <li><a href="#">Acessórios</a></li>
          <li><a href="#">Complementos</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>INSTITUCIONAL</h3>
        <ul>
          <li><a href="#">Política de privacidade</a></li>
          <li><a href="#">Política de reembolso</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Política de entrega</a></li>
          <li><a href="#">Nossas lojas</a></li>
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
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.382 1.842a15.216 15.216 0 01-3.65-3.65l1.842-1.382a1.125 1.125 0 00.417-1.173L16.273 6.75a1.125 1.125 0 00-1.091-.852H13.5A2.25 2.25 0 0011.25 8.25v2.25a2.25 2.25 0 002.25 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.842 1.382a15.216 15.216 0 01-3.65 3.65l-1.382-1.842a1.125 1.125 0 00-1.173-.417l-4.423 1.106a1.125 1.125 0 00-.852 1.091V6.75z" />
            </svg>
            (41) 3382-1864
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="contact-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
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
// Mantidos os ícones originais
import whatsappIcon from "~/assets/images/whatsappIcone.png";
import instagramIcon from "~/assets/images/instagramIcone.png";
import facebookIcon from "~/assets/images/facebookIcone.png";
// Adicionados os imports dos novos ícones (certifique-se de que os arquivos existem em assets/images)
import youtubeIcon from "~/assets/images/youtubeIcone.png";
import pinterestIcon from "~/assets/images/pinterestIcone.png";

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
  /* AQUI FOI AJUSTADO: Margin/Padding lateral de 60px pro lados */
  padding: 80px 60px 40px;
  font-family: var(--font-principal);
}

/* GRID */
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 40px;
}

/* LOGO */
.footer-logo {
  width: 140px;
  margin-bottom: 20px;
}

.footer-text {
  font-size: var(--f1);
  margin-bottom: 20px;
  color: var(--cor-branco);
}

/* SOCIAL */
.social-icons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap; /* Permite quebrar linha se houver muitos ícones */
}

.social-icons img {
  width: 24px; /* Aumentei levemente para dar melhor leitura */
  opacity: 0.8;
  transition: opacity 0.2s;
}

.social-icons img:hover {
  opacity: 1;
}

/* TÍTULOS */
.footer-column h3 {
  color: var(--cor-branco);
  font-size: var(--f1);
  font-weight: var(--bold);
  margin-bottom: 16px;
}

/* LISTAS */
.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
  font-size: var(--f1);
}

.footer-column ul a {
  color: #c7d3e0;
  text-decoration: none;
  transition: 0.2s;
}

.footer-column ul a:hover {
  color: var(--cor-branco);
}

/* CONTATO */
.contact li {
  display: flex;
  align-items: center; /* V-align text with icon */
  gap: 12px;
  margin-bottom: 12px; /* Consistency in list item spacing */
}

.contact-icon {
  width: 18px;
  height: 18px;
  color: #c7d3e0; /* Inherit text color */
  flex-shrink: 0; /* Don't shrink icon */
}

/* HORÁRIO */
.hours {
  margin-top: 16px;
  font-size: var(--f0);
  line-height: 1.6;
}

/* DIVISÓRIA */
.footer-divider {
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin: 40px 0;
}

/* FOOTER FINAL */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: var(--f0);
  color: #c7d3e0;
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .footer {
    padding: 60px 20px 40px; /* Reduz o respiro no mobile */
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