<template>
  <div
    v-editable="blok"
    class="teaser-container"
    :class="blok.layout"
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

        <GradientShape
          shape="leaf"
          :angle="120"
          :color="
            blok.layout === 'orange'
              ? '#EDAB00'
              : blok.layout === 'blue'
                ? '#CCDCF4'
                : blok.layout === 'green'
                  ? '#8BBCA5'
                  : '#dddddd'
          "
        />
      </div>

      <div class="content-wrapper">
        <div class="sub-header">
          <h2>{{ blok.subheadline }}</h2>
          <span class="sub-header__deko"></span>
        </div>

        <h3>{{ blok.headline }}</h3>
        <div v-html="textContent"></div>

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
  const props = defineProps({ blok: Object });

  const textContent = computed(() => renderRichText(props.blok.text));
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/teaser.scss';
</style>
