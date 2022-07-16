<template>
  <div class="pt-10">
    <h2 class="font-medium text-base">{{ title }}</h2>
    <div v-for="article in articles.slice(0, 3)" :key="article.title">
      <span>{{ article.date }}</span>
      <h3>
        <NuxtLink :to="article.url">{{ article.title }}</NuxtLink>
      </h3>
      <p>{{ article.body }}</p>
      <div class="bg-slate-100">
        <nuxt-img v-if="article.image" :src="article.image" height="220" />
      </div>
    </div>
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
