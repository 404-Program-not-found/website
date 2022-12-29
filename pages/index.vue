<template>
  <div class="flex flex-col gap-24 items-center">
    <Hero/>
    <About/>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/layouts/hero.vue";
import About from "~/layouts/about.vue";

useHead({
      title: "Missing Program",
    }
)
</script>