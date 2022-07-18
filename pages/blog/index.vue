<template>
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path" class="text-black">
          {{ article.title }}</NuxtLink
        >
        <h2>{{ article._path }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
