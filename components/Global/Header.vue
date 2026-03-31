<template>
  <header class="w-full header-wrapper">
    <div class="header-top desktop-only">
      <div class="container">
        <ul class="top-links">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon-svg"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Entrega rápida
          </li>
          <li class="separator">|</li>
          <li>
            <img
              src="~/assets/images/Blogo.svg"
              alt="Ícone Clube Big Cores"
              class="icon-img"
            />
            Clube Big Cores Tintas
          </li>
          <li class="separator">|</li>
          <li>
            <a
              href="https://www.bigcorestintas.com.br/quem-somos"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon-svg"
              >
                <path
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-1a2 2 0 0 1 4 0v1h-4V6z"
                />
              </svg>
              Quem somos
            </a>
          </li>
          <li class="separator">|</li>
          <li>
            <a
              href="https://www.bigcorestintas.com.br/nossas-lojas"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon-svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                />
              </svg>
              Nossas lojas
            </a>
          </li>
          <li class="separator">|</li>
          <li>
            <a
              href="https://www.bigcorestintas.com.br/central-de-ajuda"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon-svg"
              >
                <path
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                />
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
          <img
            src="~/assets/images/logoCompleta.svg"
            alt="Big Cores Tintas"
            class="logo-img"
          />
        </div>

        <nav class="nav-links desktop-only">
          <a v-for="link in navLinks" :key="link.text" :href="link.path">
            {{ link.text }}
          </a>
        </nav>

        <div class="actions desktop-only">
          <a
            href="https://www.bigcorestintas.com.br/"
            target="_blank"
            class="btn-loja"
          >
            Loja online
          </a>
        </div>

        <button
          class="hamburger-btn mobile-only"
          @click="toggleMenu"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="32"
            height="32"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="mobile-menu-overlay"
      :class="{ 'is-open': isMenuOpen }"
      @click="toggleMenu"
    ></div>

    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="mobile-menu-header">
        <h1>Menu</h1>
        <button class="close-btn" @click="toggleMenu" aria-label="Fechar menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="32"
            height="32"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
      </div>

      <hr class="mobile-divider top-divider" />

      <div class="mobile-menu-body">
        <nav class="mobile-nav-links">
          <a
            v-for="link in navLinks"
            :key="link.text"
            :href="link.path"
            @click="toggleMenu"
          >
            {{ link.text }}
          </a>

          <a
            href="https://www.bigcorestintas.com.br/"
            target="_blank"
            class="btn-gradient-loja"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a1.49 1.49 0 0 0-2.12 0L9.83 10.71l-1.41-1.41L7 10.71l5.3 5.3 1.41-1.41-1.42-1.42 7.42-7.43c.59-.58.59-1.54 0-2.12z"
              />
            </svg>
            Loja online
          </a>
        </nav>

        <hr class="mobile-divider" />

        <div class="mobile-print-links">
          <a href="#" class="btn-print-style">Entrega rápida</a>
          <a href="#" class="btn-print-style">Club Big Cores</a>
          <a
            href="https://www.bigcorestintas.com.br/quem-somos"
            target="_blank"
            class="btn-print-style"
            >Quem Somos</a
          >
          <a
            href="https://www.bigcorestintas.com.br/central-de-ajuda"
            target="_blank"
            class="btn-print-style"
            >Fale Conosco</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLinkState } from "~/composables/useLinkState";

const { navLinks } = useLinkState();
const headerRef = ref(null);
const isMenuOpen = ref(false);

const handleScroll = () => {
  if (!headerRef.value) return;
  if (window.scrollY > 80) {
    headerRef.value.classList.add("fixed");
  } else {
    headerRef.value.classList.remove("fixed");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
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
  margin: 0;
  padding: 0;
}
.top-links li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.top-links a {
  color: var(--cor-azul-escuro);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}
.top-links a:hover {
  opacity: 0.7;
}

.icon-svg {
  width: 18px;
  height: 18px;
  color: var(--cor-azul-escuro);
}
.icon-img {
  width: 18px;
  height: 18px;
}
.separator {
  color: var(--cor-branco-escuro);
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
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
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
  text-decoration: none;
  font-weight: 500;
}
.btn-loja {
  background-color: var(--cor-azul-bb);
  color: var(--cor-branco);
  padding: 8px 24px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
}
.mobile-only {
  display: none;
}
.hamburger-btn {
  background: none;
  border: none;
  color: var(--cor-branco);
  cursor: pointer;
}
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}
.mobile-menu-overlay.is-open {
  opacity: 1;
  visibility: visible;
}
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 350px;
  height: 100vh;
  background-color: var(--cor-branco);
  z-index: 2001;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
}
.mobile-menu.is-open {
  right: 0;
}
.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 26px;
  color: var(--cor-preto);
}
.mobile-menu-body {
  padding: 24px 20px;
  overflow-y: auto;
  flex: 1;
}
.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}
.mobile-nav-links a {
  color: var(--cor-azul-escuro);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}
.btn-gradient-loja {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(90deg, #2c84a6 0%, #5cb48b 50%, #e39332 100%);
  color: var(--cor-branco) !important;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
}
.mobile-divider {
  border: none;
  border-top: 1px solid var(--cor-cinza);
  margin: 24px 0;
}
.mobile-print-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.btn-print-style {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
  border: 1.5px solid var(--cor-azul-escuro);
  border-radius: 6px;
  color: var(--cor-azul-escuro);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}

@media (max-width: 992px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex;
  }
  .header-wrapper::after {
    height: 72px;
  }
}
</style>
