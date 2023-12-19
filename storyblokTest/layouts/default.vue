<template>
  <div>
    <Header/>
    <slot />

    <Footer/>
  </div>
</template>

<script lang="ts" setup>
  import Header from './header.vue'
  import Footer from './footer.vue'
</script>

<style>

</style>