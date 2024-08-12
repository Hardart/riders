<script setup lang="ts"></script>

<template>
  <section class="new-products-section">
    <h3 class="section-title">Новинки</h3>
    <div class="products-carousel">
      <div class="products-carousel__items">
        <article class="product-card">
          <div class="product-card__header">
            <img
              class="product-card__image"
              src="../assets/images/image 9.png"
              alt=""
            />
            <div
              class="product-card__favorite product-card__favorite--selected"
            >
              <svg class="rs-icon">
                <use xlink:href="@/assets/icons/sprite.svg#star"></use>
              </svg>
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
              src="../assets/images/image 9-3.png"
              alt=""
            />
            <div class="product-card__favorite">
              <svg class="rs-icon">
                <use xlink:href="@/assets/icons/sprite.svg#star"></use>
              </svg>
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
              src="../assets/images/image 9-1.png"
              alt=""
            />
            <div class="product-card__favorite">
              <svg class="rs-icon">
                <use xlink:href="@/assets/icons/sprite.svg#star"></use>
              </svg>
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
              src="../assets/images/image 9-2.png"
              alt=""
            />
            <div class="product-card__favorite">
              <svg class="rs-icon">
                <use xlink:href="@/assets/icons/sprite.svg#star"></use>
              </svg>
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
        <svg class="rs-icon carousel-navigation__icon">
          <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
        </svg>
      </div>
      <div class="carousel-navigation carousel-navigation--right">
        <svg class="rs-icon carousel-navigation__icon">
          <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
        </svg>
      </div>
    </div>
    <div class="section-show-more-button">
      <button class="rs-button rs-button--secondary">Показать больше</button>
    </div>
  </section>
</template>

<style lang="scss">
.new-products-section {
  margin: 20px 0;
  padding: 40px 0;
}

.products-carousel {
  position: relative;
  padding: 40px 0;

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 25px;
  }
}

.product-card {
  display: flex;
  flex-direction: column;

  &__header {
    position: relative;
    display: grid;
    place-items: center;

    &:hover .product-card__image {
      transform: rotateY(180deg);
    }
  }

  &__image {
    padding: 50px 25px;
    background-color: #f9f9f9;
  }

  &__title {
    margin-top: 10px;
    height: 18px;
    font-size: var(--fs-l);
    font-weight: var(--fw-medium);
    line-height: 25px;
    text-transform: uppercase;
  }

  &__description {
    height: 18px;
    margin-top: 5px;
    color: var(--color-gray-dark);
    font-size: var(--fs-m);
    font-weight: var(--fw-medium);
    line-height: 25px;
    vertical-align: bottom;
  }

  &__pricing {
    margin-top: 10px;
  }

  &__price {
    font-size: var(--fs-xl);
    line-height: 30px;

    &--old {
      text-decoration: line-through;
    }

    &--new {
      margin-left: 15px;
      color: var(--color-red);
    }
  }

  &__info {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &__badge {
    padding: 0 10px;
    font-size: var(--fs-m);
    line-height: 25px;
    background-color: var(--color-white);

    &--accent {
      color: var(--color-gray-lighter);
      background-color: var(--color-red);
      font-weight: var(--fw-medium);
    }

    &--secondary {
      color: var(--color-gray-lighter);
      background-color: #333;
      font-weight: var(--fw-regular);
    }
  }

  &__favorite {
    position: absolute;
    top: 15px;
    right: 15px;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--color-white);
    border-radius: 50%;
    color: var(--color-white);
    stroke: var(--color-black);
    outline: solid 1px var(--color-gray-lighter);
    cursor: pointer;

    &:hover {
      stroke: var(--color-gray-dark);
    }

    &--selected {
      background-color: var(--color-black);
      stroke: var(--color-white);
      outline: none;

      &:hover {
        stroke: var(--color-white);
      }
    }
  }
}
</style>
