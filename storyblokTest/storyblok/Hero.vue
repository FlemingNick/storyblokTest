<template>
    <div
      v-editable="blok"
      class="hero-container"
      v-bind:style="{'background-image' : 'url(' + blok.background.filename +')'}"
    >

    <video autoplay muted loop id="myVideo">
        <source v-bind:src="blok.video.filename" type="video/mp4">
    </video>
  
    <div class="content">
        <h1 class="headline">
            {{ blok.headline }}
          </h1>
    
          <p>{{blok.content}}</p>
          <StoryblokComponent
            v-for="blok in blok.button"
            :key="blok._uid"
            :blok="blok"
            />
    </div>
      
    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  </script>
  
  <style lang="scss" scoped>
    @use "~/assets/scss/hero.scss";
  </style>