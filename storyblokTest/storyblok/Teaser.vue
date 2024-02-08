<template>
  <div
    v-editable="blok"
    class="teaser-container"
  >
    <div
      class="teaser-content"
      :class="blok.imageRight ? 'right' : 'left'"
    >
      <div class="media-wrapper">
        <svg
          viewBox="0 0 1 1"
          style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
        >
          <defs>
            <clipPath
              :id="blok._uid"
              clipPathUnits="objectBoundingBox"
            >
              <path
                d="M0.505,1L-0,1L-0,0.489C-0,0.219 0.222,-0 0.495,0L1,0L1,0.511C1,0.781 0.778,1 0.505,1Z"
                style="fill: white; fill-rule: nonzero"
                :style="blok.imageRight ? 'transform: rotate(180deg)' : 'transform: rotate(90deg)'"
              />
            </clipPath>
          </defs>
        </svg>

        <div class="image-wrapper">
          <img
            v-bind:src="blok.media.filename"
            v-bind:alt="blok.media.name"
            :style="{ clipPath: 'url(#' + blok._uid + ')' }"
          />
        </div>
      </div>
      <div class="content-wrapper">
        <h2 class="sub-header">{{ blok.subheadline }}</h2>
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.text }}</p>

        <StoryblokComponent
          v-for="blok in blok.button"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import ButtonLink from './ButtonLink.vue';

  defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/teaser.scss';
</style>
