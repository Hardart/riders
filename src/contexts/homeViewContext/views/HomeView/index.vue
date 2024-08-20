<script setup lang="ts">
import Brands from '@/contexts/homeViewContext/views/HomeView/components/Brands/Brands.vue'
import NewProducts from '@/contexts/homeViewContext/views/HomeView/components/NewProducts/NewProducts.vue'
import PopularProducts from '@/contexts/homeViewContext/views/HomeView/components/PopularProducts/PopularProducts.vue'
import Promotions from '@/contexts/homeViewContext/views/HomeView/components/Promotions/Promotions.vue'
import BlogArticlesSlider from '@/contexts/homeViewContext/views/HomeView/components/BlogArticlesSlider/BlogArticlesSlider.vue'
import HeroSlider from '@/contexts/homeViewContext/views/HomeView/components/HeroSlider/HeroSlider.vue'
import SpecialOffer from '@/contexts/homeViewContext/views/HomeView/components/SpecialOffer/SpecialOffer.vue'
import LoyalityInfo from '@/contexts/homeViewContext/views/HomeView/components/LoyalityInfo/LoyalityInfo.vue'
</script>

<template>
  <main class="rs-main">
    <HeroSlider />
    <Brands />
    <Promotions />
    <NewProducts />
    <SpecialOffer />
    <PopularProducts />
    <BlogArticlesSlider />
    <LoyalityInfo />
  </main>
</template>

<style lang="scss">
@import '@/styles/content-grid-extend.scss';

.rs-main {
  @extend %content-grid;
}
</style>
