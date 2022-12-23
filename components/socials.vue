<template>
  <div class="socials flex flex-row items-center space-x-12 text-4xl">
    <social-buttons href="https://github.com/404-program-not-found" icon="github"/>
    <social-buttons href="https://dev.to/404programnotfound">
      <devBadge width="1em" height="1em" viewBox="0 0 48 48" class="fill-current text-inherit"/>
    </social-buttons>
    <social-buttons href="mailto:me@missingprogram.tech" icon="mail">
      <template #tooltip>
        <div class="tooltip-text">me@missingprogram.tech</div>
      </template>
    </social-buttons>
  </div>
</template>
<script setup lang="ts">
import SocialButtons from "~/components/social-buttons.vue";
import DevBadge from "~/assets/icons/dev-badge.svg";
</script>