<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="hero-slider">
    <div class="hero-slider__container">
      <div class="hero-slider__items">
        <div class="hero-slider__item">
          <img
            src="@/assets/images/1.png"
            class="hero-slider__image"
            width="1360"
            height="482"
            alt=""
          />
        </div>
        <div class="hero-slider__item">
          <p class="hero-slider__title">winter sale до -70%</p>
          <img
            src="@/assets/images/2.png"
            class="hero-slider__image"
            width="1360"
            height="482"
            alt=""
          />
        </div>
        <div class="hero-slider__item">
          <p class="hero-slider__title">LIB TECH</p>
          <img
            src="@/assets/images/3.png"
            class="hero-slider__image"
            width="1360"
            height="482"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="slider-navigation slider-navigation--left">
      <SvgIcon icon="chevronLeft" class="slider-navigation__icon" />
    </div>
    <div class="slider-navigation slider-navigation--right">
      <SvgIcon icon="chevronLeft" class="slider-navigation__icon" />
    </div>
    <ul class="slider-navigation__dots">
      <li class="slider-navigation__dot slider-navigation__dot--active"></li>
      <li class="slider-navigation__dot"></li>
      <li class="slider-navigation__dot"></li>
      <li class="slider-navigation__dot"></li>
      <li class="slider-navigation__dot"></li>
    </ul>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped />
