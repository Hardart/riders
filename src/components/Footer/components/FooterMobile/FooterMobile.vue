<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="footer-mobile">
    <div class="footer-accordion">
      <details class="footer-accordion__panel">
        <summary class="footer-accordion__title">Контакты</summary>
        <div class="footer-accordion__content">
          <div class="footer-contact">
            <SvgIcon icon="phone" class="footer-contact__icon" />
            <h4 class="footer-contact__title">
              <a href="">8 (800) 511-74-68</a>
            </h4>
            <p class="footer-contact__description">
              Бесплатная горячая линия<br />Ежедневно с 9 до 21
            </p>
          </div>
          <div class="footer-contact">
            <SvgIcon icon="mail" class="footer-contact__icon" />
            <h4 class="footer-contact__title">Контактный Email</h4>
            <a href="mailto:info@abrd.ru" class="footer-contact__description">
              info@abrd.ru
            </a>
          </div>
        </div>
      </details>
      <details class="footer-accordion__panel">
        <summary class="footer-accordion__title">Помощь</summary>
        <div class="footer-accordion__content">
          <ul class="footer-nav">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Доставка</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Оплата</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Возврат</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Отзывы (2290)</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Акции и скидки</a>
            </li>
          </ul>
        </div>
      </details>
      <details class="footer-accordion__panel">
        <summary class="footer-accordion__title">Компания</summary>
        <div class="footer-accordion__content">
          <ul class="footer-nav">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Контакты</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">О boardriders</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Вакансии</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Публичная оферта</a>
            </li>
          </ul>
        </div>
      </details>
      <details class="footer-accordion__panel">
        <summary class="footer-accordion__title">Boardriders Inc.</summary>
        <div class="footer-accordion__content">
          <ul class="footer-nav">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Франчайзинг</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Quiksilver</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Roxy</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">DC Shoes</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Boardriders Club</a>
            </li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</template>

<style lang="scss" src="./FooterMobile.scss" scoped />
