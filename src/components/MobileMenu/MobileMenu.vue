<script setup lang="ts">
import { mobileMenu } from './state'
import SvgIcon from '../SvgIcon/SvgIcon.vue'
</script>

<template>
  <div
    class="mobile-menu"
    v-if="mobileMenu.isContainer"
    :class="mobileMenu.isOpen && 'mobile-menu--open'"
    @click.self="mobileMenu.toggleOpenState"
    @transitionend="mobileMenu.hideMobileContainer"
  >
    <div class="mobile-menu__wrapper">
      <div class="mobile-menu__header">
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
      <div class="mobile-menu__body">
        <nav class="main-navbar">
          <ul class="main-navbar__list">
            <li class="main-navbar__item main-navbar__item--accent">
              <a href="">Распродажа</a>
            </li>
            <li class="main-navbar__item"><a href="">Новинки</a></li>
            <li class="main-navbar__item"><a href="">Сноуборд</a></li>
            <li class="main-navbar__item"><a href="">Лыжи</a></li>
            <li class="main-navbar__item"><a href="">Скейт</a></li>
            <li class="main-navbar__item"><a href="">Лонгборд</a></li>
            <li class="main-navbar__item"><a href="">Вейкборд</a></li>
            <li class="main-navbar__item"><a href="">Серф</a></li>
            <li class="main-navbar__item"><a href="">Sup</a></li>
            <li class="main-navbar__item"><a href="">Одежда</a></li>
            <li class="main-navbar__item"><a href="">Обувь</a></li>
            <li class="main-navbar__item"><a href="">Аксессуары</a></li>
            <li class="main-navbar__item"><a href="">Бренды</a></li>
          </ul>
        </nav>
        <div class="account">
          <p class="account__title">Личный кабинет</p>
          <button class="button button--secondary account__button">
            Войти
          </button>
          <button class="button account__button">Зарегистрироваться</button>
        </div>

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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./MobileMenu.scss"></style>
