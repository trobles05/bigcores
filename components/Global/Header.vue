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
        href="https://wa.me/5541992433140?text=Tudo%20bem?%20No%20que%20posso%20ajudar%20você"
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
        Nossa loja
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

  <div 
    class="mobile-menu"
    :class="{ 'is-open': isMobileMenuOpen }"
  >
    <nav>
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.path" 
        :to="link.path"
        @click="toggleMobileMenu" >
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

const router = useRouter();
const route = useRoute();

defineProps({
  navLinks: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const scrollToTop = () => {
  router.push(route.path);
};

// --- Lógica do Menu Mobile Adicionada ---
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
// --- Fim da Lógica ---
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

.header__logo img {
  height: 40px;
}

.header__menu {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

nav a {
  position: relative;
  color: var(--cor-branco);
  text-decoration: none;
  margin-left: 0.5rem;
  font-size: var(--f3);
  font-weight: var(--regular);
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
  gap: 10px;
}

.botao-whatsapp {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f2);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.botao-whatsapp span {
  position: relative;
  padding-bottom: 5px;
}

.botao-whatsapp span::after {
  content: '';
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
}

.botao-loja:hover {
  background-color: var(--cor-azul-escuro);
  border: solid 1px var(--cor-azul-bb);
  color: var(--cor-branco-escuro);
}

</style>
