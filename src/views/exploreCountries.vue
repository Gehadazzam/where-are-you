<template>
  <div class="bg-lightMood dark:bg-darkMood text-lightText dark:text-white px-24">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-8 lg:gap-12">
      <div
        v-for="(country, index) in countries"
        :key="index"
        class="bg-white rounded-md pb-6 dark:bg-DarkBlue"
      >
        <img
          class="rounded-t-md h-40 w-full pb-4"
          :src="country.flags.png"
          alt="`${country.name.common} flag`"
        />
        <h2 class="font-bold pl-6">{{ country.name.common }}</h2>
        <div class="pl-6">
          <h3 class="font-semibold">
            Population: <span>{{ country.population }}</span>
          </h3>
          <h3 class="font-semibold">
            Region: <span>{{ country.region }}</span>
          </h3>
          <h3 v-if="country.capital && country.capital.length > 0" class="font-semibold">
            Capital: <span>{{ country.capital[0] }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '../services/api'
import { ref } from 'vue'

const countries = ref([])

const fetchData = async () => {
  try {
    const res = await api.get('/all')
    console.log('Response:', res)
    console.log('Data:', res.data)
    countries.value = res.data
  } catch (error) {
    console.error('Error:', error)
  }
}
fetchData()
</script>
