<script setup lang="ts">
import themeSwitcher from '../components/themeSwitcher.vue'
</script>

<template>
  <header>
    <div
      class="flex items-center justify-between px-4 md:px-12 lg:px-24 py-2 shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] bg-lightMood dark:bg-darkMood"
    >
      <h3 class="text-lightText dark:text-white">Where in the world?</h3>
      <theme-switcher />
    </div>
  </header>
</template>
