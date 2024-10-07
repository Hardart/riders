<script setup lang="ts">
import Brands from './components/Brands/Brands.vue'
import NewProducts from './components/NewProducts/NewProducts.vue'
import PopularProducts from './components/PopularProducts/PopularProducts.vue'
import Promotions from './components/Promotions/Promotions.vue'
import BlogArticlesSlider from './components/BlogArticlesSlider/BlogArticlesSlider.vue'
import HeroSlider from './components/HeroSlider/HeroSlider.vue'
import SpecialOffer from './components/SpecialOffer/SpecialOffer.vue'
import LoyalityInfo from './components/LoyalityInfo/LoyalityInfo.vue'
import PopularCategories from './components/PopularCategories/PopularCategories.vue'
import GenderFilter from './components/GenderFilter/GenderFilter.vue'
</script>

<template>
  <main class="main">
    <GenderFilter />
    <HeroSlider />
    <PopularCategories />
    <Brands />
    <Promotions />
    <NewProducts />
    <SpecialOffer />
    <PopularProducts />
    <BlogArticlesSlider />
    <LoyalityInfo />
  </main>
</template>

<style lang="scss" src="./styles.scss" scoped />
