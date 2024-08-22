<script setup lang="ts">
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import HeaderMiddle from './components/HeaderMiddle/HeaderMiddle.vue'
import HeaderBottom from './components/HeaderBottom/HeaderBottom.vue'
</script>

<template>
  <header class="header">
    <HeaderTop />
    <HeaderMiddle />
    <HeaderBottom />
  </header>
</template>

<style lang="scss" src="./Header.scss" scoped />
