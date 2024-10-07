<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="article-slider">
    <div class="article-slider__track">
      <div class="blog-slide">
        <div class="blog-slide__head-title">Новые статьи</div>
        <div class="blog-slide__media">
          <img
            class="blog-slide__image"
            src="@/assets/images/blog-1.png"
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
              Очень преочень длинное название блога
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
            <a href="#" class="blog-slide__read-more">Читать продолжение</a>
          </div>
        </div>
        <a href="#" class="blog-slide__show-all">Смотреть все статьи</a>
      </div>
      <div class="blog-slide">
        <div class="blog-slide__media">
          <img
            class="blog-slide__image"
            src="@/assets/images/blog-2.png"
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
    <div class="slider-nav slider-nav--left hidden-l">
      <SvgIcon icon="chevronLeft" class="slider-nav__icon" />
    </div>
    <div class="slider-nav slider-nav--right hidden-l">
      <SvgIcon icon="chevronLeft" class="slider-nav__icon" />
    </div>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped />
