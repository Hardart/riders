<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import SvgImage from '@/components/SvgImage/SvgImage.vue'
</script>

<template>
  <section class="loyality-info">
    <div class="loyality-card loyality-card--our-club">
      <div class="loyality-card__content">
        <div class="loyality-card__image">
          <SvgImage image="logo-v2" />
        </div>

        <h3 class="loyality-card__title">Программа лояльности</h3>
        <p class="loyality-card__descripiton">
          Зарабатывайте баллы и получайте преимущества
        </p>
        <button class="button">вступить в клуб</button>
      </div>
    </div>

    <div class="loyality-card loyality-card--subscribe">
      <div class="loyality-card__content">
        <div class="loyality-card__image">
          <SvgIcon icon="mail" class="loyality-card__icon" />
        </div>
        <h3 class="loyality-card__title">Скидка -10%</h3>
        <p class="loyality-card__descripiton">За подписку на наши новости</p>
        <div class="input loyality-card__input">
          <div class="input__container">
            <div class="input__icon">
              <SvgIcon icon="mail" />
            </div>
            <input
              id="email"
              type="email"
              class="input__field input__field--icon input__field--icon-flip"
              value="Email"
            />

            <div class="input__icon input__icon--flip">
              <SvgIcon icon="airplane" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./styles.scss" scoped />
