<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="footer-bottom">
    <ul class="social-links">
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="twitter" />
        </a>
      </li>
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="facebook" />
        </a>
      </li>
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="twitch" />
        </a>
      </li>
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="youtube" class="icon-youtube" />
        </a>
      </li>
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="instagram" />
        </a>
      </li>
    </ul>
    <div class="footer-bottom__copyright-info">
      © 2020 Brd.ru. Все права защищены
    </div>
  </div>
</template>

<style lang="scss" src="./FooterBottom.scss" scoped />
