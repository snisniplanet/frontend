module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'SNISNI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /**
   ** Server middleware mapping
   */
  serverMiddleware: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy'
  ],
  /**
   * Buefy module configuration
   * See https://github.com/buefy/nuxt-buefy
   */
  buefy: {
    css: false,
    materialDesignIcons: true
  },
  /*
   ** Http module configuration
   ** See https://http.nuxtjs.org/api/#prefix
   */
  //http: {
  //  proxy: true
  //},
  axios: {
    baseURL: 'http://backend/',
    browserBaseURL: 'http://localhost:8080',
    proxy: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
