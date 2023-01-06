<template>
  <h3 class="flex flex-row text-3xl md:text-4xl font-bold">
    <span class="text-accent-blue">{{ section }}</span>
    <span class="text-accent-blue" aria-hidden="true">//</span>
    <span class="text-text-white">{{ title }}</span>
  </h3>
</template>

<script>
export default {
  name: "segment-header",
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>