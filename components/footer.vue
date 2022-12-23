<template>
  <div
      class="footer flex flex-row items-center bg-bkg-blue border-t-2 text-text-white text-3xl justify-between padding px-24 py-9">
    <div class="flex flex-row float-left">Made with 💙 from New Zealand</div>
    <div class="float-right text-accent-blue">
      <Socials/>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import Socials from "~/components/socials.vue";
</script>