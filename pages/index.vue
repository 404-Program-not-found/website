<template>
  <div class="flex flex-col gap-16 xl:gap-28 items-center">
    <Hero/>
    <About/>
    <Projects/>
    <CodeRepos/>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/layouts/hero.vue";
import About from "~/layouts/about.vue";
import Projects from "~/layouts/projects.vue";
import CodeRepos from "~/layouts/codeRepos.vue";

useHead({
  title: "Missing Program",
});
</script>