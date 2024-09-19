<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="header__mobile">
    <div class="header__mobile-top">
      <div class="mobile-interactions">
        <SvgIcon icon="menu" />
        <SvgIcon icon="search" class="search-icon" />
      </div>
      <div class="header__logo">
        <SvgImage image="mobile-logo" />
      </div>
      <div class="user-interactions">
        <a href="#" class="user-interactions__link">
          <SvgIcon icon="star" class="user-interactions__icon" />
        </a>
        <a href="#" class="user-interactions__link">
          <SvgIcon icon="cart" class="user-interactions__icon" />
        </a>
      </div>
    </div>
    <div class="header__mobile-bottom">
      <ul class="gender-filter">
        <li class="gender-filter__item gender-filter__item--active">
          <a href="" class="gender-filter__link">Мужчинам</a>
        </li>
        <li class="gender-filter__item">
          <a href="" class="gender-filter__link">Женщинам</a>
        </li>
        <li class="gender-filter__item">
          <a href="" class="gender-filter__link">Детям</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="./HeaderMobile.scss" scoped />
