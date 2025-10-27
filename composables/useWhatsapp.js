import { computed } from 'vue'
import { useRoute } from 'vue-router'

const NUMERO_CONSTRUTORA = '554192546682' 
const NUMERO_OUTRAS_PAGINAS = '554184729241' 

export const useWhatsapp = () => {
  const route = useRoute()

  const currentWhatsappNumber = computed(() => {
    
    if (route.name === 'construtora') {
      return NUMERO_CONSTRUTORA
    }

    return NUMERO_OUTRAS_PAGINAS
  })

  const currentDefaultMessage = computed(() => {
    
    if (route.name === 'construtora') {
      return 'Olá! Gostaria de fazer um orçamento.'
    }
    
    return 'Olá!. Gostaria de fazer um orçamento.'
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