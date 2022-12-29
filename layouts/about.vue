<template>
  <section class="flex flex-col items-center w-full gap-6" aria-labelledby="about">
    <SegmentHeader section="About" id="about" title="Me"/>
    <div class="flex flex-col sm:flex-row gap-12">
      <p class="text-2xl sm:max-w-[55%]">
        Lorem ipsum dolor sit amet consectetur. Mauris placerat gravida nulla eget. Nulla tristique tortor sed gravida vitae at. Amet mauris blandit adipiscing tristique metus at. Eu eget cursus consectetur.
      </p>
      <div class="inline-grid md:grid-cols-3 md:gap-12 gap-6 grid-cols-2  items-center justify-items-center sm:ml-auto">
        <TechButton tech="javascript"/>
        <TechButton tech="python"/>
        <TechButton tech="vue"/>
        <TechButton tech="typescript"/>
        <TechButton tech="kotlin"/>
        <TechButton tech="electron"/>
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