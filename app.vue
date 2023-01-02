<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@main/css/iconoir.css">
  <Cursor />
  <div class="flex flex-col min-h-screen h-full justify-between bg-bkg-blue text-text-white content-center relative">
    <Navbar
      class="max-w-screen-lg mx-auto bottom-0 md:bottom-unset md:mt-1 fixed z-20 fixed left-1/2 -translate-x-1/2" />
    <NuxtPage class="max-w-screen-lg mx-auto w-full pt-5 pb-24 px-6 sm:px-16 md:py-24 md:px-6" role="main" />
    <Footer class="pb-24 md:pb-6" />
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/layouts/navbar.vue";
import Footer from "~/layouts/footer.vue";

useHead({
  htmlAttrs: {
    lang: "en"
  },
  script: [
    {
      type: 'text/javascript',
      src: 'js/vanilla-tilt.js',
    }
  ]
})
</script>
