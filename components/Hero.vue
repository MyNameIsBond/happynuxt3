<template>
  <div class="py-14">
    <nuxt-img
      src="/img/tony.jpg"
      width="80"
      height="80"
      loading="lazy"
      class="rounded-full shadow-lg p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
    <h1 class="text-3xl font-medium pt-5">I write code</h1>
    <p class="text-base py-3 text-opacity-60 font-normal text-slate-900">
      I'm a software engineer with a passion for building beautiful, performant,
      and accessible applications.
    </p>
    <div class="flex space-x-3 underline-offset-1">
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

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline';
export default {
  components: {
    ArrowNarrowRightIcon,
  },
  data() {
    return {
      socials: [
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
      ],
    };
  },
};
</script>

<style></style>
