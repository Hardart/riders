<script setup lang="ts"></script>

<template>
  <div class="main-slider">
    <div class="main-slider__items">
      <div class="main-slider__item">
        <img src="@/assets/images/1.png" width="1360" height="482" alt="" />
      </div>
      <div class="main-slider__item">
        <p class="main-slider__title">winter sale до -70%</p>
        <img src="@/assets/images/2.png" width="1360" height="482" alt="" />
      </div>
      <div class="main-slider__item">
        <p class="main-slider__title">LIB TECH</p>
        <img src="@/assets/images/3.png" width="1360" height="482" alt="" />
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
@import './styles.scss';
</style>
