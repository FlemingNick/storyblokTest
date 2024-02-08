<script setup>
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: 'draft',
    resolve_links: 'url'
  });
  const headerMenu = ref(null);
  headerMenu.value = data.story.content.header_menu;
</script>

<template>
  <div class="header">
    <a href="/">
      <img
        class="logo"
        src="@/assets/images/medice-logo.svg"
        alt="Medice Health Family Logo"
      />
    </a>

    <nav class="menu">
      <li>
        <button class="menu__button">
          <img
            src="@/assets/images/burger.svg"
            alt="Menu"
          />
        </button>
      </li>

      <ul
        v-if="headerMenu"
        class="links"
      >
        <li
          v-for="blok in headerMenu"
          :key="blok._uid"
        >
          <NuxtLink :to="`/${blok.menu_link.cached_url}`">
            {{ blok.menu_link.story.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/navigation.scss';

  nav a.router-link-active {
    @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
  }
</style>
