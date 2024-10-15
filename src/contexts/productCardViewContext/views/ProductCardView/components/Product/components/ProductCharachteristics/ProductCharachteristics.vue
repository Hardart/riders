<script lang="ts" setup>
import SvgImage from '@/components/SvgImage/SvgImage.vue'
</script>

<template>
  <div class="product-charachteristics">
    <h3 class="product-charachteristics__title">Характеристики</h3>
    <p class="product-charachteristics__description">
      The Old Skool has never been lacking in attitude. It brought the dawn of
      the classic Vans side stripe that has developed into a status symbol of
      tradition and skate stature. Aside from all that personality, they have
      lasted as long as they have because of their ability to perform on a
      skateboard, and to last, and last. Though they now share the ranks with
      many new Vans styles with their own innovations, the Old Skools aren't
      going anywhere.
    </p>
    <div class="product-charachteristics__schemas">
      <SvgImage image="char-1" class="product-charachteristics__schema" />
      <SvgImage image="char-2" class="product-charachteristics__schema" />
    </div>
    <div class="product-charachteristics__properties">
      <div class="product-charachteristics__list">
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Вес:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">
            Стиль катания:
          </span>
          <span class="product-charachteristics__item-value">Touring</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Stiffness:</span>
          <span class="product-charachteristics__item-value">8</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Base:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Вес:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
      </div>
      <div class="product-charachteristics__list">
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Вес:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">
            Стиль катания:
          </span>
          <span class="product-charachteristics__item-value">Touring</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Stiffness:</span>
          <span class="product-charachteristics__item-value"></span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Base:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
        <div class="product-charachteristics__item">
          <span class="product-charachteristics__item-name">Вес:</span>
          <span class="product-charachteristics__item-value">540 грамм</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
