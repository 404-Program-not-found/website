<template>
  <div class="rounded-2xl group aspect-card relative" :style="{ background: backgroundStyle }" @click="url">
    <component :is="url ? 'a' : 'div'" class="w-full h-full p-6 flex flex-col justify-between">
      <div class="gap-1 mb-auto max-w-[185px]">
        <h4 class="text-4xl font-bold">{{ heading }}</h4>
        <p class="text-xl text-secondary-gray-light">{{ subheading }}</p>
      </div>
      <div class="iconoir-code-brackets-square absolute left-1/2 -translate-y-1/2 -translate-x-1/2  top-1/2 text-9xl"
        v-if="!backgroundImage">
      </div>
      <div class="flex flex-row content-between text-text-white hidden group-hover:inline-block" v-if="technologies">
        <template v-for="tech in technologies">
          <TechIcon :tech="tech"></TechIcon>
        </template>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: {
    backgroundImage: {
      type: String,
      required: false,
    },
    heading: {
      type: String,
      required: false,
      default: "Coming Soon",
    },
    subheading: {
      type: String,
      required: false,
      default: "//TODO: Write More Code",
    },
    url: {
      type: String,
      required: false,
    },
    technologies: {
      type: Array,
      required: false,
    },
  },
  computed: {
    backgroundStyle() {
      return this.backgroundImage ? `url(${this.backgroundImage})` : 'rgb(var(--secondary-gray))';
    }
  }
}
</script>

<style scoped>

</style>