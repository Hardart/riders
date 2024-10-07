<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="header__top">
    <div class="navbar-top">
      <div class="location-panel">
        <button class="location-panel__region-select region-select">
          <SvgIcon icon="location" class="region-select__location-icon" />
          <span class="region-select__text">
            Ваш регион доставки:
            <span class="region-select__city">Москва</span>
          </span>
          <SvgIcon icon="chevronDown" class="region-select__chevron-icon" />
        </button>
        <nav class="location-panel__nav">
          <ul class="location-panel__list">
            <li class="location-panel__item">
              <a href="#" class="location-panel__link">Магазины</a>
            </li>
            <li class="location-panel__item">
              <a href="#" class="location-panel__link">Помощь</a>
            </li>
            <li class="location-panel__item">
              <a href="#" class="location-panel__link">Блоги</a>
            </li>
          </ul>
        </nav>
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
