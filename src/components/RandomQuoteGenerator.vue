<template>
    <div class="quote-generator">
    <h1 class="app-title">Random Quote Generator</h1>

    <blockquote class="quote-container">
      <p>{{ currentQuote.text }}</p>
      <cite>{{ currentQuote.author }}</cite>
    </blockquote>

    <button @click="getRandomQuote()"  class="quote-button">
      Get Random Quote
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const quotes = ref([
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
]);

const currentQuote = ref({ text: '', author: ''});

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.value.length);
    currentQuote.value = quotes.value[randomIndex];
}

onMounted(() => getRandomQuote());

</script>

<style lang="scss" scoped></style>
