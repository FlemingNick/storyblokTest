<script setup>
import Footer from './footer.vue'
import Header from './header.vue'
const story = await useAsyncStoryblok('home', { version: 'draft' },
{ customParent: 'https://app.storyblok.com' })
</script>

<script scoped>
 
</script>

<template>
  <Header/>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <Footer/>
</template>
