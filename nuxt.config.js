export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/test-gatilho/s-raf--ab'
    // base: '/'
  },
  generate: {
    dir: 's-raf--ab'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Seja um Franqueado Farmácias São Rafael',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' },

      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'Content-Language', content: 'pt-BR' },

      { name: 'robots', content: 'index,follow' },
      { name: 'author', content: 'Gatilho' },
      { name: 'copyright', content: 'Gatilho' },

      { name: 'title', content: 'Seja um Franqueado Farmácias São Rafael' },
      { name: 'description', content: 'Transforme seu negócio sendo franqueado em um segmento em constante expansão.' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.farmasaorafael.com.br' },
      { property: 'og:title', content: 'Seja um Franqueado Farmácias São Rafael' },
      { property: 'og:description', content: 'Transforme seu negócio sendo franqueado em um segmento em constante expansão.' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://www.farmasaorafael.com.br' },
      { property: 'twitter:title', content: 'Seja um Franqueado Farmácias São Rafael' },
      { property: 'twitter:description', content: 'Transforme seu negócio sendo franqueado em um segmento em constante expansão.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/test-gatilho/s-raf--ab/favicon.ico' }
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { hid: 'rdstation', type: 'text/javascript', src: 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/5270d3c1-654a-40e6-a787-f6d0007bd361-loader.js', async: true, defer: true }
    ]
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/main.scss',
    'assets/css/preload.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/GTM.js', mode: 'client' },
    { src: '~/plugins/sendEmail.js', mode: 'client' },
    { src: '~/plugins/youtube.js', mode: 'client' },
    { src: '~/plugins/pinia.js' },
    { src: '~/plugins/toast.js', mode: 'client' },
    { src: '~/plugins/brasil.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/popups'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    'nuxt-windicss',
    '@nuxtjs/device',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://franquiasaorafael.com.br/',
    exclude: [
      '/obrigado'
    ]
  },

  env: {
    RD_API_KEY: 'PqIurRbTRKlwHhWbVgipamxIMUcznlukuJHx'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
