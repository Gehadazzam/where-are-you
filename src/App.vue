<script setup lang="ts">
import { RouterView } from 'vue-router'
import './style.css'
import TheHeader from './views/theHeader.vue'
</script>

<template>
  <the-header />
  <RouterView />
</template>
