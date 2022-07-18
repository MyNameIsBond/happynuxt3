<template>
  <div>
    <div class="max-w-sm">
      <span class="font-base text-sm text-opacity-40 text-black">{{
        article.date
      }}</span>
      <h3 class="pt-1">
        <NuxtLink class="cursor-pointer font-medium" :to="article._path">{{
          article.title
        }}</NuxtLink>
      </h3>
      <p class="py-2.5 text-black text-opacity-60">{{ article.description }}</p>
      <HappyLink :to="article._path" :title="'read more'" />
    </div>
  </div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline';
export default {
  components: { ArrowNarrowRightIcon },
  props: {
    article: {
      title: String,
      date: String,
      _path: String,
    },
  },
};
</script>

<style></style>
