<template>
  <div>
    <Navigation />
    <slot />

    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Navigation from './navigation.vue';
  import Footer from './footer.vue';
</script>

<style></style>
