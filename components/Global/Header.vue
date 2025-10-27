<template>
  <header class="header">
    <div class="header__logo">
      <a href="#" @click.prevent="scrollToTop" aria-label="Voltar ao topo">
        <img :src="logo" alt="Logo completa da Big Cores" />
      </a>
    </div>

    <div class="header__menu">
      <nav>
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path">
          {{ link.text }}
        </NuxtLink>
      </nav>
    </div>

    <div class="header__botoes">
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="botao-whatsapp"
      >
        <img :src="whatsappIcon" alt="Ícone do WhatsApp" />
        <span>Atendimento</span>
      </a>
      
      <a
        href="https://www.bigcorestintas.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        class="botao-loja"
      >
       Loja online
      </a>

      <button
        class="header__hamburger"
        @click="toggleMobileMenu"
        :class="{ 'is-active': isMobileMenuOpen }"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
    <nav>
      <NuxtLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        @click="toggleMobileMenu"
      >
        {{ link.text }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import logo from "~/assets/images/logoCompleta.svg";
import whatsappIcon from "~/assets/images/whatsappIcone.png";

// 1. Importar o composable
import { useWhatsapp } from '~/composables/useWhatsapp';

const router = useRouter();
const route = useRoute();

// 2. Pegar o link dinâmico
const { whatsappLink } = useWhatsapp();

defineProps({
  navLinks: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const scrollToTop = () => {
  router.push(route.path);
  window.scrollTo({ top: 0, behavior: "smooth" });
  isMobileMenuOpen.value = false;
};

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>

.header__logo a {
  cursor: pointer;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-family: var(--font-primaria);
  background-color: var(--cor-azul-escuro);
  color: var(--cor-branco);
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.header__logo {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.header__logo img {
  height: 40px;
}

.header__menu {
  flex: 0 1 auto;
  white-space: nowrap;
  min-width: 0; 
}

nav a {
  position: relative;
  color: var(--cor-branco);
  text-decoration: none;
  font-size: var(--f3);
  font-weight: var(--regular);
  margin-left: 0.5rem;
  padding: 0 10px 6px 0;
  font-family: var(--font-secundaria);
}

nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--cor-laranja);
  transition: width 0.3s ease-in-out;
}

nav a:hover::after {
  width: 90%;
}
.header__botoes {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: flex-end; 
}

.botao-whatsapp {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: var(--regular);
  font-size: var(--f2);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.botao-whatsapp span {
  position: relative;
}

.botao-whatsapp span::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--cor-verde);
  transition: width 0.3s ease-in-out;
}

.botao-whatsapp:hover span::after {
  width: 100%;
}

.botao-whatsapp img {
  width: 24px;
}

.botao-loja {
  background: var(--cor-azul-bb);
  color: var(--cor-azul-escuro);
  padding: 0.5rem 1rem;
  border-radius: 26px;
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f2);
  transition: background-color 0.3s;
  margin-left: 6px;
  white-space: nowrap;
}

.botao-loja:hover {
  background-color: var(--cor-azul-escuro);
  border: solid 1px var(--cor-azul-bb);
  color: var(--cor-branco-escuro);
}

.header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.header__hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--cor-branco);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.header__hamburger.is-active span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}
.header__hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.header__hamburger.is-active span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cor-azul-escuro);
  z-index: 999;
  padding: 2rem;
  box-sizing: border-box;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.mobile-menu.is-open {
  transform: translateX(0);
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.mobile-menu nav a {
  font-size: var(--f4);
  font-weight: var(--bold);
  color: var(--cor-branco);
  text-decoration: none;
  padding: 10px 0;
}
.mobile-menu nav a:hover {
  color: var(--cor-laranja);
}

@media (max-width: 1400px) {
  nav a {
    margin-left: 4px;
    font-size: var(--f2);
  }

  .botao-whatsapp span {
    display: none;
  }

  .botao-whatsapp {
    gap: 0;
    padding: 0.5rem;
  }

  .botao-whatsapp span::after {
    display: none;
  }
  .botao-whatsapp:hover span::after {
    width: 0;
  }
}

@media (max-width: 1000px) {
  .header {
    padding: 15px 20px;
  }

  .header__menu {
    display: none;
  }
  .header__hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .botao-whatsapp span {
    display: none;
  }

  .botao-whatsapp {
    gap: 0;
    padding: 0.5rem;
  }

  .botao-whatsapp span::after {
    display: none;
  }
  .botao-whatsapp:hover span::after {
    width: 0;
  }
}

/* Desabilitar hovers em dispositivos móveis */
@media (hover: none) and (pointer: coarse) {
  nav a:hover {
    color: var(--cor-branco);
  }
  
  .botao-whatsapp:hover {
    background-color: var(--cor-laranja);
    transform: none;
  }
  
  .botao-whatsapp:hover span::after {
    width: 0;
  }
  
  .botao-loja:hover {
    background-color: var(--cor-azul-bb);
    border: none;
    color: var(--cor-azul-escuro);
  }
  
  .mobile-menu nav a:hover {
    color: var(--cor-branco);
  }
}
</style>