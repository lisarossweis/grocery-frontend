// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
     '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore'
    ],
  },
  webpack: {
    ignored: ['node_modules']
  }
})
