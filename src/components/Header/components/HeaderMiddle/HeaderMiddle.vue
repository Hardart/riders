<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="header__middle">
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
    <div class="header__logo">
      <a href="#">
        <SvgImage image="logo" />
      </a>
    </div>
    <div class="user-interactions">
      <a href="#" class="user-interactions__link">
        <SvgIcon icon="user" class="user-interactions__icon" />
        <span>войти</span>
      </a>
      <a href="#" class="user-interactions__link">
        <SvgIcon icon="star" class="user-interactions__icon" />
        <span>избранное</span>
      </a>
      <a href="#" class="user-interactions__link">
        <SvgIcon icon="cart" class="user-interactions__icon" />
        <span>корзина</span>
      </a>
      <a href="#" class="user-interactions__link">
        <SvgIcon icon="search" class="user-interactions__icon" />
        <span>поиск</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" src="./HeaderMiddle.scss" scoped />
