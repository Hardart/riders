<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import ProductSlider from './components/ProductSlider/ProductSlider.vue'
import ProductRating from './components/ProductRating/ProductRating.vue'
import ProductColors from './components/ProductColors/ProductColors.vue'
import ProductSizes from './components/ProductSizes/ProductSizes.vue'
import ProductDelivery from './components/ProductDelivery/ProductDelivery.vue'
import ProductCharachteristics from './components/ProductCharachteristics/ProductCharachteristics.vue'
</script>

<template>
  <div class="product">
    <ProductSlider />
    <div class="product__details">
      <p class="product__article">Артикул производителя: 19SN003</p>
      <div class="product__details-group">
        <SvgImage image="brand-logo" class="product__brand" />
        <ProductRating class="product__rating" />
        <button class="product__favorite">
          <SvgIcon icon="star" class="product__favorite-icon" />
        </button>
      </div>
      <h1 class="product__title">
        Сноуборд GNU Asym Carbon Credit Btx Multicolor
      </h1>
      <div class="product__details-group">
        <div class="badge product__discount">-50%</div>
        <h3 class="product__price">59 395 ₽</h3>
        <div>
          <p class="product__old-price">134392 ₽</p>
          <a href="#" class="product__cheaper-price">Нашли дешевле?</a>
        </div>
      </div>
      <hr class="separator" />
      <ProductColors />
      <ProductSizes />
      <button class="button button--accent button--xl product__button">
        Добавить в корзину
      </button>
      <button
        class="button button--accent button--xl button--outline product__button"
      >
        Забрать в магазине
      </button>
      <hr class="separator hidden-m" />
      <ProductDelivery />
    </div>
    <ProductCharachteristics class="hidden-m" />
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
