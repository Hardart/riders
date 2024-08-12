<script setup lang="ts"></script>

<template>
  <div class="article-slider">
    <div class="article-slider__track">
      <div class="blog-slide">
        <div class="blog-slide__media">
          <img
            class="blog-slide__image"
            src="../assets/images/blog-1.png"
            width="827"
            height="645"
            alt=""
          />
          <div class="media-controls">
            <div class="media-controls__play"></div>
          </div>
        </div>
        <div class="blog-slide__content">
          <div class="blog-slide__header">
            <p class="blog-slide__category">блоги</p>
            <a href="#" class="blog-slide__category-link">все блоги</a>
          </div>
          <div class="blog-slide__body">
            <h3 class="blog-slide__title">
              Очень преочень <br />длинное название блога
            </h3>
            <div class="blog-slide__preview-text">
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.
              </p>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.
              </p>
            </div>
          </div>
          <div class="blog-slide__footer">
            <a href="" class="blog-slide__read-more">Читать продолжение</a>
          </div>
        </div>
      </div>
      <div class="blog-slide">
        <div class="blog-slide__media">
          <img
            class="blog-slide__image"
            src="../assets/images/blog-2.png"
            width="827"
            height="645"
            alt=""
          />
          <div class="media-controls">
            <div class="media-controls__play"></div>
          </div>
        </div>
        <div class="blog-slide__content">
          <div class="blog-slide__header">
            <p class="blog-slide__category">блоги</p>
            <a href="#" class="blog-slide__category-link">все блоги</a>
          </div>
          <div class="blog-slide__body">
            <h3 class="blog-slide__title">
              Очень преочень <br />длинное название блога
            </h3>
            <div class="blog-slide__preview-text">
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.
              </p>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.
              </p>
            </div>
          </div>
          <div class="blog-slide__footer">
            <a href="" class="blog-slide__read-more">Читать продолжение</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-navigation slider-navigation--left">
      <svg class="rs-icon slider-navigation__icon">
        <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
      </svg>
    </div>
    <div class="slider-navigation slider-navigation--right">
      <svg class="rs-icon slider-navigation__icon">
        <use xlink:href="@/assets/icons/sprite.svg#chevron-left"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.article-slider {
  position: relative;
  overflow: hidden;
  height: 645px;
  margin: 60px 0 45px;
  @extend %content-grid--full;

  &__track {
    display: flex;
    height: 100%;
  }
}

.blog-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: none;
  width: 95%;
  color: var(--color-white);
  background-color: var(--color-black);
  font-weight: var(--fw-medium);
  overflow: hidden;

  &__media {
    position: relative;
    display: block;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
  }

  &__body {
    max-width: 550px;
  }

  &__footer {
    margin-bottom: 15px;
  }

  &__category {
    font-size: var(--fs-2xl);
    line-height: 35px;
    text-transform: capitalize;
  }

  &__category-link {
    text-decoration: underline;
    line-height: 25px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__title {
    font-size: var(--fs-3xl);
    font-weight: var(--fw-bold);
    line-height: 40px;
    margin-bottom: 40px;
  }

  &__preview-text {
    color: var(--color-gray-dark);
    line-height: 25px;
  }

  &__read-more {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    line-height: 25px;
    text-decoration: underline;

    &::before {
      content: '';
      display: block;
      width: 30px;
      height: 1px;
      margin-top: 1px;
      background-color: var(--color-white);
    }
  }
}

.media-controls {
  position: absolute;
  inset: 0;

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    color: var(--color-black);
    background-color: hsla(var(--color-white-hsl), 0.9);
    border-radius: 50%;
    box-shadow: -4px 4px 4px 0px hsla(var(--color-black-hsl), 0.05);
    transform: translate(-50%, -50%);
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      width: 28px;
      height: 24px;
      border: 12px solid transparent;
      border-left: 24px solid var(--color-black);
      transform: translate(-25%, -50%);
    }

    &:hover {
      background-color: hsla(var(--color-gray-light-hsl), 0.9);
    }
  }
}
</style>
