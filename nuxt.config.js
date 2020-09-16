export default {
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },

  transitions: {
    name: 'fade',
    mode: 'out-in',
    appear: true
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/general.scss',
    '~/assets/style/theme.scss',
    '~/assets/style/_transitions.scss',

  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/filters',
    '@/plugins/directives',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [
    '~/components/',
    { path: '~/components/Product/', prefix: 'Product' },
    { path: '~/components/Navbar/', prefix: 'Navbar'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/color-mode',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    ['nuxt-lazy-load', {
      defaultImage: '/img/bg.png',
    }],
    '@sum.cumo/nuxt-styleguide'
  ],
  svgSprite: {
    // manipulate module options
  },

  styleResources: {
    scss: [
      '~/assets/style/_variables.scss',
      '~/assets/style/_mixins.scss',
    ],
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
};
