<template>
  <div>
    <hero />
    <article-list title="Projects" :articles="articles" />
    <div class="pt-36" />
    <blog-list />
    <happy-link to="/blog" title="view all the posts" />
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
          body: 'THP is the main website where is contains everything we do.',
          image: '/img/next.png',
          url: 'https://thehappyprogrammer.com/',
        },
        {
          title: 'Happy Nuxt',
          date: '2020-01-02',
          body: 'Happy nuxt was initially, a course for nuxtjs and how to create a documentation-like website. A blog based on markdown files.',
          image: '/img/nuxt2.png',
          url: 'https://happynuxtjs.com/',
        },
        {
          title: 'Happy Nuxt',
          date: '2020-01-03',
          body: 'THP is the main website where is contains everything we do.',
          image: '/img/next.png',
          url: '/project/3',
        },
      ],
    };
  },
};
</script>

<style></style>
