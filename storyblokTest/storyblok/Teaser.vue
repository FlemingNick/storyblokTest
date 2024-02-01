<template>
  <div
    v-editable="blok"
    class="teaser-container"
  >
    <div class="teaser-content">
      <div class="media-wrapper">
        <img
          v-bind:src="blok.media.filename"
          v-bind:alt="blok.media.name"
        />
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
      </div>
      <div class="content-wrapper">
        <h2 class="sub-header">{{ blok.subheadline }}</h2>
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.text }}</p>
        <a
          href="#"
          class="btn"
          >Zur Health Academy</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/teaser.scss';
</style>
