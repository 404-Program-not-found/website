<template>
  <div class="bg-secondary-gray rounded-3xl p-6 w-full">
    <div class="animate-pulse flex flex-col gap-y-3 w-full h-full">
      <div class="flex flex-row items-center gap-x-3">
        <div class="w-9 h-9 rounded-full bg-slate-200"/>
        <div class="h-4 w-28 bg-slate-200 rounded-full"></div>
      </div>
      <div class="w-36 h-4 bg-slate-200 rounded-full"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded-full col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded-full col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded-full"></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded-full col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded-full col-span-2"></div>
        </div>
      </div>
      <div class="flex flex-row gap-x-6 items-center">
        <div class="flex flex-row gap-x-1.5 items-center">
          <span class="rounded-full bg-slate-200 h-4.5 w-4.5"/>
          <span class="h-2 bg-slate-200 rounded-full w-10"></span>
        </div>
        <div class="flex flex-row gap-x-1.5 items-center">
          <span class="rounded-full bg-slate-200 h-4.5 w-4.5"/>
          <span class="h-2 bg-slate-200 rounded-full w-12"></span>
        </div>
        <div class="flex flex-row gap-x-1.5 items-center">
          <span class="rounded-full bg-slate-200 h-4.5 w-4.5"/>
          <span class="h-2 bg-slate-200 rounded-full w-8"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "repo-card-skeleton"
}
</script>