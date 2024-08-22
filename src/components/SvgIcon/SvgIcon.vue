<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const { icon } = defineProps<{
  icon: string
}>()

const svg = defineAsyncComponent(() => import(`@icons/${icon}.svg`))
</script>

<template>
  <component :is="svg" class="icon" />
</template>
