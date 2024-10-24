<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="bg-slate-100 h-screen py-4">
    <div
      class="w-4/5 h-full mx-auto bg-white rounded-lg shadow-lg overflow-auto"
    >
      <Header />
      <Menu />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
