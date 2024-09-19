<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="footer-top">
    <div class="footer-top__logo">
      <SvgImage image="logo-symbol" />
      <SvgImage image="logo-text" />
    </div>
    <div class="footer-top__subscribe">
      <div class="input footer-top__input">
        <div class="input__container">
          <div class="input__icon">
            <SvgIcon icon="mail" />
          </div>
          <input
            id="email"
            type="email"
            class="input__field input__field--icon input__field--icon-flip"
          />
          <label class="footer-top__subscribe-text">
            <span>
              Подпишись на рассылку и получи
              <span class="footer-top__subscribe-text--accent">-10%</span>
              скидку
            </span>
          </label>

          <div class="input__icon input__icon--flip">
            <SvgIcon icon="airplane" />
          </div>
        </div>
      </div>
    </div>
    <ul class="social-links footer-top__links">
      <li class="social-links__item">
        <a href="" target="_blank">
          <SvgIcon icon="twitter" class="icon-twitter" />
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
  </div>
</template>

<style lang="scss" src="./FooterTop.scss" scoped />
