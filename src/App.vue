<template>
  <NavBar />
  <RouterView />
  <notifications />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>