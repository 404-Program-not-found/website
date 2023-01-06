<template>
  <a :href="url ? url : 'javascript:;'"
      class="aspect-square sm:aspect-card relative focus:outline focus-visible:scale-105
      focus-visible:outline-4 focus-visible:outline-text-white rounded-3xl
      transition-all duration-500 group card before:transition-all before:duration-500 before:rounded-3xl before:brightness-75 md:before:filter-none"
      @click="url" @mouseenter="hoverEnter" @mouseleave="hoverLeave" @focusin="hoverEnter" @focusout="hoverLeave">
    <div class="iconoir-code-brackets-square noBkg absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2
      text-9xl transform duration-500 before:brightness-75 md:before:filter-none" v-if="!backgroundImage"/>
    <div class="w-full h-full p-6 flex flex-col justify-between">
      <div class="flex flex-row w-full justify-between">
        <div class="gap-1 mb-auto max-w-[185px] text-xl">
          <h4 class="text-4xl font-bold">{{ heading }}</h4>
          <p class="text-xl sm:text-secondary-gray-light group-hover:text-inherit transition-colors duration-500 font-light">{{ subheading }}</p>
        </div>
        <div v-if="url" class="iconoir-open-new-window text-4xl md:opacity-0 md:-translate-y-5 transform duration-500" ref="externalIcon"></div>
      </div>
        <ul class="flex flex-row flex-wrap justify-center gap-y-2 gap-x-5 text-text-white text-4xl list-none" v-if="technologies" ref="techs">
          <li v-for="(tech, index) in technologies" :key="tech" :data-index="index" class="md:opacity-0 transform
          duration-500 md:translate-y-5">
            <TechIcon :tech="tech"></TechIcon>
          </li>
        </ul>
    </div>
  </a>
</template>

<script>

export default {
  name: "project-card",
  props: {
    backgroundImage: {
      type: String,
      required: false,
    },
    heading: {
      type: String,
      required: false,
      default: "Coming Soon",
    },
    subheading: {
      type: String,
      required: false,
      default: "//TODO: Write More Code",
    },
    url: {
      type: String,
      required: false,
    },
    technologies: {
      type: Array,
      required: false,
    },
  },
  data() {
    let isHovered = false;
    return {
      isHovered,
    }
  },
  computed: {
    backgroundStyle() {
      return this.backgroundImage ? `url(${this.backgroundImage})` : 'rgb(var(--secondary-gray))';
    }
  },
  methods: {
    hoverEnter() {
      this.isHovered = true;
      this.callToggles();
    },
    hoverLeave() {
      this.isHovered = false;
      this.callToggles();
    },
    callToggles() {
      this.toggleTech();
      this.toggleExternalIcon();
    },
    toggleTech() {
      if (!this.technologies) return;
      const techs = this.$refs.techs.children;
      for (let i = 0; i < techs.length; i++) {
        this.toggleAnimation(techs[i], i * 100);
      }
    },
    toggleExternalIcon() {
      if (!this.url) return;
      const icon = this.$refs.externalIcon;
      this.toggleAnimation(icon);
    },
    toggleAnimation (tech, delay=0) {
      setTimeout(() => {
        if (this.isHovered) {
          this.enter(tech);
        } else {
          this.leave(tech);
        }
      }, delay);
    },
    enter(el) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    },
    leave(el) {
      el.style.opacity = null;
      el.style.transform = null;
    }
  },
}
</script>

<style scoped>
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  background: v-bind('backgroundStyle') center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: scale(1.05);
  }
  .card:hover::before {
    filter: brightness(0.7)
  }
}

.card * {
  z-index: 1;
}

.card.hovered::before, .card.hovered .noBkg {
  filter: saturate(0) contrast(1.1) blur(10px) brightness(1);
}
</style>