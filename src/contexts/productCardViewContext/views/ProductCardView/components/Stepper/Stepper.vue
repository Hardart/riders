<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <ul class="stepper">
    <li class="stepper__item">
      <div class="stepper__content">
        <div class="stepper__title">Собери комплект</div>
        <div class="stepper__cost-info">И получи скидку</div>
      </div>
      <div class="stepper__discount-info">
        <div class="badge stepper__discount-percent">-20%</div>
        <div class="stepper__old-price">134392 ₽</div>
      </div>
    </li>
    <li class="stepper__item stepper__item--selected">
      <div class="stepper__step-number">1</div>
      <div class="stepper__content">
        <div class="stepper__title">Выбери борд</div>
        <p class="stepper__product">
          <span class="stepper__product-title">
            GNU Asym Carbon Credit Btx Multicolor
          </span>
          <span class="stepper__product-price"> – 59 395 ₽</span>
        </p>
      </div>
      <div class="stepper__cart stepper__cart--added">
        <SvgIcon icon="cart" class="stepper__cart-icon" />
        <div class="stepper__cart-status">добавлен</div>
      </div>
    </li>
    <li class="stepper__item">
      <div class="stepper__step-number">2</div>
      <div class="stepper__content">
        <div class="stepper__title">Выбери крепление</div>
        <p class="stepper__product">
          <span class="stepper__product-title">Крепление FIRTLEN</span>
          <span class="stepper__product-price"> – 21 359 ₽</span>
        </p>
      </div>
      <div class="stepper__cart">
        <SvgIcon icon="cart" class="stepper__cart-icon" />
        <div class="stepper__cart-status">добавить</div>
      </div>
    </li>
    <li class="stepper__item">
      <div class="stepper__step-number">3</div>
      <div class="stepper__content">
        <div class="stepper__title">Выбери ботинки</div>
        <p class="stepper__product">
          <span class="stepper__product-title">
            GNU Asym Carbon Credit Btx Multicolor
          </span>
          <span class="stepper__product-price"> – 59 395 ₽</span>
        </p>
      </div>
      <div class="stepper__cart">
        <SvgIcon icon="cart" class="stepper__cart-icon" />
        <div class="stepper__cart-status">добавить</div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped src="./styles.scss" />
