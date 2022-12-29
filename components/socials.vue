<template>
  <div class="socials flex flex-row items-center text-4xl justify-between w-full max-w-sm">
    <SocialButton href="https://github.com/404-program-not-found" icon="github" aria-label="follow me on GitHub">
      <template #tooltip>
        <div>404-Program-not-found</div>
        <div class="iconoir-open-new-window"/>
      </template>
    </SocialButton>
    <SocialButton href="Alex123456#7890" icon="discord" :does-copy="true" aria-label="find me on Discord (click to copy)">
      <template #tooltip>
          <div>Alex123456#7890</div>
          <div class="iconoir-copy"/>
      </template>
    </SocialButton>
    <SocialButton href="https://dev.to/404programnotfound" aria-label="follow me on Dev.to">
      <devBadge width="1em" height="1em" class="fill-current text-inherit"/>
      <template #tooltip>
        <div>404Programnotfound</div>
        <div class="iconoir-open-new-window"/>
      </template>
    </SocialButton>
    <SocialButton href="me@missingprogram.tech" icon="mail" :does-copy="true" aria-label="contact me via email (click to copy)">
      <template #tooltip>
          <div>me@missingprogram.tech</div>
          <div class="iconoir-copy"/>
      </template>
    </SocialButton>
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
import SocialButton from "~/components/social-button.vue";
</script>