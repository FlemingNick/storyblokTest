<template>
  <div
    v-editable="blok"
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center feature-container"
  >
    <img v-bind:src="blok.image.filename" v-bind:alt="blok.image.name"/>

    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.name }}
    </h3>

    <p>{{blok.content}}</p>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/feature.scss";
</style>
