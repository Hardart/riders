<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="product-delivery">
    <p class="product-delivery__title">
      Варианты доставки в: <span>г. Москва</span>
    </p>
    <ul class="product-delivery__variants">
      <li class="product-delivery__place">
        <div class="product-delivery__media">
          <SvgIcon icon="truck" class="product-delivery__truck-icon" />
        </div>
        <div class="product-delivery__info">
          <p class="product-delivery__method">Курьером по вашему адресу</p>
          <p class="product-delivery__details">
            <span class="product-delivery__day">Сегодня</span>
            /
            <span class="product-delivery__price product-delivery__price--free">
              Бесплатно
            </span>
            <span class="product-delivery__old-price">500 ₽</span>
          </p>
        </div>
      </li>
      <li class="product-delivery__place">
        <div class="product-delivery__media">
          <SvgIcon icon="shop" class="product-delivery__shop-icon" />
        </div>
        <div class="product-delivery__info">
          <p class="product-delivery__method">
            Забрать в одном из
            <span class="product-delivery__select">9 магазинов</span>
          </p>
          <p class="product-delivery__details">
            <span class="product-delivery__day">Сегодня</span>
            /
            <span class="product-delivery__price">500 ₽</span>
          </p>
        </div>
      </li>
      <li class="product-delivery__place">
        <div class="product-delivery__media">
          <SvgIcon icon="deliveryShop" class="product-delivery__shop-icon" />
        </div>
        <div class="product-delivery__info">
          <p class="product-delivery__method">
            Заказать доставку в один из
            <span class="product-delivery__select">15 магазинов</span>
          </p>
          <p class="product-delivery__details">
            <span class="product-delivery__day">20 апреля </span>
            /
            <span class="product-delivery__price product-delivery__price--free">
              Бесплатно
            </span>
          </p>
        </div>
      </li>
      <li class="product-delivery__place">
        <div class="product-delivery__media">
          <SvgIcon
            icon="deliveryLocation"
            class="product-delivery__location-icon"
          />
        </div>
        <div class="product-delivery__info">
          <p class="product-delivery__method">
            Забрать из
            <span class="product-delivery__select">пункта самовывоза</span>
            с примеркой
          </p>
          <p class="product-delivery__details">
            <span class="product-delivery__day">20 апреля</span>
            /
            <span class="product-delivery__price product-delivery__price--free">
              Бесплатно
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
