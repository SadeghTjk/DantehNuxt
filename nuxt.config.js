export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Danteh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lalezar&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap'},
    ],
    script: [
      {src:'https://code.jquery.com/jquery-3.5.1.slim.min.js', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',crossorigin:'anonymous' },
      {src:'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', integrity:'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN', crossorigin: 'anonymous'},
      {src:'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',integrity:'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV',crossorigin:'anonymous'},
      {src: '/danteh.js'},
      {src: "https://kit.fontawesome.com/64ae75d96a.js", crossorigin: "anonymous"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.css','@/layouts/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/parseplugin.js','@/plugins/carousel.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
        child_process: 'empty',
      };
    },
    
  },
  router: {
    base: '/awk/'
  },
  auth: {
    cookie: {
        options: {
            sameSite: 'lax',
        },
    },
},
}
