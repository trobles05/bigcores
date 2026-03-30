<template>
  <header class="w-full header-wrapper">
    <div class="header-top">
      <div class="container">
        <ul class="top-links">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Entrega rápida
          </li>

          <li class="separator">|</li>

          <li>
            <img src="~/assets/images/Blogo.svg" alt="Ícone Clube Big Cores" class="icon-img" />
            Clube Big Cores Tintas
          </li>

          <li class="separator">|</li>

          <li>
            <a href="https://www.bigcorestintas.com.br/quem-somos" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path d="M8 6V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h5v16H3V6h5zm2 0h4V4c0-1.1-.9-2-2-2s-2 .9-2 2v2z" />
              </svg>
              Quem somos
            </a>
          </li>

          <li class="separator">|</li>

          <li>
            <a href="https://www.bigcorestintas.com.br/nossas-lojas" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Nossas lojas
            </a>
          </li>

          <li class="separator">|</li>

          <li>
            <a href="https://www.bigcorestintas.com.br/central-de-ajuda" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              Fale conosco
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="header-main" ref="headerRef">
      <div class="container main-content">
        <div class="logo" @click="scrollToTop">
          <img src="~/assets/images/logoCompleta.svg" alt="Big Cores Tintas" class="logo-img" />
        </div>

        <nav class="nav-links">
          <a href="#exclusividade">Exclusividade</a>
          <a href="#bigcores">Big Cores</a>
        </nav>

        <div class="actions">
          <a href="#atendimento" class="btn-atendimento"></a>
          <a href="https://www.bigcorestintas.com.br/" target="_blank" class="btn-loja">
            Loja online
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const headerRef = ref(null);

const handleScroll = () => {
  if (!headerRef.value) return;

  if (window.scrollY > 80) {
    headerRef.value.classList.add("fixed");
  } else {
    headerRef.value.classList.remove("fixed");
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Top Header --- */
.header-top {
  background-color: var(--cor-branco);
  border-bottom: 1px solid var(--cor-branco-escuro);
  padding: 8px 0;
  position: relative;
  z-index: 1002;
}

.top-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-size: 13px;
  color: var(--cor-azul-escuro);
  font-weight: 500;
}

.top-links li {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 🔥 LINK AJUSTADO */
.top-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cor-azul-escuro);
  text-decoration: none;
}

.top-links a:hover {
  opacity: 0.8;
}

.icon-svg {
  width: 16px;
  height: 16px;
}

.icon-img {
  width: 18px;
  height: 18px;
}

.separator {
  color: var(--cor-branco-escuro);
}

/* --- HEADER --- */
.header-wrapper {
  position: relative;
}

.header-main {
  background-color: var(--cor-azul-escuro);
  padding: 16px 0;
  position: relative;
  width: 100%;
  z-index: 1001;
  transition: all 0.35s ease;
}

.header-main.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(0);
  opacity: 1;
}

.header-wrapper::after {
  content: "";
  display: block;
  height: 72px;
}

.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
}

.logo-img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--cor-branco);
}

.actions {
  display: flex;
  gap: 20px;
}

.btn-loja {
  background-color: var(--cor-azul-bb);
  color: var(--cor-azul-escuro);
  padding: 8px 24px;
  border-radius: 9999px;
}
</style>