<!--Navbar component with a moving background on hover-->
<template>
  <div
      class="flex items-center rounded-full px-3.5 bg-secondary-blue w-fit text-2xl font-medium">
    <div class="overlay absolute w-24 bg-text-white -z-10 transition-all duration-300 opacity-0 rounded-full" ref="overlay"></div>
    <div class="h-fit flex flex-row items-center space-x-4" ref="links">
      <navbar-link href="#home"><span class="iconoir-home"/>Home</navbar-link>
      <navbar-link href="#about"><span class="iconoir-user"/>About</navbar-link>
      <navbar-link href="#projects"><span class="iconoir-report-columns"/>Projects</navbar-link>
      <navbar-link href="#code"><span class="iconoir-code"/>Code</navbar-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  // move the overlay to the correct position on hover as well as resize
  mounted() {
    const overlay = this.$refs.overlay;
    const links = Array.from(this.$refs.links.children);
    const overlayPadding = 10;
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.classList.add("text-secondary-blue");
        overlay.style.opacity = 1;
        overlay.style.width = `${link.offsetWidth + overlayPadding}px`;
        overlay.style.left = `${link.offsetLeft - overlayPadding / 2}px`;
        overlay.style.height = `${link.offsetHeight - overlayPadding}px`;
      });
      link.addEventListener("mouseout", () => {
        link.classList.remove("text-secondary-blue");
        overlay.style.opacity = 0;
      });
    });
  }
}
</script>