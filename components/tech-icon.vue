<template>
  <component :is="component" width="1em" height="1em" class="fill-current text-inherit"/>
</template>

<script>
import VueIcon from "assets/icons/Vue.vue";
import Javascript from "assets/icons/Javascript.vue";
import Typescript from "assets/icons/Typescript.vue";
import Python from "assets/icons/Python.vue";
import Kotlin from "assets/icons/Kotlin.vue";
import Electron from "assets/icons/Electron.vue";

export default {
  name: "tech-icon",
  props: {
    tech: {
      type: String,
      required: true,
    },
  },
  data() {
    const iconMap = {
      "vue": shallowRef(VueIcon),
      "javascript": shallowRef(Javascript),
      "typescript": shallowRef(Typescript),
      "python": shallowRef(Python),
      "kotlin": shallowRef(Kotlin),
      "electron": shallowRef(Electron),
    }
    return {
      iconMap,
    }
  },
  computed: {
    component() {
      return this.iconMap[this.tech];
    }
  },
}
</script>