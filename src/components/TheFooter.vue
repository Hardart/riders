<script setup lang="ts">
import RsFooterBottom from './RsFooterBottom.vue'
import RsFooterMiddle from './RsFooterMiddle.vue'
import RsFooterTop from './RsFooterTop.vue'
</script>

<template>
  <footer class="rs-footer">
    <RsFooterTop />
    <RsFooterMiddle />
    <RsFooterBottom />
  </footer>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.rs-footer {
  position: relative;
  background-color: var(--color-black);
  margin-top: 160px;
  padding: 40px 0;
  @extend %content-grid;

  &::before {
    content: '';
    position: absolute;
    top: -150px;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('../assets/images/footer-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
}
</style>
