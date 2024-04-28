export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix:false,
    },
  ],
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
  ]
})
