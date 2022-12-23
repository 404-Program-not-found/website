<template>
<!--Link icon that inherits the color of the parent. On hover highlight the background-->
  <a
    :href="href"
    :class="[
      'rounded-2xl',
      'transition-colors duration-300',
      'hover:bg-accent-blue hover:text-text-white',
      'focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50',
      'text-accent-blue',
      'p-2',
      'cursor-pointer',
      icon ? `iconoir-${icon}`: '',
    ]"
    :data-tooltip-target="tooltipId"
  >
    <slot />
  </a>
  <div v-if="$slots.tooltip" :id="tooltipId" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    <slot name="tooltip"></slot>
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  setup(props, { slots }) {
    const tooltipId = !!slots["tooltip"] ? uuidv4() : null;
    return { tooltipId }
  }
};
</script>