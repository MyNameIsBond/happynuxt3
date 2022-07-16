import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxt/image-edge'],
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
});
