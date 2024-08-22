<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const { image } = defineProps<{
  image: string
}>()

const svg = defineAsyncComponent(
  () => import(`@/assets/images/${image}.svg?skipsvgo`)
)
</script>

<template>
  <component :is="svg" />
</template>
