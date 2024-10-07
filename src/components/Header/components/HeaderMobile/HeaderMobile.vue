<script setup lang="ts">
import SvgImage from '@/components/SvgImage/SvgImage.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { mobileMenu } from '@/components/MobileMenu/state'
</script>

<template>
  <div class="header__mobile">
    <div class="header__mobile-wrapper">
      <div class="mobile-interactions">
        <div
          class="mobile-interactions__menu"
          @click="mobileMenu.toggleOpenState"
        >
          <SvgIcon icon="menu" />
        </div>
        <div class="mobile-interactions__search">
          <SvgIcon icon="search" class="search-icon" />
        </div>
      </div>
      <div class="header__logo">
        <SvgImage image="mobile-logo" class="header__logo-image" />
      </div>
      <div class="user-interactions">
        <a href="#" class="user-interactions__link">
          <SvgIcon icon="star" class="user-interactions__icon" />
        </a>
        <a href="#" class="user-interactions__link">
          <SvgIcon icon="cart" class="user-interactions__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./HeaderMobile.scss" scoped />
