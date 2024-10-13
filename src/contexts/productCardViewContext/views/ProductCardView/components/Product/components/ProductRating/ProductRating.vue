<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="product-rating">
    <ul class="product-rating__stars">
      <li class="product-rating__item">
        <SvgIcon
          icon="star"
          class="product-rating__icon product-rating__icon--active"
        />
      </li>
      <li class="product-rating__item">
        <SvgIcon
          icon="star"
          class="product-rating__icon product-rating__icon--active"
        />
      </li>
      <li class="product-rating__item">
        <SvgIcon
          icon="star"
          class="product-rating__icon product-rating__icon--active"
        />
      </li>
      <li class="product-rating__item">
        <SvgIcon
          icon="star"
          class="product-rating__icon product-rating__icon--active"
        />
      </li>
      <li class="product-rating__item">
        <SvgIcon icon="star" class="product-rating__icon" />
      </li>
    </ul>
    <p class="product-rating__reviews">24 отзыва</p>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
