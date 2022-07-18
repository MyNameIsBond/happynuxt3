<template>
  <ContentList path="/blog" v-slot="{ list }">
    <h2 class="font-medium text-base pb-7">posts</h2>
    <BlogDisplay
      v-for="article in list"
      :key="article._path"
      :article="article"
      class="flex flex-row justify-between pb-14 items-center"
    />
  </ContentList>
</template>

<script></script>

<style></style>
