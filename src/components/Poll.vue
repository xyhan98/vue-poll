<template>
  <div
    class="w-full lg:w-2/5 xl:w-1/2 max-w-[500px] p-6 mx-auto my-6 bg-blue-50 rounded-xl shadow-lg"
  >
    <div class="text-blue-500 my-2">{{ poll.question }}</div>

    <div class="flex flex-row justify-between items-center my-4 text-pink-400">
      <span>{{ poll.optionA }}</span>
      <div
        class="inline-block w-4/5 max-w-[360px] py-1 pr-2 bg-slate-200 text-right"
        :style="{ cursor: 'pointer' }"
        @click="incrementA"
      >
        {{ countA }}
      </div>
    </div>

    <div class="flex flex-row justify-between items-center my-4 text-green-400">
      <span>{{ poll.optionB }}</span>
      <div
        class="inline-block w-4/5 max-w-[360px] py-1 pr-2 bg-slate-200 text-right"
        :style="{ cursor: 'pointer' }"
        @click="incrementB"
      >
        {{ countB }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Poll } from '@/types/poll'

defineProps<{ poll: Poll }>()

let countA = ref(0)
let countB = ref(0)

let total = computed(() => countA.value + countB.value)

const incrementA = () => {
  countA.value += 1
}
const incrementB = () => {
  countB.value += 1
}
</script>

<style lang="css" scoped></style>
