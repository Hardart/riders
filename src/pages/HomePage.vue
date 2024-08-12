<script setup lang="ts">
import RsSectionBrands from '@/components/RsSectionBrands.vue'
import RsSectionNewProducts from '@/components/RsSectionNewProducts.vue'
import RsSectionPopularProducts from '@/components/RsSectionPopularProducts.vue'
import RsSectionPromotion from '@/components/RsSectionPromotion.vue'
import RsSliderOfBlogArticles from '@/components/RsSliderOfBlogArticles.vue'
import RsSliderMain from '@/components/RsSliderMain.vue'
import RsSpecialOffer from '@/components/RsSpecialOffer.vue'
import RsSectionLoyality from '@/components/RsSectionLoyality.vue'
</script>

<template>
  <main class="rs-main">
    <RsSliderMain />
    <RsSectionBrands />
    <RsSectionPromotion />
    <RsSectionNewProducts />
    <RsSpecialOffer />
    <RsSectionPopularProducts />
    <RsSliderOfBlogArticles />
    <RsSectionLoyality />
  </main>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.rs-main {
  @extend %content-grid;
}
</style>
