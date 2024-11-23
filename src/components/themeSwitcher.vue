<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { MoonIcon } from '@heroicons/vue/24/outline'
import { MoonIcon as MoonIconSolid } from '@heroicons/vue/24/solid'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex items-center gap-2">
    <MoonIconSolid
      v-if="isDark"
      @click="toggleDark()"
      class="w-5 h-5 text-white cursor-pointer hover:opacity-80 transition-opacity"
      role="button"
      tabindex="0"
      aria-label="Switch to light mode"
      @keydown.enter="toggleDark()"
      @keydown.space="toggleDark()"
    />
    <MoonIcon
      v-else
      @click="toggleDark()"
      class="w-5 h-5 text-gray-800 cursor-pointer hover:opacity-80 transition-opacity"
      role="button"
      tabindex="0"
      aria-label="Switch to dark mode"
      @keydown.enter="toggleDark()"
      @keydown.space="toggleDark()"
    />
    <span class="text-sm font-semibold text-gray-800 dark:text-white">Dark Mode</span>
  </div>
</template>
