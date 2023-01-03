<template>
  <div class="flex flex-col gap-16 items-center">
    <Hero />
    <About />
    <Projects/>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/layouts/hero.vue";
import About from "~/layouts/about.vue";
import Projects from "~/layouts/projects.vue";

useHead({
  title: "Missing Program",
});
</script>