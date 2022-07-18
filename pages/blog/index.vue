<template>
  <main>
    <h1 class="text-3xl font-medium py-24">Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <BlogDisplay
        v-for="article in list"
        :key="article._path"
        :article="article"
        class="flex flex-row justify-between pb-14 items-center"
      />
    </ContentList>
  </main>
</template>
