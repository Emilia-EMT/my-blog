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

    '@nuxtjs/mdc'
  ],
  mdc: {
    remarkPlugins: {
      plugins: {
        // Register/Configure remark plugin to extend the parser
      }
    },
    rehypePlugins: {
      options: {
        // Configure rehype options to extend the parser
      },
      plugins: {
        // Register/Configure rehype plugin to extend the parser
      }
    },
    headings: {
      anchorLinks: {
        // Enable/Disable heading anchor links. { h1: true, h2: false }
      }
    },
    highlight: false, // Control syntax highlighting
    components: {
      prose: false, // Add predefined map to render Prose Components instead of HTML tags, like p, ul, code
      map: {
        //p: 'MyCustomPComponent'// This map will be used in `<MDCRenderer>` to control rendered components
      }
    }
  }
})
