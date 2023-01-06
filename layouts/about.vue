<template>
  <section class="flex flex-col items-center w-full gap-6" aria-labelledby="about">
    <SegmentHeader section="About" id="about" title="Me"/>
    <div class="flex flex-col sm:flex-row gap-12">
      <p class="text-base sm:text-xl md:text-2xl sm:max-w-[55%]">
        Hi! I'm Alex. A software developer from New Zealand who loves to create things. I first started programming
        since 2017, and since then I've been working on a variety of open source projects on GitHub.
      </p>
      <div class="inline-grid md:grid-cols-3 md:gap-12 gap-6 grid-cols-2  items-center justify-items-center sm:ml-auto">
        <LazyTechButton tech="javascript"/>
        <LazyTechButton tech="python"/>
        <LazyTechButton tech="vue"/>
        <LazyTechButton tech="typescript"/>
        <LazyTechButton tech="kotlin"/>
        <LazyTechButton tech="electron"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

</style>