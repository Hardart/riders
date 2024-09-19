<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="popular-categories">
    <h3 class="section-title">Популярные продукты</h3>
    <ul class="popular-categories__list">
      <li class="popular-categories__item popular-categories__item--accent">
        <a href="">Распродажа</a>
      </li>
      <li class="popular-categories__item"><a href="">Новинки</a></li>
      <li class="popular-categories__item"><a href="">Сноуборд</a></li>
      <li class="popular-categories__item"><a href="">Лыжи</a></li>
      <li class="popular-categories__item"><a href="">Скейт</a></li>
      <li class="popular-categories__item popular-categories__item--more">
        Показать еще
        <SvgIcon icon="chevronDown" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./styles.scss" scoped />
