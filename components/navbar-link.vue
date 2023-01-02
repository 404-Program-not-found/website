<template>
  <component :is="samePage? 'button' : 'a'" :href="samePageHref" :role="samePage?'button':null" tabindex="0"
     class="py-1.5 px-3.5 my-2 flex flex-col md:flex-row items-center gap-1" @click="samePageClick" ref="anchor">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "navbar-link",
  props: {
    href: {
      type: String,
      required: true,
    },
    samePage: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    samePageClick() {
      return this.samePage ? this.navigate : null;
    },
    samePageHref() {
      return this.samePage ? null : this.href;
    },
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