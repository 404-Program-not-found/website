<template>
  <a v-if="getTech" :class="[getTech.class]" :href="getTech.href"
     class="border-3 border-text-white p-4 text-5xl h-fit w-fit relative block rounded-[25%]
     hover:shadow-inset-fill-100 hover:shadow-secondary-gray-light hover:text-text-white ring-current
     focus:outline-none focus:shadow-inset-fill-100 focus:shadow-secondary-gray-light focus:text-text-white focus:ring-2
     transition duration-500">
    <span class="hide-accessible">{{ getTech.name }}</span>
    <TechIcon :tech="getTech.name.toLowerCase()"></TechIcon>
  </a>
</template>

<script setup>

</script>

<script>

export default {
  name: "tech-button.vue",
  props: {
    tech: {
      type: String,
      required: true,
    },
  },
  data() {
    const techMap = {
      "vue": {
        "name": "Vue",
        "class": "text-text-white bg-[#4FC08D]",
        "href": "https://vuejs.org/",
      },
      "javascript": {
        "name": "JavaScript",
        "class": "text-text-black bg-[#F7DF1E]",
        "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      "typescript": {
        "name": "TypeScript",
        "class": "text-text-white bg-[#3178C6]",
        "href": "https://www.typescriptlang.org/",
      },
      "python": {
        "name": "Python",
        "class": " text-text-white bg-[#3776AB]",
        "href": "https://www.python.org/",
      },
      "kotlin": {
        "name": "Kotlin",
        "class": "text-text-white bg-[#7F52FF]",
        "href": "https://kotlinlang.org/",
      },
      "electron": {
        "name": "Electron",
        "class": " text-text-white bg-[#47848F]",
        "href": "https://www.electronjs.org/",
      },
    }
    return {techMap}
  },
  computed: {
    getTech() {
      return this.techMap[this.tech] || null;
    },
  },
}
</script>