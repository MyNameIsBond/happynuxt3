<template>
  <div class="pt-24">
    <h2 class="font-medium text-base pb-7">{{ title }}</h2>
    <article-display
      class="flex flex-row justify-between pb-14 items-center"
      v-for="article in articles.slice(0, 3)"
      :key="article.title"
      :article="article"
    />
    <HappyLink to="/projects" title="view all the projects" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    articles: Array,
  },
};
</script>

<style></style>
