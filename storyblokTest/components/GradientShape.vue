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
  const probs = defineProps({
    shape: {
      type: String,
      default: 'circle',
      validator: (value) => ['leaf', 'circle'].includes(value)
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    angle: {
      type: Number,
      default: 0
    }
  });

  const gradient = ref('linear-gradient(' + probs.angle + 'deg, ' + probs.color + '00 60%, ' + probs.color + ' 100%)');
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/gradient-shape.scss';

  .gradient-shape {
    background: v-bind(gradient);
  }
</style>
