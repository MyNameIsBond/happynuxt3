import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxt/image-edge', '@nuxt/content'],
  css: ['~/assets/css/tailwind.css'],
  target: 'static',
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  image: {
    // Options
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
