<template>
  <div class="py-20">
    <subscribe />
    <h6 class="font-medium py-5">Contact</h6>
    <div class="flex space-x-3 underline-offset-1 text-opacity-80 text-black">
      <HappyLink
        v-for="social in socials"
        :key="social.name"
        :to="social.url"
        :title="social.name"
        :newtab="true"
      />
    </div>
  </div>
</template>

<script setup>
const e = await $fetch('/api/subscribe', {
  method: 'post',
  body: { test: 'TO MOUNAKIIIIIIII' },
});
console.log('LOOOOL:', e);
const socials = [
  {
    name: 'twitter',
    url: 'https://twitter.com/happy_prog',
  },
  {
    name: 'github',
    url: 'https://github.com/MyNameIsBond',
  },
  {
    name: 'patreon',
    url: 'https://www.patreon.com/thehappyprogrammer',
  },
  {
    name: 'The Happy Programmer',
    url: 'https://thehappyprogrammer.com/',
  },
];
</script>

<style></style>
