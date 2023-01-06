<template>
  <section class="flex flex-col items-center w-full gap-6" aria-labelledby="projects">
    <SegmentHeader section="Work" id="projects" title="Projects"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 min-w-full gap-3 md:gap-5"
         ref="projects">
      <LazyProjectCard :technologies="['javascript', 'typescript', 'nuxt', 'vue']"
                       :backgroundImage="MissingProgram" heading="Portfolio" url="https://missingprogram.me"
                       subheading="This very website"/>
      <LazyProjectCard :technologies="['javascript', 'nuxt', 'vue', 'capacitor']"
                   :backgroundImage="VueTubePromo" heading="VueTube" url="https://vuetube.app"
                   subheading="Video Watching Frontend"/>
      <LazyProjectCard/>
    </div>
  </section>
</template>

<script setup>
import VueTubePromo from "~/assets/images/VueTube-promo.png";
import MissingProgram from "~/assets/images/missingprogram.png";
</script>

<script>
export default {
  name: "projects",
  mounted() {
    const projects = this.$refs.projects.children;
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener("mouseenter", () => {
        if (window.matchMedia("(hover: none)").matches) {
          return;
        }
        for (let j = 0; j < projects.length; j++) {
          if (i !== j) {
            projects[j].classList.add("hovered");
          }
        }
      });
      projects[i].addEventListener("mouseleave", () => {
        for (let j = 0; j < projects.length; j++) {
          projects[j].classList.remove("hovered");
        }
      });
    }
  },
}
</script>

<style scoped>

</style>