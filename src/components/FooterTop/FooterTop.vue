<script setup lang="ts"></script>

<template>
  <div class="rs-footer__top">
    <div class="rs-footer__logo">
      <img src="@/assets/images/logo-symbol.png" alt="" />
      <img src="@/assets/images/logo-text.png" alt="" />
    </div>
    <div class="rs-footer__subscribe">
      <div class="rs-input rs-footer__input">
        <div class="rs-input__container">
          <div class="rs-input__icon">
            <svg class="rs-icon">
              <use xlink:href="@/assets/icons/sprite.svg#letter"></use>
            </svg>
          </div>
          <input
            id="email"
            type="email"
            class="rs-input__field rs-input__field--icon rs-input__field--icon-flip"
          />
          <label class="rs-footer__subscribe-text">
            Подпишись на рассылку и получи <span>-10%</span> скидку
          </label>

          <div class="rs-input__icon rs-input__icon--flip">
            <svg class="rs-icon">
              <use xlink:href="@/assets/icons/sprite.svg#airplane"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './FooterTop.scss';
</style>
