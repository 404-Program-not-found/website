<template>
  <a :href="href" class="p-3.5 flex flex-col md:flex-row items-center gap-1">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navbar-link",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
}
</script>