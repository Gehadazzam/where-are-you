<script setup lang="ts">
import themeSwitcher from '../components/themeSwitcher.vue'
</script>

<template>
  <header>
    <div
      class="flex items-center justify-between px-4 md:px-12 lg:px-24 py-2 bg-VeryLightGray dark:bg-veryDarkBlue"
    >
      <h3 class="text-VeryDarkBlue dark:text-white">Where in the world?</h3>
      <theme-switcher />
    </div>
  </header>
</template>
