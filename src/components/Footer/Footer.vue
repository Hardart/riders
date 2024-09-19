<script setup lang="ts">
import FooterTop from './components/FooterTop/FooterTop.vue'
import FooterMiddle from './components/FooterMiddle/FooterMiddle.vue'
import FooterBottom from './components/FooterBottom/FooterBottom.vue'
import FooterMobile from './components/FooterMobile/FooterMobile.vue'
</script>

<template>
  <footer class="footer">
    <FooterTop />
    <FooterMiddle />
    <FooterMobile />
    <FooterBottom />
  </footer>
</template>

<style lang="scss" src="./Footer.scss" scoped />
