<script setup lang="ts"></script>

<template>
  <div class="rs-header__middle">
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
    <div class="rs-header__logo">
      <a href="#">
        <img src="@/assets/images/logo.png" width="243" height="50" alt="" />
      </a>
    </div>
    <div class="user-interactions">
      <a href="#" class="user-interactions__link">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#user"></use>
        </svg>
        <span>войти</span>
      </a>
      <a href="#" class="user-interactions__link">
        <svg class="rs-icon rs-icon--stroke">
          <use xlink:href="@/assets/icons/sprite.svg#star"></use>
        </svg>
        <span>избранное</span>
      </a>
      <a href="#" class="user-interactions__link">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#cart"></use>
        </svg>
        <span>корзина</span>
      </a>
      <a href="#" class="user-interactions__link">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#search"></use>
        </svg>
        <span>поиск</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import './HeaderMiddleNavbar.scss';
</style>
