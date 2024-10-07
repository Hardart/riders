<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import MobileMenu from './components/MobileMenu/MobileMenu.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <MobileMenu />
</template>

<style lang="scss">
body {
  position: relative;
  left: 0;
  transition: left 0.3s ease;

  &.open-menu {
    left: 320px;
  }
}
.stop-scroll {
  overflow: clip;
  touch-action: none;
}
</style>
