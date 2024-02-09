<template>
  <div
    v-if="shape === 'circle'"
    class="gradient-shape circle"
    style=""
  ></div>

  <div
    v-if="shape === 'leaf'"
    class="gradient-shape leaf"
  ></div>
</template>

<script setup>
  defineProps({
    shape: {
      type: String,
      default: 'circle',
      validator: (value) => ['leaf', 'circle'].includes(value)
    },
    gradientStart: String,
    gradientEnd: String,
    gradientAngle: String
  });
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/gradient-shape.scss';
</style>
