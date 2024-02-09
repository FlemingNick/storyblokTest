export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css', '@/assets/scss/global.scss'],
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'ArWQUsXjGHg5UV7iAniVrQtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      }
    ],
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    assetsInclude: ['**/*.gltf', '**/*.glb'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/spacings.scss";
          @import "@/assets/scss/font-sizes.scss";
          @import "@/assets/scss/colors.scss";
          @import "@/assets/scss/font.scss";
          @import "@/assets/scss/focus.scss";
          `
        }
      }
    }
  }
});
