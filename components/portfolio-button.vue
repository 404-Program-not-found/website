<template>
  <component
      :is="componentType"
      :type="componentType === 'a' ? null : 'button'"
      class="font-light border-3 hover:brightness-125 transition-all
    focus:ring-4 ring-current focus:outline-none duration-500 font-medium rounded-3xl text-lg leading-5 p-4 flex
    flex-row items-center gap-x-3 text-left max-w-xxs items-start animate-cursor width-full h-full"
     :class="colors[palette]"
     :href="samePageUrl"
     @click="clickFunc"
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
      required: false,
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
    samePage() {
      return this.href && this.href.startsWith("#") && this.href.length > 1;
    },
    clickFunc() {
      return this.samePage ? this.navigate : this.clicked;
    },
    componentType() {
      return this.href && !this.samePage ? "a" : "button";
    },
    samePageUrl() {
      return this.componentType === "a" ? this.href : null;
    }
  },
  methods: {
    navigate() {
      if (this.samePage) {
        const strippedHref = this.href.replace("#", "");
        const element = document.getElementById(strippedHref);
        element.scrollIntoView({behavior: "smooth"});
      }
    },
  }
}
</script>