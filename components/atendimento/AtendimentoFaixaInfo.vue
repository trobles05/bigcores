<template>
  <section class="wrapper-section">
    
    <div class="info-wrapper">
      <div class="info-card">
        <img :src="presenteIcone" alt="Ícone de presente" class="info-icon" />
        <div class="info-text">
          <p class="info-title">3% OFF no primeiro pedido!</p>
          <p class="info-subtitle">
            Use o cupom: <span class="cupom">primeiracompra</span>
          </p>
        </div>
      </div>
      
      <div class="info-card">
        <img :src="rolotintaIcone" alt="Ícone de rolo de tinta" class="info-icon" />
        <div class="info-text">
          <p class="info-title">As melhores cores é aqui</p>
          <p class="info-subtitle">
            <a href="https://www.bigcorestintas.com.br/"  target="_blank" class="link-loja">
              Visite nossas lojas &rightarrow;
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="stats-wrapper">
      <div class="stats-card">
        <p class="stats-number orange">100.000</p>
        <p class="stats-label">Clientes satisfeitos</p>
      </div>
      
      <div class="stats-card">
        <p class="stats-number">Mais de <span class="orange">3000</span></p>
        <p class="stats-label">Variedades de cor</p>
      </div>

      <div class="stats-card">
        <p class="stats-number orange">7</p>
        <p class="stats-label">Lojas físicas</p>
      </div>

      <div class="stats-card">
        <p class="stats-number">Mais de <span class="orange">30 anos</span></p>
        <p class="stats-label">No mercado</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import presenteIcone from '~/assets/images/presenteIcone.png';
import rolotintaIcone from '~/assets/images/rolotintaIcone.png';
</script>

<style scoped>
.wrapper-section {
  width: 100%;
  padding: 160px ; 
  background-color: var(--cor-cinza-escuro);
  box-sizing: border-box;
}

.info-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 100%;
}

.info-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.4rem 2rem;
  background-color: var(--cor-branco);
  border-radius: 26px;
  gap: 1.5rem;
}

.info-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-title {
  font-size: var(--f4);
  font-weight: var(--bold);
  color: var(--cor-preto);
  margin: 0;
  line-height: 1.3;
}

.info-subtitle {
  font-size: var(--f1);
  color: var(--cor-cinza-escuro);
  margin: 0;
}

.info-subtitle .cupom {
  color: var(--cor-laranja);
  font-weight: var(--bold);
}

.info-subtitle .link-loja {
  color: var(--cor-azul-escuro);
  font-weight: var(--bold);
  text-decoration: none;
  transition: opacity 0.2s;
}

.info-subtitle .link-loja:hover {
  opacity: 0.8;
}

.divider {
  width: 100%;
  border-top: 1px solid var(--cor-cinza-claro);
  margin: 24px 0;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 24px;
  max-width: 100%;
}

/* --- AJUSTE FEITO AQUI --- */
.stats-card {
  background-color: var(--cor-branco);
  border-radius: 16px;
  padding: 1.5rem 1rem; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  max-width: 220px; 
  justify-self: center; 
  aspect-ratio: 1.3 / 1; 
}

.stats-number {
  font-size: var(--f3);
  font-weight: var(--bold);
  color: var(--cor-azul-escuro);
  margin: 0;
  line-height: 1.4;
}

.stats-label {
  font-size: var(--f2);
  font-weight: var(--regular);
  color: var(--cor-azul-escuro);
  margin: 0;
}

.stats-number.orange {
  color: var(--cor-laranja);
  font-size: var(--f3);
}

.stats-number .orange {
  color: var(--cor-laranja);
  font-size: var(--f3);
}


</style>