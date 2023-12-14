export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
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
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
