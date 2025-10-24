<template>
  <div>
    <Header :navLinks="navLinks" />

    <NuxtPage />

    <Footer
      :atalhosLinks="atalhosLinks"
      :informacoesLinks="informacoesLinks"
      :atendimentoLinks="atendimentoLinks"
    />
  </div>
</template>

<script setup>
import { useLinkState } from "~/composables/useLinkState";
import Header from "~/components/global/Header.vue";
import Footer from "~/components/global/Footer.vue";

const { navLinks, atalhosLinks, informacoesLinks, atendimentoLinks } =
  useLinkState();
</script>
