<template>
  <div>
    <Header />
    <slot />

    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from '../components/Header.vue';
  import Footer from './footer.vue';
</script>

<style></style>
