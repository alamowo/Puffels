export default defineNuxtConfig({
  extends: 'content-wind',
  ssr: true,

  routeRules: {
    '/': { prerender: true }
  },

  app: {
    baseURL: '/Puffels/'
  },

  compatibilityDate: '2024-11-08'
})