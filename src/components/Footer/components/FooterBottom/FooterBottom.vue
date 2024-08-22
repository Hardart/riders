<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="footer-bottom">
    <div class="footer-bottom__social-links">
      <a href="" target="_blank" class="footer-bottom__social-link-item">
        <SvgIcon icon="twitter" />
      </a>
      <a href="" target="_blank" class="footer-bottom__social-link-item">
        <SvgIcon icon="facebook" />
      </a>
      <a href="" target="_blank" class="footer-bottom__social-link-item">
        <SvgIcon icon="twitch" />
      </a>
      <a href="" target="_blank" class="footer-bottom__social-link-item">
        <SvgIcon icon="youtube" class="icon-youtube" />
      </a>
      <a href="" target="_blank" class="footer-bottom__social-link-item">
        <SvgIcon icon="instagram" />
      </a>
    </div>
    <div class="footer-bottom__copyright-info">
      © 2020 Brd.ru. Все права защищены
    </div>
  </div>
</template>

<style lang="scss" src="./FooterBottom.scss" scoped />
