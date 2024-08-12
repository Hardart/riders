<script setup lang="ts">
import RsBrandsSection from '@/components/RsBrandsSection.vue'
import RsNewProductsSection from '@/components/RsNewProductsSection.vue'
import RsPopularProductsSection from '@/components/RsPopularProductsSection.vue'
import RsPromotionSection from '@/components/RsPromotionSection.vue'
import RsSliderOfBlogArticles from '@/components/RsSliderOfBlogArticles.vue'
import RsSliderMain from '@/components/RsSliderMain.vue'
import RsSpecialOffer from '@/components/RsSpecialOffer.vue'
import RsLoyalitySection from '@/components/RsLoyalitySection.vue'
</script>

<template>
  <main class="rs-main">
    <RsSliderMain />
    <RsBrandsSection />
    <RsPromotionSection />
    <RsNewProductsSection />
    <RsSpecialOffer />
    <RsPopularProductsSection />
    <RsSliderOfBlogArticles />
    <RsLoyalitySection />
  </main>
</template>

<style lang="scss">
@import '../assets/styles/content-grid-extend.scss';

.rs-main {
  @extend %content-grid;
}
</style>
