<script setup lang="ts"></script>

<template>
  <section class="promotion-section">
    <article class="promotion-card">
      <img class="promotion-card__image" src="../assets/images/5.png" alt="" />
      <a href="#" class="promotion-card__link">название акции №1</a>
    </article>
    <article class="promotion-card">
      <img class="promotion-card__image" src="../assets/images/4.png" alt="" />
      <a href="#" class="promotion-card__link">название акции №2</a>
    </article>
  </section>
</template>

<style lang="scss">
.promotion-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 30px;
  padding: 40px 0;
}

.promotion-card {
  flex: 1;
  display: flex;
  flex-direction: column;

  &__image {
    display: block;
    width: 100%;
    height: 270px;
    object-fit: cover;
    object-position: top;
  }

  &__link {
    display: grid;
    place-items: center;
    padding: 23px 0;
    font-size: var(--fs-2xl);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    color: var(--color-white);
    background-color: var(--color-black);
  }
}
</style>
