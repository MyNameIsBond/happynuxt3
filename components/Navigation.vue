<template>
  <div>
    <div class="flex flex-row pt-6 pb-10">
      <p v-for="item in items" :key="item.path" class="pr-12">
        <NuxtLink
          :to="item.to"
          class="text-black"
          :class="route.path === item.to ? '' : 'text-opacity-60'"
        >
          {{ item.text }}
          <div
            class="mt-1.5 rounded-full mx-auto"
            :class="
              route.path === item.to ? 'h-1 w-2 bg-black' : 'h-1 w-1 bg-none'
            "
          />
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
    text: 'Blog',
    to: '/blog',
  },
  {
    text: 'About',
    to: '/about',
  },
];
</script>

<style></style>
