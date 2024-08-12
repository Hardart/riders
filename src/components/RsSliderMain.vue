<script setup lang="ts"></script>

<template>
  <div class="main-slider">
    <div class="main-slider__items">
      <div class="main-slider__item">
        <img src="../assets/images/1.png" width="1360" height="482" alt="" />
      </div>
      <div class="main-slider__item">
        <p class="main-slider__title">winter sale до -70%</p>
        <img src="../assets/images/2.png" width="1360" height="482" alt="" />
      </div>
      <div class="main-slider__item">
        <p class="main-slider__title">LIB TECH</p>
        <img src="../assets/images/3.png" width="1360" height="482" alt="" />
      </div>
    </div>
    <div class="slider-navigation slider-navigation--left">
      <svg class="rs-icon slider-navigation__icon">
        <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
      </svg>
    </div>
    <div class="slider-navigation slider-navigation--right">
      <svg class="rs-icon slider-navigation__icon">
        <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.main-slider {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 482px;
  margin: 30px 0;
  @extend %content-grid--full;
  overflow: hidden;

  &__items {
    display: flex;
    gap: 0 25px;
    flex-wrap: nowrap;
  }

  &__item {
    position: relative;
    flex: none;
    width: 1360px;
    height: 482px;
  }

  &__title {
    position: absolute;
    left: 0;
    bottom: 80px;
    padding: 16px 36px;
    color: var(--color-white);
    background-color: var(--color-black);
    font-size: var(--fs-4xl);
    text-transform: uppercase;
    font-weight: var(--fw-bold);
    line-height: 58px;
  }
}
</style>
