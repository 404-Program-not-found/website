<template>
  <a v-if="getTech" :class="[getTech.class]" :href="getTech.href"
     class="border-3 border-text-white p-4 text-5xl h-fit w-fit relative block rounded-[25%]
     hover:shadow-inset-fill hover:shadow-secondary-gray-light hover:text-text-white
     transition duration-500">
    <span class="hide-accessible">{{ getTech.name }}</span>
    <component :is="component" width="1em" height="1em" class="fill-current text-inherit"/>
  </a>
</template>

<script setup>

</script>

<script>
import VueIcon from 'assets/icons/vue.vue';
import Electron from "assets/icons/Electron.vue";
import Kotlin from "assets/icons/Kotlin.vue";
import Javascript from "assets/icons/Javascript.vue";
import Typescript from "assets/icons/Typescript.vue";
import Python from "assets/icons/Python.vue";

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
        "icon": "vue",
        "class": "text-text-white bg-[#4FC08D]",
        "href": "https://vuejs.org/",
      },
      "javascript": {
        "name": "JavaScript",
        "icon": "javascript",
        "class": "text-text-black bg-[#F7DF1E]",
        "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      "typescript": {
        "name": "TypeScript",
        "icon": "typescript",
        "class": "text-text-white bg-[#3178C6]",
        "href": "https://www.typescriptlang.org/",
      },
      "python": {
        "name": "Python",
        "icon": "python",
        "class": " text-text-white bg-[#3776AB]",
        "href": "https://www.python.org/",
      },
      "kotlin": {
        "name": "Kotlin",
        "icon": "kotlin",
        "class": "text-text-white bg-[#7F52FF]",
        "href": "https://kotlinlang.org/",
      },
      "electron": {
        "name": "Electron",
        "icon": "electron",
        "class": " text-text-white bg-[#47848F]",
        "href": "https://www.electronjs.org/",
      },
    }
    const iconMap = {
      "vue": shallowRef(VueIcon),
      "javascript": shallowRef(Javascript),
      "typescript": shallowRef(Typescript),
      "python": shallowRef(Python),
      "kotlin": shallowRef(Kotlin),
      "electron": shallowRef(Electron),
    }
    return {techMap, iconMap}
  },
  computed: {
    getTech() {
      return this.techMap[this.tech] || null;
    },
    component() {
      return this.iconMap[this.getTech.icon]
    }
  },
}
</script>