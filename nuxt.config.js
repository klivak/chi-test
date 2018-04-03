module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'chilindo-test',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Chilindo test project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  loading: {
    color: '#3B8070'
  },
  plugins: [
    '~plugins/vue-vuefire',
    '~plugins/vue-veevalidate',
    '~plugins/vue-ls'
  ],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: [
      'Firebase'
    ],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
