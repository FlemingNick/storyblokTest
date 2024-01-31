<template>
    <a 
    v-editable="blok"
    class="btn-link"
    v-bind:href="blok.link">
        {{ blok.name }}
        <img src="@/assets/images/chevron.svg" alt="Navigationspfeil" aria-hidden>
    </a>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  </script>
  
  <style lang="scss" scoped>
    @import "~/assets/scss/buttonLink.scss";
  </style>