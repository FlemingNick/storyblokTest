<template>
    <a 
    v-editable="blok"
    class="btn-link"
    v-bind:href="blok.link">
        {{ blok.name }}
    </a>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  </script>
  
  <style lang="scss" scoped>
    @import "~/assets/scss/buttonLink.scss";
  </style>