<template>
  <div
      class="px-24 py-9 border-t border-text-white">
    <div class="flex flex-row items-center mx-auto bg-bkg-blue text-text-white text-xl justify-between max-w-screen-lg">
      <div class="flex flex-row float-left">Made with 💙 from New Zealand</div>
      <div class="float-right text-accent-blue">
        <Socials font-size="4xl" gap-size="9"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import Socials from "~/components/socials.vue";
</script>