// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  css: ["~/assets/styles/global.scss"],
  postcss: {
    config: false,
  },
  modules: ["@formkit/nuxt"],
});
