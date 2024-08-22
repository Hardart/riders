<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <section class="new-products">
    <h3 class="section-title">Новинки</h3>
    <div class="products-carousel">
      <div class="products-carousel__items">
        <article class="product-card">
          <div class="product-card__header">
            <img
              class="product-card__image"
              src="@/assets/images/image 9.png"
              alt=""
            />
            <div
              class="product-card__favorite product-card__favorite--selected"
            >
              <SvgIcon icon="star" class="product-card__favorite-icon" />
            </div>
          </div>
          <div class="product-card__body">
            <h4 class="product-card__title">lib tech</h4>
            <p class="product-card__description">Мужской Сноуборд</p>
            <div class="product-card__pricing">
              <span class="product-card__price"> 34392 ₽ </span>
            </div>
          </div>
        </article>
        <article class="product-card">
          <div class="product-card__header">
            <img
              class="product-card__image"
              src="@/assets/images/image 9-3.png"
              alt=""
            />
            <div class="product-card__favorite">
              <SvgIcon icon="star" class="product-card__favorite-icon" />
            </div>
            <div class="product-card__info">
              <p class="product-card__badge product-card__badge--accent">
                -50%
              </p>
            </div>
          </div>
          <div class="product-card__body">
            <h4 class="product-card__title">lib tech</h4>
            <p class="product-card__description">Мужской Сноуборд</p>
            <div class="product-card__pricing">
              <span class="product-card__price product-card__price--old">
                34392 ₽
              </span>
              <span class="product-card__price product-card__price--new">
                17392 ₽
              </span>
            </div>
          </div>
        </article>
        <article class="product-card">
          <div class="product-card__header">
            <img
              class="product-card__image"
              src="@/assets/images/image 9-1.png"
              alt=""
            />
            <div class="product-card__favorite">
              <SvgIcon icon="star" class="product-card__favorite-icon" />
            </div>
          </div>
          <div class="product-card__body">
            <h4 class="product-card__title">lib tech</h4>
            <p class="product-card__description">Мужской Сноуборд</p>
            <div class="product-card__pricing">
              <span class="product-card__price"> 34392 ₽ </span>
            </div>
          </div>
        </article>
        <article class="product-card">
          <div class="product-card__header">
            <img
              class="product-card__image"
              src="@/assets/images/image 9-2.png"
              alt=""
            />
            <div class="product-card__favorite">
              <SvgIcon icon="star" class="product-card__favorite-icon" />
            </div>
          </div>
          <div class="product-card__body">
            <h4 class="product-card__title">lib tech</h4>
            <p class="product-card__description">Мужской Сноуборд</p>
            <div class="product-card__pricing">
              <span class="product-card__price"> 34392 ₽ </span>
            </div>
          </div>
        </article>
      </div>
      <div class="carousel-navigation carousel-navigation--left">
        <SvgIcon icon="chevronLeft" class="carousel-navigation__icon" />
      </div>
      <div class="carousel-navigation carousel-navigation--right">
        <SvgIcon icon="chevronLeft" class="carousel-navigation__icon" />
      </div>
    </div>
    <div class="section-show-more-button">
      <button class="button button--secondary">Показать больше</button>
    </div>
  </section>
</template>

<style lang="scss" src="./styles.scss" scoped />
