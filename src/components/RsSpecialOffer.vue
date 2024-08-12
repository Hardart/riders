<script setup lang="ts"></script>

<template>
  <div class="special-offer">
    <img class="special-offer__image" src="../assets/images/offer.png" />
    <h4 class="special-offer__title">название акции</h4>
    <p class="special-offer__description">
      Меня не спрашивали, а надо было спросить, что означает имя Заратустры
      именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит
      неслыханная уникальность этого перса в истории, являет собою
      противоположность как раз этому.
    </p>
  </div>
</template>

<style lang="scss">
.special-offer {
  position: relative;
  margin: 35px 0;

  &__image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }

  &__title {
    margin-top: 25px;
    font-size: var(--fs-2xl);
    font-weight: var(--fw-medium);
    line-height: 35px;
    text-transform: capitalize;
    text-align: center;
  }

  &__description {
    max-width: 670px;
    margin: 10px auto 0;
    color: var(--color-gray-dark);
    font-size: var(--fs-m);
    line-height: 25px;
    text-align: center;
  }
}
</style>
