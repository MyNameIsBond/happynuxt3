<template>
  <NuxtLink
    class="underline underline-offset-1 cursor-pointer flex flex-row items-center space-x-2 font-medium text-sm"
    :to="to"
    ><p>{{ title }}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="newtab ? '-rotate-45' : ''"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  </NuxtLink>
</template>

<script>
export default {
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
