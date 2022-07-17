<template>
  <div class="py-14">
    <nuxt-img
      src="/img/tony.jpg"
      width="80"
      height="80"
      loading="lazy"
      class="rounded-full shadow-lg p-1 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"
    />
    <h1 class="text-3xl font-medium pt-5">I write code</h1>
    <p class="text-base py-3 text-opacity-60 font-normal text-black">
      I'm a software engineer with a passion for building beautiful, performant,
      and accessible applications.
    </p>
    <div class="flex space-x-3 underline-offset-1">
      <HappyLink to="/about" title="Read more about me" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
