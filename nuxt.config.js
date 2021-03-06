require("dotenv").config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "MEVN Stack starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project"
      }
    ],
    script: [{ src: "https://checkout.stripe.com/checkout.js", body: true }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  plugins: ["~/plugins/vuetify.js"],
  css: ["~/assets/style/app.styl"],

  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "@nuxtjs/font-awesome"],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    "/auth/google": "http://localhost:3000",
    "/api/*": "http://localhost:3000"
  },

  env: {
    STRIPE_KEY: process.env.STRIPE_KEY || "pk_test_d2v1b7bw9kJC8R5x5m7UApEa"
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["~/plugins/vuetify.js"],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
