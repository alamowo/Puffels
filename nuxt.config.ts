export default defineNuxtConfig({
  extends: 'content-wind',
  ssr: true,
  routeRules: {
    '/': { prerender: true }
  }
})
