<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <section class="popular-products">
    <h3 class="section-title">DC Shoes популярное в коллекции</h3>

    <div class="carousel">
      <div class="carousel__items">
        <article class="carousel__item carousel-card">
          <div class="carousel-card__header">
            <img
              class="carousel-card__image"
              src="@/assets/images/image 9-3.png"
              alt=""
            />
            <div class="carousel-card__favorite">
              <SvgIcon icon="star" class="carousel-card__favorite-icon" />
            </div>
            <div class="carousel-card__info">
              <p class="carousel-card__badge carousel-card__badge--accent">
                -50%
              </p>
            </div>
          </div>
          <div class="carousel-card__body">
            <h4 class="carousel-card__title">lib tech</h4>
            <p class="carousel-card__description">Мужской Сноуборд</p>
            <div class="carousel-card__pricing">
              <span class="carousel-card__price carousel-card__price--old">
                34392 ₽
              </span>
              <span class="carousel-card__price carousel-card__price--new">
                17392 ₽
              </span>
            </div>
          </div>
        </article>
        <article class="carousel__item carousel-card">
          <div class="carousel-card__header">
            <img
              class="carousel-card__image"
              src="@/assets/images/image 9-4.png"
              alt=""
            />
            <div class="carousel-card__favorite">
              <SvgIcon icon="star" class="carousel-card__favorite-icon" />
            </div>
            <div class="carousel-card__info">
              <p class="carousel-card__badge carousel-card__badge--accent">
                -50%
              </p>
            </div>
          </div>
          <div class="carousel-card__body">
            <h4 class="carousel-card__title">lib tech</h4>
            <p class="carousel-card__description">Мужской Сноуборд</p>
            <div class="carousel-card__pricing">
              <span class="carousel-card__price carousel-card__price--old">
                34392 ₽
              </span>
              <span class="carousel-card__price carousel-card__price--new">
                17392 ₽
              </span>
            </div>
          </div>
        </article>
        <article class="carousel__item carousel-card">
          <div class="carousel-card__header">
            <img
              class="carousel-card__image"
              src="@/assets/images/image 9-1.png"
              alt=""
            />
            <div class="carousel-card__favorite">
              <SvgIcon icon="star" class="carousel-card__favorite-icon" />
            </div>
          </div>
          <div class="carousel-card__body">
            <h4 class="carousel-card__title">lib tech</h4>
            <p class="carousel-card__description">Мужской Сноуборд</p>
            <div class="carousel-card__pricing">
              <span class="carousel-card__price"> 34392 ₽ </span>
            </div>
          </div>
        </article>
        <article class="carousel__item carousel-card">
          <div class="carousel-card__header">
            <img
              class="carousel-card__image"
              src="@/assets/images/image 9-2.png"
              alt=""
            />
            <div class="carousel-card__favorite">
              <SvgIcon icon="star" class="carousel-card__favorite-icon" />
            </div>
          </div>
          <div class="carousel-card__body">
            <h4 class="carousel-card__title">lib tech</h4>
            <p class="carousel-card__description">Мужской Сноуборд</p>
            <div class="carousel-card__pricing">
              <span class="carousel-card__price"> 34392 ₽ </span>
            </div>
          </div>
        </article>
      </div>
      <div class="carousel__navigation carousel__navigation--left">
        <SvgIcon icon="chevronLeft" class="carousel__navigation-icon" />
      </div>
      <div class="carousel__navigation carousel__navigation--right">
        <SvgIcon icon="chevronLeft" class="carousel__navigation-icon" />
      </div>
    </div>
    <button class="button button--secondary button--more">
      Показать больше
    </button>
  </section>
</template>

<style lang="scss" src="./styles.scss" scoped />
