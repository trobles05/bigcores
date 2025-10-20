<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <img :src="logo" alt="Logo completa da Big Cores" />
      </NuxtLink>
    </div>

    <div class="header__menu">
      <nav>
        <NuxtLink to="/contrutora/exclusividade-construtora#secaoexclusividade">Exclusividade</NuxtLink>
        <NuxtLink to="/big-cores">Big Cores</NuxtLink>
        <NuxtLink to="/contato">Contato</NuxtLink>
      </nav>
    </div>

    <div class="header__botoes">
  <a 
    href="https://wa.me/5541992433140?text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20de%20vocês."
    target="_blank" 
    rel="noopener noreferrer"
    class="botao-whatsapp"
  >
    <img :src="whatsappIcon" alt="Ícone do WhatsApp" />
    <span>Atendimento</span>
  </a>
  <NuxtLink to="/nossa-loja" class="botao-loja">Loja Online</NuxtLink>
</div>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logoCompleta.svg";
import whatsappIcon from "~/assets/images/whatsappIcone.png";
</script>

<style scoped>
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

nav a {
  position: relative;
  color: var(--cor-branco);
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: var(--f2);
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
  gap: 16px;
}

.botao-whatsapp {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f2);
  padding: 0.5rem 1rem;
}
.botao-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: var(--bold);
  font-size: var(--f2);
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
  margin-left: 16px;
}

.botao-loja:hover {
  background-color: var(--cor-azul-escuro);
  border: solid 1px var(--cor-azul-bb);
  color: var(--cor-branco-escuro);
}
</style>
