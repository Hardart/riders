<script setup lang="ts"></script>

<template>
  <div class="rs-header__top">
    <div class="navbar-top">
      <div class="navbar-top__wrapper">
        <button class="region-select-button">
          <svg class="rs-icon">
            <use xlink:href="@/assets/icons/sprite.svg#location"></use>
          </svg>
          <span class="region-select-button__text">
            Ваш регион доставки:
            <span class="region-select-button__city">Москва</span>
          </span>
          <svg class="rs-icon region-select-button__chevron-icon">
            <use xlink:href="@/assets/icons/sprite.svg#chevron-down"></use>
          </svg>
        </button>
        <a href="#" class="navbar-top__link">Магазины</a>
        <a href="#" class="navbar-top__link">Помощь</a>
        <a href="#" class="navbar-top__link">Блоги</a>
      </div>
      <div class="user-services">
        <a href="#" class="user-services__link">
          <img
            class="user-services__icon"
            src="@/assets/icons/truck.png"
            width="24"
            height="24"
          />

          <span class="user-services__text">Бесплатная доставка *</span>
        </a>
        <a href="#" class="user-services__link">
          <svg class="rs-icon user-services__icon user-services__icon--credit">
            <use xlink:href="@/assets/icons/sprite.svg#credit-card"></use>
          </svg>
          <span class="user-services__text">Оплата при получении</span>
        </a>
        <a href="#" class="user-services__link">
          <svg class="rs-icon user-services__icon">
            <use xlink:href="@/assets/icons/sprite.svg#desk-arrow-left"></use>
          </svg>
          <span class="user-services__text">Возврат в течение 14 дней</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './HeaderTopNavbar.scss';
</style>
