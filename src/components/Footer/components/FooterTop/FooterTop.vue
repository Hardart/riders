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
            Подпишись на рассылку и получи <span>-10%</span> скидку
          </label>

          <div class="input__icon input__icon--flip">
            <SvgIcon icon="airplane" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./FooterTop.scss" scoped />
