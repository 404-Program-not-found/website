<template>
<!--  :class="[`text-${fontSize}`, `gap-x-${gapSize}`]"-->
  <div class="socials flex flex-row items-center text-4xl gap-x-4">
    <social-buttons href="https://github.com/404-program-not-found" icon="github">
      <template #tooltip>
        <div>404-Program-not-found</div>
        <div class="iconoir-open-new-window"/>
      </template>
    </social-buttons>
    <social-buttons href="Alex123456#7890" icon="discord" :does-copy="true">
      <template #tooltip>
          <div>Alex123456#7890</div>
          <div class="iconoir-copy"/>
      </template>
    </social-buttons>
    <social-buttons href="https://dev.to/404programnotfound">
      <devBadge width="1em" height="1em" viewBox="0 0 48 48" class="fill-current text-inherit"/>
      <template #tooltip>
        <div>404Programnotfound</div>
        <div class="iconoir-open-new-window"/>
      </template>
    </social-buttons>
    <social-buttons href="me@missingprogram.tech" icon="mail" :does-copy="true">
      <template #tooltip>
          <div>me@missingprogram.tech</div>
          <div class="iconoir-copy"/>
      </template>
    </social-buttons>
  </div>
</template>

<script>
export default {
  name: "socials",
  props: {
    fontSize: {
      type: String,
      required: false,
      default: '5xl',
    },
    gapSize: {
      type: String,
      required: false,
      default: '12',
    }
  }
}
</script>

<script setup>
import DevBadge from "~/assets/icons/Devto.vue";
</script>