<template>
  <a
    ref="buttonRef"
    v-editable="blok"
    class="btn-link"
    v-bind:href="blok.link"
  >
    <span>
      {{ blok.name }}
    </span>
    <img
      src="@/assets/images/chevron.svg"
      alt="navigation arrow"
      aria-hidden
    />

    <div
      ref="buttonHoverRef"
      class="desktop-hover"
    ></div>
  </a>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';

  defineProps({ blok: Object });

  let buttonRef = ref();
  let buttonHoverRef = ref();

  onMounted(() => {
    window.addEventListener('mousemove', (e) => {
      let buttonBoundingClient = buttonRef.value.getBoundingClientRect();
      let mouseOriginX = e.clientX - buttonBoundingClient.left;
      let mouseOriginY = e.clientY - buttonBoundingClient.top;
      let mouseDamping = 0;

      console.log(mouseOriginY);

      gsap.to(buttonHoverRef.value, {
        x: mouseOriginX,
        y: mouseOriginY,
        duration: 0.3,
        ease: 'none'
      });
    });
  });
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/buttonLink.scss';
</style>
