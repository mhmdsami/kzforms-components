// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_APP_API_URL || "http://localhost:5000",
    },
  },
  css: ["~/assets/styles/global.scss"],
  postcss: {
    config: false,
  },
  modules: ["@formkit/nuxt"],
});
