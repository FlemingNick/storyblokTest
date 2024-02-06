<template>
  <div
    v-editable="blok"
    class="hero-container"
  >
    <div class="hero-wrapper">
      <div class="content">
        <div
          v-html="headlineContent"
          class="headline"
        ></div>

        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>

      <div class="video-wrapper">
        <svg
          viewBox="0 0 1 1"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
        >
          <defs>
            <clipPath
              id="leaf"
              clipPathUnits="objectBoundingBox"
            >
              <path
                d="M0.505,1L-0,1L-0,0.489C-0,0.219 0.222,-0 0.495,0L1,0L1,0.511C1,0.781 0.778,1 0.505,1Z"
                style="fill: white; fill-rule: nonzero"
              />
            </clipPath>
          </defs>
        </svg>

        <video
          autoplay
          muted
          loop
          id="myVideo"
        >
          <source
            v-bind:src="blok.video.filename"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <HeroBackground />
  </div>
</template>

<script setup>
  import HeroBackground from './HeroBackground/HeroBackground.vue';

  const props = defineProps({ blok: Object });

  const headlineContent = computed(() => renderRichText(props.blok.headline));
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/hero-section.scss';
</style>
