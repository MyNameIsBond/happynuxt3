<template>
  <div>
    <hero />
    <article-list title="Projects" :articles="articles" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: 'The Happy Programmer',
          date: '2020-01-01',
          body: 'THP is the main website where is contains everything we do. THP is the main website where is contains everything we do.',
          image: '/img/next.png',
          url: 'https://thehappyprogrammer.com/',
        },
        {
          title: 'Happy Nuxt',
          date: '2020-01-02',
          body: 'THP is the main website where is contains everything we do. THP is the main website where is contains everything we do.',
          image: '/img/nuxt2.png',
          url: 'https://happynuxtjs.com/',
        },
        {
          title: 'Project 3',
          date: '2020-01-03',
          body: 'THP is the main website where is contains everything we do. THP is the main website where is contains everything we do.',
          image: '/img/next.png',
          url: '/project/3',
        },
        {
          title: 'Project 3',
          date: '2020-01-03',
          body: 'THP is the main website where is contains everything we do. THP is the main website where is contains everything we do.',
          image: '/img/next.png',
          url: '/project/3',
        },
      ],
    };
  },
};
</script>

<style></style>
