<template>
  <div>
    <div class="max-w-sm">
      <span class="font-base text-sm text-opacity-40 text-black">{{
        article.date
      }}</span>
      <h3 class="pt-1">
        <NuxtLink class="cursor-pointer font-medium" :to="article.url">{{
          article.title
        }}</NuxtLink>
      </h3>
      <p class="py-2.5 text-black text-opacity-60">{{ article.body }}</p>
      <HappyLink :to="article.url" :title="article.title" newtab />
    </div>
    <div class="bg-black bg-opacity-5 h-32 w-32 rounded-2xl flex items-center">
      <nuxt-img v-if="article.image" :src="article.image" height="220" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      title: String,
      date: String,
      body: String,
      image: String,
      url: String,
    },
  },
};
</script>

<style></style>
