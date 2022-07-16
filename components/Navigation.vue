<template>
  <div>
    <div class="flex flex-row pt-6 pb-10">
      <p v-for="item in items" :key="item.path" class="pr-12">
        <NuxtLink
          :to="item.to"
          class="text-slate-800"
          :class="route.path === item.to ? '' : 'text-opacity-60'"
        >
          {{ item.text }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const items = [
  {
    text: 'The Happy Programmer',
    to: '/',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
];
</script>

<style></style>
