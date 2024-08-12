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
        <img src="../assets/images/logo.png" width="243" height="50" alt="" />
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
@import '../assets/styles/content-grid-extend.scss';

.rs-header__middle {
  display: grid;
  padding: 22px 0;
  grid-template-columns: repeat(3, 1fr);
}

.rs-header__logo {
  display: flex;
  justify-content: center;
}

.gender-filter {
  display: flex;
  align-items: center;
  gap: 0 25px;

  &__item {
    position: relative;
    font-size: var(--fs-m);
    font-weight: var(--fw-medium);
    line-height: 16.8px;

    &--active::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: var(--color-black);
    }
  }
}

.user-interactions {
  display: flex;
  align-self: end;
  align-items: end;
  justify-content: end;
  gap: 0 27px;

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: var(--fs-xs);
    font-weight: var(--fw-medium);
    letter-spacing: 0.2px;
    text-transform: uppercase;
    line-height: 10px;
    height: 40px;

    &:hover {
      color: var(--color-gray-dark);
    }
  }
}
</style>
