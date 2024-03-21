<script setup>
import Accordian from './components/Accordian.vue';
import DadJokes from './components/DadJokes.vue';
import FormValidation from './components/FormValidation.vue';
import GithubUserSearch from './components/GithubUserSearch.vue';
import PasswordGenerator from './components/PasswordGenerator.vue';
import ProgressStep from './components/ProgressStep.vue';
import RandomQuoteGenerator from './components/RandomQuoteGenerator.vue';
import TodoList from './components/TodoList.vue';


</script>

<template>
  <!-- <TodoList /> -->
  <!-- <RandomQuoteGenerator /> -->
  <!-- <Accordian /> -->
  <!-- <FormValidation /> -->
  <!-- <PasswordGenerator /> -->
  <!-- <ProgressStep /> -->
  <!-- <DadJokes /> -->
  <GithubUserSearch />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
