<template>
  <div class="flex flex-row justify-center items-center">
    <RouterLink to="/polls" active-class="active">Poll List</RouterLink>
    <span class="mx-4 text-blue-500">|</span>
    <RouterLink to="/newPoll" active-class="active">New Poll</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="css" scoped>
a {
  padding: 6px 10px;
  border: 1px solid #3b82f6;
  border-radius: 10px;
  box-sizing: border-box;
  color: #3b82f6;
}
a:not(.active):hover {
  background-color: #dbeafe;
}
.active {
  padding: 6px 10px;
  border: 1px solid #3b82f6;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  background-color: #3b82f6;
}
</style>
