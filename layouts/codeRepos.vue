<template>
  <section class="flex flex-col items-center w-full gap-6" aria-labelledby="codeRepos">
    <SegmentHeader section="Work" id="codeRepos" title="Code"/>
    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 flex-wrap repoList">
      <RepoCard owner="VueTubeApp" name="VueTube"/>
      <RepoCard owner="VueTubeApp" name="VueTube-Extractor"/>
      <RepoCard owner="404-Program-not-found" name="website"/>
      <span class="hidden absolute sm:grid grid-cols-6 gap-5 -left-9 -top-[6.8rem] z-0">
        <span class="dot h-5 w-5 bg-secondary-gray-light rounded-full" v-for="_ in 36"></span>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "codeRepos"
}
</script>

<style scoped>

.repoList a {
  z-index: 1;
}
</style>