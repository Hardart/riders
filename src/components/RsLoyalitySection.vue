<script setup lang="ts"></script>

<template>
  <section class="loyality-section">
    <div class="loyality-card loyality-card--our-club">
      <div class="loyality-card__content">
        <div class="loyality-card__image">
          <img
            src="../assets/images/logo-v2.png"
            width="152"
            height="75"
            alt="logo"
          />
        </div>

        <h3 class="loyality-card__title">Программа лояльности</h3>
        <p class="loyality-card__descripiton">
          Зарабатывайте баллы и получайте преимущества
        </p>
        <button class="rs-button">вступить в клуб</button>
      </div>
    </div>

    <div class="loyality-card loyality-card--subscribe">
      <div class="loyality-card__content">
        <div class="loyality-card__image">
          <!-- <IconMail width="71" height="57" /> -->
          <svg class="rs-icon loyality-card__icon">
            <use xlink:href="@/assets/icons/sprite.svg#letter"></use>
          </svg>
        </div>
        <h3 class="loyality-card__title">Скидка -10%</h3>
        <p class="loyality-card__descripiton">За подписку на наши новости</p>
        <div class="rs-input loyality-card__input">
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
              value="Email"
            />

            <div class="rs-input__icon rs-input__icon--flip">
              <svg class="rs-icon">
                <use xlink:href="@/assets/icons/sprite.svg#airplane"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.loyality-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 25px;
  margin-bottom: 45px;
}

.loyality-card {
  display: grid;
  place-items: center;
  color: var(--color-white);
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 0.95;
  padding: 40px;
  box-shadow: inset 0 0 0 2000px hsla(var(--color-black-hsl), 0.35);

  &--our-club {
    background-image: url('../assets/images/6.png');
    background-position: center;
  }

  &--subscribe {
    background: url('../assets/images/1.png');
    background-position: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__title {
    font-size: var(--fs-3xl);
    font-weight: var(--fw-bold);
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  &__descripiton {
    font-size: var(--fs-l);
    font-weight: var(--fw-medium);
    line-height: 25px;
    margin-bottom: 25px;
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: end;
    width: 152px;
    height: 75px;
  }

  &__icon {
    width: 71px;
    height: 57px;
  }

  &__input {
    max-width: 400px;
  }
}

.rs-input {
  width: 100%;
  height: 50px;

  &__container {
    position: relative;
    height: inherit;
  }

  &__label {
    font-size: var(--fs-s);
    line-height: 20px;
    color: var(--color-gray-dark);
  }

  &__label + &__container {
    margin-top: 4px;
  }

  &__field {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-weight: var(--fw-medium);
    vertical-align: middle;
    padding: 0 10px;

    &--icon {
      padding-left: 40px;
    }
    &--icon-flip {
      padding-right: 60px;
    }
  }

  &__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--color-black);
    pointer-events: none;

    &--flip {
      right: 0;
      left: auto;
      width: 60px;
    }
  }
}
</style>
