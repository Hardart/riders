<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="header__top">
    <div class="navbar-top">
      <div class="navbar-top__wrapper">
        <button class="region-select-button">
          <SvgIcon icon="location" />
          <span class="region-select-button__text">
            Ваш регион доставки:
            <span class="region-select-button__city">Москва</span>
          </span>
          <SvgIcon
            icon="chevronDown"
            class="region-select-button__chevron-icon"
          />
        </button>
        <a href="#" class="navbar-top__link">Магазины</a>
        <a href="#" class="navbar-top__link">Помощь</a>
        <a href="#" class="navbar-top__link">Блоги</a>
      </div>
      <div class="user-services">
        <a href="#" class="user-services__link">
          <SvgIcon
            icon="deliveryTruck"
            class="user-services__icon user-services__icon--truck"
          />
          <span class="user-services__text">Бесплатная доставка *</span>
        </a>
        <a href="#" class="user-services__link">
          <SvgIcon icon="creditCard" class="user-services__icon" />
          <span class="user-services__text">Оплата при получении</span>
        </a>
        <a href="#" class="user-services__link">
          <SvgIcon icon="deskArrowLeft" class="user-services__icon" />
          <span class="user-services__text">Возврат в течение 14 дней</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./HeaderTop.scss" scoped />
