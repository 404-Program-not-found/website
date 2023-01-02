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
    rounded-full" ref="overlay" tabindex="-1"></div>
    <div class="h-fit flex flex-row items-center md:gap-x-4 justify-around w-full md:w-fit" ref="links">
      <template v-for="navEl in linksItems">
        <NavbarLink :href="navEl.href" @mouseenter="itemMouseover($event)" @mouseleave="itemMouseout($event)"
                    :same-page="navEl.samePage"
                   class="group rounded-full focus-visible:ring-2 focus-visible:ring-text-white focus:outline-none">
          <div :class="navEl.icon" class="text-xl sm:text-2xl md:text-unset
          group-hover:bg-text-white md:group-hover:bg-inherit
          px-3 py-0.5 md:p-0
          group-hover:text-secondary-blue md:group-hover:text-inherit
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
        {href: "#", icon: "iconoir-home", message: "Home", samePage: false},
        {href: "#about", icon: "iconoir-user", message: "About", samePage: true},
        {href: "#projects", icon: "iconoir-report-columns", message: "Projects", samePage: true},
        {href: "#code", icon: "iconoir-code", message: "Code", samePage: true}
      ],
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
      this.clearActive()
      const overlay = this.$refs.overlay;
      const link = event.target;
      overlay.style.opacity = 1;
      link.classList.add("active");
      overlay.style.width = `${link.offsetWidth}px`;
      overlay.style.left = `${link.offsetLeft}px`;
      overlay.style.height = `${link.offsetHeight}px`;
    },
    itemMouseout(event) {
      const overlay = this.$refs.overlay;
      this.clearActive()
      overlay.style.opacity = 0;
    },
    clearActive() {
      const activeLinks = this.$refs.links.querySelectorAll(".active");
      activeLinks.forEach(el => el.classList.remove("active"));
    }
  }
}
</script>

<style>
@screen md {
  .active {
    @apply text-secondary-blue;
  }
}
</style>