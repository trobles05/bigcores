import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Centralizando os números aqui
const NUMERO_CONSTRUTORA = '554192546682' 
const NUMERO_INDUSTRIAL = '5541988051330' // O novo número que você definiu
const NUMERO_OUTRAS_PAGINAS = '554192433140' 

export const useWhatsapp = () => {
  const route = useRoute()

  const currentWhatsappNumber = computed(() => {
    // Lógica para Construtora
    if (route.name === 'construtora') {
      return NUMERO_CONSTRUTORA
    }
    
    // Nova lógica para Industrial
    if (route.name === 'industrial') {
      return NUMERO_INDUSTRIAL
    }

    return NUMERO_OUTRAS_PAGINAS
  })

  const currentDefaultMessage = computed(() => {
    if (route.name === 'construtora') {
      return 'Olá! Gostaria de fazer um orçamento para minha obra.'
    }

    if (route.name === 'industrial') {
      return 'Olá! Gostaria de um suporte técnico especializado para minha indústria.'
    }
    
    return 'Olá! Gostaria de fazer um orçamento.'
  })

  const whatsappLink = computed(() => {
    const number = currentWhatsappNumber.value
    const message = encodeURIComponent(currentDefaultMessage.value)
    return `https://wa.me/${number}?text=${message}`
  })
 
  return {
    whatsappLink,
    currentWhatsappNumber,
    currentDefaultMessage
  }
}