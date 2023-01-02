<template>
  <component
      :is="elementType"
      @click="elementOnClick"
      :type="doesCopy ? 'button' : null"
      :href="doesCopy ? null : href"
      :class="[
      'rounded-2xl',
      'transition-all duration-300',
      'hover:bg-accent-blue hover:text-text-white',
      'focus:outline-none focus:ring-4 focus:ring-text-white focus:bg-accent-blue focus:text-text-white',
      'text-accent-blue',
      'p-2',
      icon ? `iconoir-${icon}`: '',
    ]"
      :data-tooltip-target="tooltipId"
      ref="icon-button"
  >
    <slot/>
    <span class="hide-accessible" v-if="ariaLabel">{{ariaLabel}}</span>
  </component>
  <div v-if="tooltipId" :id="tooltipId"
       ref="tooltip"
       role="tooltip"
       class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    <div class="tooltip-text flex flex-row items-center space-x-2 text-lg">
      <slot name="tooltip"></slot>
    </div>
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: "social-button",
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    doesCopy: {
      type: Boolean,
      required: false,
      default: false,
    },
    ariaLabel: {
      type: String,
      required: false,
    },
  },
  inheritAttrs: false,
  data() {
    return {
      tooltipInstance: null,
      oldTooltipClass: null,
      oldTooltipText: null,
      tooltipId: null,
    }
  },
  mounted() {
    if (this.tooltipId) {
      const tooltip = this.$refs.tooltip;
      const iconButton = this.$refs["icon-button"];
      const options = {
        placement: 'top',
        triggerType: 'hover',
      };
      this.tooltipInstance = new Tooltip(tooltip, iconButton, options);
      this.oldTooltipClass = tooltip.className;
      this.oldTooltipText = tooltip.querySelector(".tooltip-text").innerHTML;
      tooltip.addEventListener("transitionend", () => {
        if (tooltip.className.includes("invisible")) {
          tooltip.className = this.oldTooltipClass;
          tooltip.querySelector(".tooltip-text").innerHTML = this.oldTooltipText;
          this.tooltipInstance.hide();
        }
      });
    }
  },
  computed: {
    elementType() {
      return this.doesCopy ? 'button' : 'a';
    },
    elementOnClick() {
      return this.doesCopy ? this.copyText : null;
    },
  },
  methods: {
    resetTooltipContent(tooltip) {
      tooltip.className = this.oldTooltipClass;
      tooltip.style.visibility = null;
      tooltip.querySelector(".tooltip-text").innerHTML = this.oldTooltipText;
    },
    resetTooltip(tooltip) {
      const leaveListen = tooltip.addEventListener("mouseleave", () => {
        this.resetTooltip(tooltip);
      }, {once: true});
      setTimeout(() => {
        tooltip.style.opacity = null;
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");

        setTimeout(() => {
          tooltip.removeEventListener("mouseleave", leaveListen);
          this.resetTooltipContent(tooltip)
          this.tooltipInstance.hide();
        }, 300);
      }, 1000);
    },
    copyText() {
      if (!this.tooltipInstance) {
        return;
      }
      navigator.clipboard.writeText(this.href);
      if (typeof this.tooltipId == "string") {
        const tooltip = this.$refs.tooltip;
        tooltip.className = "inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-green-500 rounded-md shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-green-700";
        tooltip.querySelector(".tooltip-text").innerText = "Copied!";
        this.tooltipInstance.show();
        this.resetTooltip(tooltip);
      }
    }
  },
  setup(props, {slots}) {
    const tooltipId = !!slots["tooltip"] ? uuidv4() : null;
    return {tooltipId}
  },
};
</script>