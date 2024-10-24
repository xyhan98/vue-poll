<template>
  <div
    class="lg:flex lg:flex-row lg:justify-evenly lg:content-start lg:flex-wrap mx-4"
  >
    <Poll v-for="poll in pollsStore.polls" :key="poll.id" :poll="poll" />
  </div>
</template>

<script setup lang="ts">
import Poll from '@/components/Poll.vue'
import { usePollsStore } from '@/store/polls'

const pollsStore = usePollsStore()
</script>

<style lang="css" scoped></style>
