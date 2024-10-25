<template>
  <div
    class="w-full lg:w-2/5 xl:w-1/2 max-w-[500px] p-6 mx-auto my-6 bg-blue-50 rounded-xl shadow-lg"
  >
    <div class="text-blue-500 my-2">{{ poll.question }}</div>

    <div class="flex flex-row justify-between items-center my-4 text-pink-500">
      <span>{{ poll.optionA }}</span>
      <div
        class="inline-block w-4/5 max-w-[360px] py-1 pr-2 bg-slate-200 text-right relative"
        :style="{ cursor: 'pointer' }"
        @click="incrementA"
      >
        <div
          class="inline-block absolute left-0 top-0 h-full bg-pink-300 transition-all duration-500 ease-in-out"
          :style="{ width: `${(stats.countA / total) * 100}%` }"
        ></div>
        <span class="relative z-10">{{ stats.countA }}</span>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center my-4 text-green-500">
      <span>{{ poll.optionB }}</span>
      <div
        class="inline-block w-4/5 max-w-[360px] py-1 pr-2 bg-slate-200 text-right relative"
        :style="{ cursor: 'pointer' }"
        @click="incrementB"
      >
        <div
          class="inline-block absolute left-0 top-0 h-full bg-green-300 transition-all duration-500 ease-in-out"
          :style="{ width: `${(stats.countB / total) * 100}%` }"
        ></div>
        <span class="relative z-10">{{ stats.countB }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type Poll, type Stats } from '@/types/poll'

const props = defineProps<{ poll: Poll; stats: Stats }>()

let total = computed(() => props.stats.countA + props.stats.countB)

const incrementA = () => {
  props.stats.countA += 1
  //   console.log(props.stats)
}
const incrementB = () => {
  props.stats.countB += 1
  //   console.log(props.stats)
}
</script>

<style lang="css" scoped></style>
