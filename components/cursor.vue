<!--custom cursor-->
<template>
  <div class="cursor" :class="[{'cursor_hide': hideCursor}, {'cursor_hover': hoverCursor}, {'cursor_clicked': clicked} ]">
    <div :style="cursorCenter" class="cursor_center" ref="center"></div>
    <div :style="cursorOuter" class="cursor_outer"></div>
  </div>
</template>

<script>
export default {
  name: "cursor",
  data() {
    return {
      hoverCursor: false,
      hideCursor: true,
      clicked: false,
      centerX: 0,
      centerY: 0,
      outerX: 0,
      outerY: 0,
    }
  },
  computed: {
    cursorCenter() {
      return {
        transform: `translate(${this.centerX - 3}px, ${this.centerY - 3}px) scale(${this.clicked ? 0.9 : 1})`,
      }
    },
    cursorOuter() {
      return {
        transform: `translate(${this.outerX}px, ${this.outerY}px) scale(${this.clicked ? 1.25 : 1})`,
      }
    },
    interactionElements() {
      return document.querySelectorAll("a, button, input, textarea, select, .cursor_hover");
    },
  },
  methods: {
    moveCursor(e) {
      this.hideCursor = false
      this.centerX = e.clientX;
      this.centerY = e.clientY;
      this.outerX = e.clientX - 13;
      this.outerY = e.clientY - 13;
    },
  },

  mounted() {
    // check if touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      this.hideCursor = true;
      return;
    }
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseenter", () => {
      this.hideCursor = false;
    });
    document.addEventListener("mouseleave", () => {
      this.hideCursor = true;
    });
    document.addEventListener("mousedown", () => {
      this.clicked = true;
    });
    document.addEventListener("mouseup", () => {
      this.clicked = false;
    });
    this.interactionElements.forEach(link => {
      link.addEventListener("mouseenter", () => {
        this.hoverCursor = true;
      });
      link.addEventListener("mouseleave", () => {
        this.hoverCursor = false;
      });
    });
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.moveCursor);
    document.removeEventListener("mouseenter", () => {
      this.hideCursor = false;
    });
    document.removeEventListener("mouseleave", () => {
      this.hideCursor = true;
    });
    this.interactionElements.forEach(link => {
      link.removeEventListener("mouseenter", () => {
        this.hoverCursor = true;
      });
      link.removeEventListener("mouseleave", () => {
        this.hoverCursor = false;
      });
    });
  }
}
</script>

<style lang="postcss" scoped>
.cursor {


  &_hide {
    .cursor_center {
      opacity: 0;
    }

    .cursor_outer {
      opacity: 0;
    }
  }

  &_center {
    @apply bg-white contrast-200;
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
    transition: opacity .6s ease, background-color 0.3s ease, transform-scale 0.3s ease;
  }

  &_outer {
    @apply border-2 border-accent-blue contrast-200;
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity .6s ease, border-color 0.3s ease, transform .1s, border-width 0.1s;
  }

  &_hover {
    .cursor_center {
      @apply bg-accent-blue;
    }

    .cursor_outer {
      @apply border-3 border-text-white;
    }
  }
}
</style>