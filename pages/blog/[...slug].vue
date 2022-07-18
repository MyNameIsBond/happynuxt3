<template>
  <div class="py-24">
    <breadcrumb />
    <p class="text-black text-opacity-40">{{ data.date }}</p>
    <h1 class="font-bold text-3xl py-3">{{ data.title }}</h1>
    <p>{{ data.description }}</p>
  </div>
  <main class="prose">
    <ContentRenderer :value="data" />
  </main>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
