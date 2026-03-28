<template>
  <header class="w-full">
    <div class="header-top">
      <div class="container">
        <ul class="top-links">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
              <path d="M8 6V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h5v16H3V6h5zm2 0h4V4c0-1.1-.9-2-2-2s-2 .9-2 2v2z"/>
            </svg>
            Quem somos
          </li>
          
          <li class="separator">|</li>
          
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Nossas lojas
          </li>
          
          <li class="separator">|</li>
          
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
            Fale conosco
          </li>
        </ul>
      </div>
    </div>

    <div class="header-main">
      <div class="container main-content">
        
        <div class="logo">
          <img src="~/assets/images/logoCompleta.svg" alt="Big Cores Tintas" class="logo-img" />
        </div>

        <nav class="nav-links">
          <a href="#exclusividade">Exclusividade</a>
          <a href="#bigcores">Big Cores</a>
          <a href="#endereco">Endereço</a>
          <a href="#sobrenos">Sobre Nós</a>
        </nav>

        <div class="actions">
          <a href="#atendimento" class="btn-atendimento">
          </a>
          <a href="#loja" class="btn-loja">
            Loja online
          </a>
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>
/* O SEGREDO DO GRID: O Container */
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Estilos do Top Header --- */
.header-top {
  background-color: var(--cor-branco);
  border-bottom: 1px solid var(--cor-branco-escuro);
  padding: 8px 0;
}

.top-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: var(--cor-azul-escuro); /* Utilizando a sua variável */
  font-weight: 500;
}

.top-links li {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.top-links li:hover {
  opacity: 0.8;
}

/* Configuração dos SVGs e da imagem do logo */
.icon-svg {
  width: 16px;
  height: 16px;
  color: var(--cor-azul-escuro);
}

.icon-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.separator {
  color: var(--cor-branco-escuro);
  cursor: default !important;
}

.separator:hover {
  opacity: 1 !important;
}

/* --- Estilos do Main Header --- */
.header-main {
  background-color: var(--cor-azul-escuro); /* Mantendo a variável aqui também */
  padding: 16px 0;
}

.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--cor-branco);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-atendimento {
  color: var(--cor-branco);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.btn-loja {
  background-color: var(--cor-azul-bb);
  color: var(--cor-azul-escuro);
  font-weight: 600;
  padding: 8px 24px;
  border-radius: 9999px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-loja:hover {
  opacity: 0.9;
}
</style>