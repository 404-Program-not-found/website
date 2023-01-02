<template>
  <div class="rounded-2xl group" :style="{background: backgroundStyle}" @click="url">
    <component :is="url ? 'a' : 'div'" class="w-full h-full p-6 flex flex-col justify-between">
      <div class="gap-1 mb-auto">
        <h4>{{heading}}}</h4>
        <p>{{subheading}}</p>
      </div>
      <div class="flex flex-row content-between text-text-white hidden group-hover:inline-block">
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