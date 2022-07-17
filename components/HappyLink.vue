<template>
  <NuxtLink
    class="underline underline-offset-1 cursor-pointer flex flex-row items-center space-x-2 font-medium text-sm"
    :to="to"
    ><p>{{ title }}</p>
    <arrow-narrow-right-icon class="h-4" :class="newtab ? '-rotate-45' : ''" />
  </NuxtLink>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline';
export default {
  components: { ArrowNarrowRightIcon },
  props: {
    title: String,
    to: String,
    newtab: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
