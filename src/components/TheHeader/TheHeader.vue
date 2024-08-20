<script setup lang="ts">
import RsHeaderTopNavbar from '@/components/HeaderTopNavbar/HeaderTopNavbar.vue'
import RsHeaderMiddleNavbar from '@/components/HeaderMiddleNavbar/HeaderMiddleNavbar.vue'
import RsHeaderBottomNavbar from '@/components/HeaderBottomNavbar/HeaderBottomNavbar.vue'
</script>

<template>
  <header class="rs-header">
    <RsHeaderTopNavbar />
    <RsHeaderMiddleNavbar />
    <RsHeaderBottomNavbar />
  </header>
</template>

<style lang="scss">
@import './TheHeader.scss';
</style>
