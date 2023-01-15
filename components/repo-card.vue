<template>
  <a class="bg-secondary-gray rounded-3xl flex flex-col gap-y-2 p-6 w-full transition hover:scale-105 duration-500"
     :href="data.repository.url"
     v-if="data"
  >
    <div class="flex flex-row items-center gap-x-9">
      <div class="flex flex-row items-center gap-x-2">
        <img :src="data.repository.owner.avatarUrl" class="w-6 h-6 rounded-full"
             :alt="`${data.repository.owner.login} profile picture`"/>
        <h5 class="text-lg font-normal">{{ data.repository.owner.login }}</h5>
      </div>
      <div class="iconoir-open-new-window text-2xl ml-auto"></div>
    </div>
    <h4 class="text-3xl font-bold">
      {{ data.repository.name }}
    </h4>
    <p class="text-base leading-5 font-light grow">
      {{ data.repository.description }}
    </p>
    <div class="flex flex-row gap-x-6 text-lg items-center">
      <div class="flex flex-row gap-x-1.5 items-center">
              <span class="rounded-full"
                    :style="{backgroundColor: data.repository.primaryLanguage.color, width:'1em', height:'1em'}"></span>
        {{ data.repository.primaryLanguage.name }}
      </div>
      <div class="flex flex-row gap-x-1.5 items-center">
        <span class="iconoir-star"></span>
        {{ abbreviateNum(data.repository.stargazerCount) }}
      </div>
      <div class="flex flex-row gap-x-1.5 items-center">
        <span class="iconoir-git-fork"></span>
        {{ abbreviateNum(data.repository.forkCount) }}
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "repo-card",
  props: {
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  async setup(props) {

    function abbreviateNum(num) {
      return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(num)
    }

    const {data} = await useFetch('/api/repo', {params: {owner: props.owner, name: props.name}})
    return {data, abbreviateNum}
  }
}
</script>