<script setup lang="ts"></script>

<template>
  <div class="rs-footer__top">
    <div class="rs-footer__logo">
      <img src="../assets/images/logo-symbol.png" alt="" />
      <img src="../assets/images/logo-text.png" alt="" />
    </div>
    <div class="rs-footer__subscribe">
      <div class="rs-input rs-footer__input">
        <div class="rs-input__container">
          <div class="rs-input__icon">
            <svg class="rs-icon">
              <use xlink:href="@/assets/icons/sprite.svg#letter"></use>
            </svg>
          </div>
          <input
            id="email"
            type="email"
            class="rs-input__field rs-input__field--icon rs-input__field--icon-flip"
          />
          <label class="rs-footer__subscribe-text">
            Подпишись на рассылку и получи <span>-10%</span> скидку
          </label>

          <div class="rs-input__icon rs-input__icon--flip">
            <svg class="rs-icon">
              <use xlink:href="@/assets/icons/sprite.svg#airplane"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.rs-footer__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 20px 0;
}

.rs-footer__subscribe-text {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 50px;
  font-size: var(--fs-l);
  font-weight: var(--fw-medium);
  pointer-events: none;

  & span {
    color: var(--color-red);
    padding: 0 5px;
  }
}

input:focus ~ .rs-footer__subscribe-text,
input:invalid ~ .rs-footer__subscribe-text {
  display: none;
}

.rs-footer__input {
  color: var(--color-white);
  background-color: var(--color-black);
  border-color: hsla(var(--color-white-hsl), 0.2);

  & .rs-input__icon:not(.rs-input__icon--flip) {
    color: var(--color-gray-dark);
  }
}
</style>
