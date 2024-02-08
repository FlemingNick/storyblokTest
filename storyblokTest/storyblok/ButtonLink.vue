<template>
  <a
    ref="buttonRef"
    v-editable="blok"
    class="btn-link"
    v-bind:href="blok.link.url"
  >
    <span>
      {{ blok.name }}
    </span>
    <img
      v-if="blok.icon"
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
  import { ref, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';

  defineProps({ blok: Object });

  let buttonRef = ref();
  let buttonHoverRef = ref();

  function mouseMove(e) {
    if (buttonRef.value) {
      let buttonBoundingClient = buttonRef.value.getBoundingClientRect();
      let mouseOriginX = e.clientX - buttonBoundingClient.left;
      let mouseOriginY = e.clientY - buttonBoundingClient.top;

      if (
        mouseOriginX > 0 &&
        mouseOriginX < buttonBoundingClient.width &&
        mouseOriginY > 0 &&
        mouseOriginY < buttonBoundingClient.height
      ) {
        gsap.to(buttonHoverRef.value, {
          x: mouseOriginX,
          y: mouseOriginY,
          duration: 0.3,
          ease: 'none'
        });
      }
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', (e) => mouseMove(e));
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', mouseMove);
  });
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/buttonLink.scss';
</style>
