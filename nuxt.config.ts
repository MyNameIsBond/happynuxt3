import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxt/image-edge', '@nuxt/content'],
  css: ['~/assets/css/tailwind.css'],
  target: 'static',
  ssr: false,
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
    highlight: {
      // Theme used in all color schemes.
      theme: 'one-dark-pro',
    },
  },
});

/*
 'css-variables' | 
 'dark-plus' | 
 'dracula-soft' 
 | 'dracula' | 
 'github-dark-dimmed' 
 | 'github-dark' | 
 'github-light' | 
 'light-plus' | 
 'material-darker' 
 | 'material-default' 
 | 'material-lighter' 
 | 'material-ocean' 
 | 'material-palenight' 
 | 'min-dark' 
 | 'min-light' 
 | 'monokai' 
 | 'nord' 
 | 'one-dark-pro' 
 | 'poimandres' 
 | 'slack-dark' 
 | 'slack-ochin' 
 | 'solarized-dark' 
 | 'solarized-light' 
 | 'vitesse-dark' 
 | 'vitesse-light';
 */
