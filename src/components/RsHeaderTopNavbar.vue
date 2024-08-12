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
            src="../assets/icons/truck.png"
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
@import '../assets/styles/content-grid-extend.scss';

.rs-header {
  @extend %content-grid;

  &__top {
    padding: 13px 0;
    @extend %content-grid;
    @extend %content-grid--full;
    color: var(--color-gray-lighter);
    background-color: var(--color-black);
  }
}

.navbar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--fs-s);
  font-weight: var(--fw-medium);
  line-height: 20px;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left-panel {
    display: flex;
    align-items: center;
  }

  &__link {
    margin-left: 25px;
  }
}

.region-select-button {
  display: inline-flex;
  align-items: center;
  gap: 0 15px;
  margin-right: 10px;
  color: var(--color-gray-lighter);
  background-color: var(--color-black);
  cursor: pointer;

  &__text {
    font-size: var(--fs-s);
    font-weight: var(--fw-medium);
    line-height: 20px;
  }

  &__chevron-icon {
    width: 10px;
    height: 10px;
    margin-top: 2px;
  }

  &__city {
    margin-left: 5px;
  }
}

.user-services {
  display: flex;
  align-items: center;
  gap: 0 28px;

  &__link {
    display: flex;
    align-items: center;
    gap: 0 15px;
  }

  &__icon {
    color: var(--color-gray);

    &--credit {
      margin-top: 2px;
    }
  }
}
</style>
