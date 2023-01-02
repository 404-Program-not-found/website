<template>
  <div class="flex flex-col gap-16 items-center">
    <Hero />
    <About />
    <div class="grid grid-cols-3 min-w-full gap-5">
      <ProjectCard/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/layouts/hero.vue";
import About from "~/layouts/about.vue";

useHead({
  title: "Missing Program",
});
</script>