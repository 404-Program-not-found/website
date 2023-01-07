<template>
  <section class="flex flex-col-reverse md:flex-row gap-12 items-center w-full" aria-labelledby="section-title">
    <div class="flex flex-col gap-4.5 grow w-full">
      <h1 class="hide-accessible" id="section-title">Hello World!</h1>
      <TypingTitle :messages="['Hello World!', 'ハローワールド！', '你好，世界！' ]" id="home" aria-hidden="true"/>
      <h2 class="text-2xl">Developer, makes stuff for the Internet sometimes.</h2>
      <div class="grid grid-cols-fluid-buttons gap-x-9 gap-y-3 place-items-center">
        <PortfolioButton message="Explore my work" icon="code" :clicked="() => {
          const element = document.getElementById('projects')
          element.scrollIntoView({behavior: 'smooth'});
        }"/>
        <PortfolioButton message="Support me on ko-fi" icon="coffee-cup" palette="gray-light"
                         href="https://ko-fi.com/404programnotfound"/>
      </div>
      <div class="flex flex-row items-center gap-x-2 text-2xl">
        <span class="hidden md:inline-block">Follow me on:</span>
        <span class="flex justify-center md:inline-block grow"><Socials ref="social-row"/></span>
      </div>
    </div>
    <div class="relative rounded-[50%] md:hover:rounded-[20%] max-w-sm min-w-0 h-auto w-full pfp animate-idle-bounc
    md:hover:animate-none group" ref="pfp">
      <div class="absolute max-w-full max-h-full bg-gradient-to-r from-sky-500 to-green-400
      -inset-0.5 rounded-[50%] md:group-hover:rounded-[20%] opacity-75 group-hover:opacity-100 pfp-border blur-xl
      animate-rotation-pulse md:group-hover:animate-blur-pulse"/>
      <img src="@/assets/images/pfp.png" alt="Profile Picture"
           class="rounded-[50%] pfp md:group-hover:rounded-[20%] relative">
    </div>
  </section>
</template>

<script>
export default {
  name: "hero",
  mounted() {
    if (window.innerWidth > 768) {
      VanillaTilt.init(this.$refs.pfp, {
        max: 8,
        speed: 300,
        scale: 1.1,
        glare: true,
        reverse: true,
        transition: true,
        "max-glare": 0.3,
      });
    }
  }
}
</script>

<style scoped>
.pfp {
  transition: border-radius 0.3s ease-in-out;
}

.pfp-border {
  transition: border-radius 0.3s ease-in-out, opacity 1s ease-in-out;
}

.pfp-border:hover {
  transition: border-radius 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>