<script setup lang="ts"></script>

<template>
  <div class="rs-footer__bottom">
    <div class="rs-footer__social-links">
      <a href="" target="_blank" class="rs-footer__social-link-item">
        <svg class="rs-icon icon-twitter">
          <use xlink:href="@/assets/icons/sprite.svg#twitter"></use>
        </svg>
      </a>
      <a href="" target="_blank" class="rs-footer__social-link-item">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#facebook"></use>
        </svg>
      </a>
      <a href="" target="_blank" class="rs-footer__social-link-item">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#twitch"></use>
        </svg>
      </a>
      <a href="" target="_blank" class="rs-footer__social-link-item">
        <svg class="rs-icon icon-youtube">
          <use xlink:href="@/assets/icons/sprite.svg#youtube"></use>
        </svg>
      </a>
      <a href="" target="_blank" class="rs-footer__social-link-item">
        <svg class="rs-icon">
          <use xlink:href="@/assets/icons/sprite.svg#instagram"></use>
        </svg>
      </a>
    </div>
    <div class="rs-footer__copyright-info">
      © 2020 Brd.ru. Все права защищены
    </div>
  </div>
</template>

<style lang="scss">
.rs-footer {
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 30px 0 0;
  }

  &__social-links {
    display: flex;
    align-items: center;
    gap: 0 25px;
  }

  &__social-link-item {
    color: var(--color-white);

    &:hover {
      color: var(--color-gray-dark);
    }
  }

  &__copyright-info {
    color: var(--color-gray);
    font-size: var(--fs-s);
    font-weight: var(--fw-medium);
    line-height: 14.4px;
  }
}

.icon-twitter {
  width: 21px;
  height: 21px;
}

.icon-youtube {
  width: 24px;
  height: 24px;
}
</style>
