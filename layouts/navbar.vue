<!--Navbar component with a moving background on hover-->
<template>
  <nav
      class="flex items-center bg-secondary-blue justify-center w-full md:rounded-full px-3.5 md:w-fit text-sm
       sm:text-base md:text-2xl font-medium transition-colors duration-500"
      :class="[isAtTop ? 'md:bg-transparent' : 'md:bg-secondary-blue-transparent md:backdrop-blur-sm']"
      ref="navbar-back"
      role="navigation"
      tabindex="-1">
    <div class="hidden md:block overlay absolute w-24 bg-text-white -z-10 transition-all duration-300 opacity-0
    rounded-full"
         ref="overlay" tabindex="-1"></div>
    <div class="h-fit flex flex-row items-center md:gap-x-4 justify-around w-full md:w-fit" ref="links">
      <template v-for="navEl in linksItems">
        <NavbarLink :href="navEl.href" @mouseenter="itemMouseover($event)" @mouseleave="itemMouseout($event)"
        @focusin="itemMouseover($event)" @focusout="itemMouseout($event)" class="focus:outline-none group
        md:hover:text-secondary-blue md:focus:text-secondary-blue">
          <div :class="navEl.icon" class="text-xl sm:text-2xl md:text-unset
          group-hover:bg-text-white md:group-hover:bg-inherit
          px-3 py-0.5 md:p-0
          group-hover:text-secondary-blue md:group-hover:text-unset
          rounded-full md:rounded-none
          transition-colors duration-300"/>
          <div class="transition-colors duration-300">{{ navEl.message }}</div>
        </NavbarLink>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      linksItems: [
        {href: "#", icon: "iconoir-home", message: "Home"},
        {href: "#about", icon: "iconoir-user", message: "About"},
        {href: "#projects", icon: "iconoir-report-columns", message: "Projects"},
        {href: "#code", icon: "iconoir-code", message: "Code"}
      ],
      overlayPadding: 10,
      isAtTop: true,
    };
  },
  // move the overlay to the correct position on hover as well as resize
  mounted() {
    // make navbar blend with background if it is scrolled to the top
    window.addEventListener("scroll", () => {
      this.isAtTop = window.scrollY === 0;
    });
  },
  methods: {
    itemMouseover(event) {
      const overlay = this.$refs.overlay;
      const link = event.target;
      overlay.style.opacity = 1;
      overlay.style.width = `${link.offsetWidth + this.overlayPadding}px`;
      overlay.style.left = `${link.offsetLeft - this.overlayPadding / 2}px`;
      overlay.style.height = `${link.offsetHeight - this.overlayPadding}px`;
    },
    itemMouseout(event) {
      const overlay = this.$refs.overlay;
      overlay.style.opacity = 0;
    }
  }
}
</script>