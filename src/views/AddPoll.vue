<template>
  <div
    class="w-11/12 max-w-[600px] mx-auto my-8 border border-blue-300 rounded-lg"
  >
    <div class="m-6">
      <p class="text-blue-500">Poll Question:</p>
      <input
        type="text"
        v-model="poll.question"
        class="w-full px-3 py-2 my-4 border-2 border-blue-300 rounded-md outline-none"
      />
    </div>

    <div class="m-6">
      <p class="text-blue-500">Option A:</p>
      <input
        type="text"
        v-model="poll.optionA"
        class="w-full px-3 py-2 my-4 border-2 border-blue-300 rounded-md outline-none"
      />
    </div>

    <div class="m-6">
      <p class="text-blue-500">Option B:</p>
      <input
        type="text"
        v-model="poll.optionB"
        class="w-full px-3 py-2 my-4 border-2 border-blue-300 rounded-md outline-none"
      />
    </div>

    <div class="m-6 text-white flex justify-end">
      <button
        @click="add"
        class="px-4 py-2 bg-blue-500 border-2 border-blue-500 rounded-md"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { nanoid } from 'nanoid'
import { type Poll } from '@/types/poll'
import { usePollsStore } from '@/store/polls'

const poll = reactive<Poll>({
  question: '',
  optionA: '',
  optionB: '',
})

const router = useRouter()

const pollsStore = usePollsStore()
// console.log(pollsStore.polls)

const add = () => {
  const { question, optionA, optionB } = poll
  const id = nanoid()
  pollsStore.polls.push({ id, question, optionA, optionB })

  pollsStore.stats[id] = { countA: 0, countB: 0 }

  poll.question = ''
  poll.optionA = ''
  poll.optionB = ''

  router.push('/')
}
</script>

<style lang="css" scoped></style>
