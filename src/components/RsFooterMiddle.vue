<script setup lang="ts"></script>

<template>
  <div class="rs-footer__middle">
    <div class="rs-footer__apps-panel">
      <div class="mobile-apps">
        <p class="rs-footer__panel-title mobile-apps__header">
          Доступ к ранним релизам в приложении
        </p>
        <div class="mobile-apps__links">
          <div class="mobile-apps__link">
            <img src="../assets/icons/appStore.svg" alt="app store" />
          </div>
          <div class="mobile-apps__link">
            <img src="../assets/icons/googlePlay.svg" alt="google play" />
          </div>
        </div>
        <div class="mobile-apps__qr">
          <img src="../assets/images/qr.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="rs-footer__contacts-panel">
      <div class="rs-footer__panel-title">Контакты</div>
      <div class="footer-contact">
        <svg class="rs-icon footer-contact__icon">
          <use xlink:href="@/assets/icons/sprite.svg#phone"></use>
        </svg>

        <h4 class="footer-contact__title">
          <a href="">8 (800) 511-74-68</a>
        </h4>
        <p class="footer-contact__description">
          Бесплатная горячая линия<br />Ежедневно с 9 до 21
        </p>
      </div>
      <div class="footer-contact">
        <svg class="rs-icon footer-contact__icon">
          <use xlink:href="@/assets/icons/sprite.svg#letter"></use>
        </svg>
        <h4 class="footer-contact__title">Контактный Email</h4>
        <a href="mailto:info@abrd.ru" class="footer-contact__description">
          info@abrd.ru
        </a>
      </div>
    </div>
    <div class="rs-footer__navigation-panel">
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

<style lang="scss">
.rs-footer {
  &__middle {
    display: flex;
    justify-content: space-between;
    gap: 0 60px;
    padding: 30px 0;
    color: var(--color-gray-lighter);
    border-top: 1px solid hsla(var(--color-white-hsl), 0.2);
    border-bottom: 1px solid hsla(var(--color-white-hsl), 0.2);
  }

  &__panel-title {
    margin-bottom: 10px;
    font-size: var(--fs-l);
    font-weight: var(--fw-medium);
    line-height: 25px;
  }

  &__apps-panel {
    display: flex;
    flex-grow: 1;
    gap: 0 60px;
  }

  &__contacts-panel {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__navigation-panel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 80px;
  }
}

.mobile-apps {
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 20px;

  &__header {
    grid-column: span 2;
    font-size: var(--fs-l);
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 15px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid hsla(var(--color-white-hsl), 0.1);
  }
}

.footer-contact {
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-areas:
    'icon title'
    'icon desc';
  gap: 10px;
  margin-top: 20px;

  &__icon {
    width: 23px;
    height: 23px;
    grid-area: icon;
  }

  &__title {
    grid-area: title;
    font-size: var(--fs-l);
    font-weight: var(--fw-medium);
    line-height: 21.6px;
    letter-spacing: normal;
  }

  &__description {
    color: var(--color-gray);
    grid-area: desc;
    font-size: var(--fs-s);
    line-height: 20px;
    letter-spacing: normal;
  }
}

.footer-nav {
  &__title {
    margin-bottom: 25px;
    color: var(--color-gray-lighter);
    font-size: var(--fs-xl);
    font-weight: var(--fw-medium);
    line-height: 22px;
  }

  &__link {
    display: block;
    margin-top: 20px;
    color: var(--color-gray);
    font-size: var(--fs-s);
    font-weight: var(--fw-medium);
    line-height: 14px;
  }
}
</style>
