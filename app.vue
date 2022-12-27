<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@main/css/iconoir.css">
  <div class="flex flex-col min-h-screen h-full justify-between bg-bkg-blue text-text-white content-center relative">
    <Navbar class="max-w-screen-lg mx-auto mt-1 fixed z-20 fixed left-1/2 -translate-x-1/2"/>
    <NuxtPage class="max-w-screen-lg mx-auto w-full py-24 px-16"/>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/layouts/navbar.vue";
import Footer from "~/layouts/footer.vue";
</script>