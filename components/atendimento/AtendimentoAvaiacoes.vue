<template>
  <section class="avaliacoes-section" ref="avaliacoesSection">
    <div class="container">
      <div
        class="avaliacoes-header"
        :class="{ 'is-visible': isVisible.avaliacoes }"
      >
        <span class="section-label">Opinião de quem confia</span>
        <h2 class="section-title">O que nossos clientes dizem</h2>
      </div>

      <div
        class="avaliacoes-grid"
        :class="{ 'is-visible': isVisible.avaliacoes }"
      >
        <div class="form-coluna">
          <h3 class="form-title">Deixe sua avaliação</h3>
          <p class="form-subtitle">Sua opinião é muito importante para nós!</p>
          <form @submit.prevent="handleSubmitAvaliacao" class="avaliacao-form">
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                v-model="formNome"
                placeholder="Seu nome"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email de Contato</label>
              <input
                type="email"
                id="email"
                v-model="formEmail"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="mensagem">Sua Mensagem</label>
              <textarea
                id="mensagem"
                v-model="formMensagem"
                rows="5"
                placeholder="Conte-nos sobre sua experiência..."
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label>Sua Nota</label>
              <div class="star-rating-input">
                <input
                  type="radio"
                  id="star5"
                  name="rating"
                  value="5"
                  v-model="formRating"
                /><label for="star5" title="5 estrelas">★</label>
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  v-model="formRating"
                /><label for="star4" title="4 estrelas">★</label>
                <input
                  type="radio"
                  id="star3"
                  name="rating"
                  value="3"
                  v-model="formRating"
                /><label for="star3" title="3 estrelas">★</label>
                <input
                  type="radio"
                  id="star2"
                  name="rating"
                  value="2"
                  v-model="formRating"
                /><label for="star2" title="2 estrelas">★</label>
                <input
                  type="radio"
                  id="star1"
                  name="rating"
                  value="1"
                  v-model="formRating"
                /><label for="star1" title="1 estrela">★</label>
              </div>
            </div>

            <button type="submit" class="submit-btn">Enviar Avaliação</button>
          </form>
        </div>

        <div class="reviews-coluna">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="review-card"
            :style="{ transitionDelay: `${index * 0.15}s` }"
          >
            <div class="review-quote-icon">"</div>
            <p class="review-text">{{ review.text }}</p>
            <p class="review-author">{{ review.author }}</p>
            <div class="review-stars">
              <span v-for="n in review.stars" :key="n">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const avaliacoesSection = ref(null);
const isVisible = ref({
  avaliacoes: false,
});

const defaultReviews = [
  {
    text: "Sou bem atendido pela Cida e pelo Victor. Loja tem produtos de qualidade, tem compromisso e seriedade. Estão de parabéns",
    author: "Wanderley P.",
    stars: 5,
  },
  {
    text: "Atendimento excelente! Quando precisarem, procurem pela Hellen, ela é muito atenciosa!",
    author: "Emanueli L.",
    stars: 5,
  },
  {
    text: "Atendimento excelente! Fui muito bem atendida pela vendedora Dora, que demonstrou total conhecimento sobre os produtos e me ajudou a escolher exatamente o que eu precisava. Super atenciosa, educada e prestativa.",
    author: "Jessica Camargo",
    stars: 5,
  },
];

const reviews = ref([]);
const formNome = ref("");
const formEmail = ref("");
const formMensagem = ref("");
const formRating = ref(0);

const storageKey = "minhasAvaliacoesBigCores";

const salvarReviews = () => {
  localStorage.setItem(storageKey, JSON.stringify(reviews.value));
};

const carregarReviews = () => {
  const dadosSalvos = localStorage.getItem(storageKey);

  if (dadosSalvos) {
    reviews.value = JSON.parse(dadosSalvos);
  } else {
    reviews.value = defaultReviews;
  }
};

const handleSubmitAvaliacao = async () => {
  if (
    !formNome.value ||
    !formEmail.value ||
    !formMensagem.value ||
    formRating.value === 0
  ) {
    alert("Por favor, preencha todos os campos e selecione uma avaliação.");
    return;
  }

  const novaAvaliacao = {
    text: formMensagem.value,
    author: formNome.value,
    stars: parseInt(formRating.value),
  };

  reviews.value.unshift(novaAvaliacao);
  salvarReviews();

  const formData = {
    nome: formNome.value,
    email: formEmail.value,
    mensagem: formMensagem.value,
    nota: formRating.value,
  };

  try {
    await fetch("https://formspree.io/f/mblzvnzb", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Avaliação enviada para o email da empresa!");
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
  }

  formNome.value = "";
  formEmail.value = "";
  formMensagem.value = "";
  formRating.value = 0;

  const radioButtons = document.getElementsByName("rating");
  radioButtons.forEach((radio) => (radio.checked = false));
};

let observer;

onMounted(() => {
  carregarReviews();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === avaliacoesSection.value) {
          isVisible.value.avaliacoes = entry.isIntersecting;
        }
      });
    },
    { threshold: 0.2 }
  );

  if (avaliacoesSection.value) {
    observer.observe(avaliacoesSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.avaliacoes-section {
  padding: 8rem 0;
  background: var(--cor-branco);
}

.avaliacoes-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.avaliacoes-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.avaliacoes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.avaliacoes-grid.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 1024px) {
  .avaliacoes-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.form-coluna {
  background: #f9fafb;
  padding: 3rem;
  border-radius: 26px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--cor-azul-escuro);
  margin-bottom: 0.5rem;
}

.form-subtitle {
  font-size: var(--f1);
  color: var(--cor-preto);
  margin-bottom: 2.5rem;
}

.avaliacao-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: var(--regular);
  color: var(--cor-preto);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 26px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--cor-azul-escuro);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.star-rating-input {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.star-rating-input input[type="radio"] {
  display: none;
}

.star-rating-input label {
  font-size: 2.5rem;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0 0.15em;
}

.star-rating-input label:hover,
.star-rating-input label:hover ~ label,
.star-rating-input input[type="radio"]:checked ~ label {
  color: #ffcc00;
}

.submit-btn {
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: var(--cor-cinza-claro);
  color: var(--cor-branco);
  background: var(--cor-laranja);
  border: none;
  border-radius: 26px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #e14e14;
  transform: translateY(-2px);
}

.reviews-coluna {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    max-height: 50rem;
    overflow-y: auto;
    padding-right: 0.75rem;
  }
}

.review-card {
  position: relative;
  background: var(--cor-branco);
  padding: 2.5rem;
  padding-top: 3.5rem;
  border-radius: 26px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s ease-out;
  flex-shrink: 0;
}

.avaliacoes-grid.is-visible .review-card {
  transform: translateY(0);
  opacity: 1;
}

.review-quote-icon {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  font-weight: 800;
  color: var(--cor-cinza-claro);
  line-height: 1;
}

.review-text {
  position: relative;
  font-size: 1.125rem;
  color: var(--cor-preto);
  opacity: 0.8;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.review-author {
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.review-stars {
  font-size: 1.25rem;
  color: #facc15;
}

.container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-label {
  color: var(--cor-laranja);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--cor-azul-escuro);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
@media (max-width: 1000px) {
  .avaliacoes-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .avaliacoes-header {
    margin-bottom: 3rem;
  }

  .avaliacoes-grid {
    gap: 3rem;
  }

  .form-coluna {
    padding: 2.5rem 1.5rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .review-card {
    padding: 2.5rem 1.5rem;
    padding-top: 3rem;
  }

  .review-quote-icon {
    font-size: 3.5rem;
    top: 0.5rem;
    left: 1rem;
  }

  .review-text {
    font-size: 1rem;
  }

  .star-rating-input label {
    font-size: 2.25rem;
  }
}
</style>
