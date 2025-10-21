<template>
  <div>
    <section class="info-section">
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
              <NuxtLink to="/lojas" class="link-loja">
                Visite nossas lojas &rightarrow;
              </NuxtLink>
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="stats-section">
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
  </div>
</template>

<script setup>
import presenteIcone from '~/assets/images/presenteIcone.png';
import rolotintaIcone from '~/assets/images/rolotintaIcone.png';
</script>

<style scoped>
/* --- Estilos Seção 1 (Info) --- */
.info-section {
  width: 100%;
  padding: 40px 120px; 
  background-color: #f8f8f8;
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
  justify-content: flex-start;
  padding: 2rem;
  background-color: #f6f6f6;
  border-radius: 16px;
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
  font-size: var(--f2);
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

/* --- Estilos Seção 2 (Stats) --- */
.stats-section {
  width: 100%;
  padding: 40px 120px; 
  background-color: #333;
  box-sizing: border-box;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 24px;
  max-width: 100%;
}

.stats-card {
  background-color: #f6f6f6;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  min-height: 100px;
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