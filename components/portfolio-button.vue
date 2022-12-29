<template>
  <component
      :is="componentType"
      :type="href ? null : 'button'"
      class="font-light border-3 hover:brightness-125 transition-all
    focus:ring-4 ring-current focus:outline-none duration-500 font-medium rounded-3xl text-lg leading-5 p-4 flex
    flex-row items-center space-x-5.5 text-left max-w-xxs items-start animate-cursor width-full h-full"
     :class="colors[palette]"
     :href="href"
     @click="clicked"
  >
    <span v-if="icon" :class="['text-4.5xl', 'w-fit', `iconoir-${icon}`]"/>
    <span>{{ message }}</span>
  </component>
</template>

<script>
export default {
  name: "portfolio-button",
  props: {
    palette: {
      type: String,
      required: false,
      default: "primary",
    },
    icon: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: true,
    },
    clicked: {
      type: Function,
      required: false,
    },
    href: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      colors: {
        primary: "bg-accent-blue text-text-white border-text-white",
        'gray-light': "bg-secondary-gray-light text-text-white border-text-white",
        gray: "bg-secondary-gray text-text-white border-text-white",
      }
    }
  },
  computed: {
    componentType() {
      return this.href ? "a" : "button";
    }
  }
}
</script>