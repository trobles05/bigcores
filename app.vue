<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

useHead({
  title: computed(() => {
    const map = {
      '/': 'Home',
      '/construtora': 'Construtora',
      '/atendimento': 'Atendimento',
      '/endereco': 'Endereço',
      '/sobre-nos': 'Sobre Nós'
    }

    return map[route.path] || 'Big Cores Tintas'
  })
})
</script>