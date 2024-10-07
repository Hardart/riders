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
    <div class="slider-nav slider-nav--left hidden-l">
      <SvgIcon icon="chevronLeft" class="slider-nav__icon" />
    </div>
    <div class="slider-nav slider-nav--right hidden-l">
      <SvgIcon icon="chevronLeft" class="slider-nav__icon" />
    </div>
    <ul class="slider-dot-nav visible-l">
      <li class="slider-dot-nav__item slider-dot-nav__item--active"></li>
      <li class="slider-dot-nav__item"></li>
      <li class="slider-dot-nav__item"></li>
      <li class="slider-dot-nav__item"></li>
      <li class="slider-dot-nav__item"></li>
    </ul>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped />
