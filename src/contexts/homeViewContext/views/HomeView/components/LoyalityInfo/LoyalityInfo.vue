<script setup lang="ts"></script>

<template>
  <section class="loyality-section">
    <div class="loyality-card loyality-card--our-club">
      <div class="loyality-card__content">
        <div class="loyality-card__image">
          <img
            src="@/assets/images/logo-v2.png"
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
@import './styles.scss';
</style>
