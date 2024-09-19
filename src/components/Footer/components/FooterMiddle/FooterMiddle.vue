<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <div class="footer-middle">
    <div class="footer-middle__apps-panel">
      <div class="mobile-apps">
        <p class="footer-middle_panel-title mobile-apps__header">
          Доступ к ранним релизам в приложении
        </p>
        <div class="mobile-apps__links">
          <div class="mobile-apps__link">
            <SvgImage image="appStore" />
          </div>
          <div class="mobile-apps__link">
            <SvgImage image="googlePlay" />
          </div>
        </div>
        <div class="mobile-apps__qr">
          <SvgImage image="appQrCode" />
        </div>
      </div>
    </div>
    <div class="footer-middle__contacts-panel">
      <div class="footer-middle__panel-title">Контакты</div>
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
    <div class="footer-middle__navigation-panel">
      <div class="footer-nav">
        <h4 class="footer-nav__title">
          <a href="#">Помощь</a>
        </h4>
        <a href="#" class="footer-nav__link">Доставка</a>
        <a href="#" class="footer-nav__link">Оплата</a>
        <a href="#" class="footer-nav__link">Возврат</a>
        <a href="#" class="footer-nav__link">Отзывы (2290)</a>
        <a href="#" class="footer-nav__link">Акции и скидки</a>
      </div>
      <div class="footer-nav">
        <h4 class="footer-nav__title">
          <a href="#">Компания</a>
        </h4>
        <a href="#" class="footer-nav__link">Контакты</a>
        <a href="#" class="footer-nav__link">О boardriders</a>
        <a href="#" class="footer-nav__link">Вакансии</a>
        <a href="#" class="footer-nav__link">Публичная оферта</a>
      </div>
      <div class="footer-nav">
        <h4 class="footer-nav__title">
          <a href="#">Boardriders Inc.</a>
        </h4>
        <a href="#" class="footer-nav__link">Франчайзинг</a>
        <a href="#" class="footer-nav__link">Quiksilver</a>
        <a href="#" class="footer-nav__link">Roxy</a>
        <a href="#" class="footer-nav__link">DC Shoes</a>
        <a href="#" class="footer-nav__link">Boardriders Club</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./FooterMiddle.scss" scoped />
