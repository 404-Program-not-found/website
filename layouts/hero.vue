<template>
  <div class="flex flex-row gap-12 items-center">
    <div class="flex flex-col gap-4.5 grow">
      <TypingTitle :messages="['Hello World!', 'ハローワールド！', '你好，世界！' ]" id="home"/>
      <h2 class="text-2xl">Developer, makes stuff for the Internet sometimes.</h2>
      <div class="grid grid-cols-fluid-buttons gap-x-9 place-items-center">
        <PortfolioButton message="Explore my work" icon="code"/>
        <PortfolioButton message="Support me on ko-fi" icon="coffee-cup" palette="gray-light"
                         href="https://ko-fi.com/404programnotfound"/>
      </div>
      <div class="flex flex-row items-center gap-x-6 text-2xl">
        Follow me on:
        <Socials/>
      </div>
    </div>
    <img src="@/assets/images/pfp.png" alt="Profile Picture" class="rounded-[50%] max-w-sm animate-idle-bounce
    hover:rounded-[20%] pfp">
  </div>
</template>

<script>
export default {
  name: "hero"
}
</script>

<style scoped>
.pfp {
  transition: border-radius 0.3s ease-in-out;
}
</style>