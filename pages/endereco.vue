<template>
  <section class="endereco">
    <div class="container">
      <h1>Nossa Localização</h1>
      <p>
        Venha nos visitar em nossa loja física. Estamos localizados em um local de fácil acesso
        com estacionamento disponível para nossos clientes.
      </p>
      
      <div class="endereco-info">
        <h2>Endereço</h2>
        <p>Rua Exemplo, 123 - Centro<br>
        Curitiba - PR, 80000-000</p>
        
        <h2>Horário de Funcionamento</h2>
        <p>Segunda a Sexta: 8h às 18h<br>
        Sábado: 8h às 12h<br>
        Domingo: Fechado</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Página estática provisória
</script>

<style scoped>
.endereco {
  padding: 6rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: var(--font-primaria);
  font-size: var(--f5);
  margin-bottom: 1rem;
}

h2 {
  font-family: var(--font-primaria);
  font-size: var(--f3);
  margin: 2rem 0 1rem 0;
  color: var(--cor-azul-escuro);
}

p {
  font-family: var(--font-secundaria);
  font-size: var(--f2);
  color: var(--cor-cinza-escuro);
  line-height: 1.6;
}

.endereco-info {
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--cor-cinza-claro);
  border-radius: 8px;
}
</style>
