<script setup lang="ts"></script>

<template>
  <div class="rs-header__bottom">
    <nav class="main-navbar">
      <ul class="main-navbar__list">
        <li class="main-navbar__item main-navbar__item--active">
          <a href="">Новинки</a>
        </li>
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
        <li class="main-navbar__item main-navbar__item--accent">
          <a href="">Распродажа</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.rs-header__bottom {
  @extend %content-grid;
  @extend %content-grid--full;
  color: var(--color-black);
  background-color: #f9f9f9; // MISS IN TEMPLATE!!
  min-height: 60px;
}

.main-navbar {
  font-size: var(--fs-m);
  line-height: 25px;
  font-weight: var(--fw-medium);

  &__list {
    display: flex;
    align-items: center;
    gap: 0 25px;
    height: 100%;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    height: inherit;

    &:hover::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-black);
    }

    &--accent {
      color: var(--color-red);

      &:hover::after {
        background-color: var(--color-red);
      }
    }
  }
}
</style>
