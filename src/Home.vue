<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Service from "./components/Service.vue";
import LatestNews from "./components/LatestNews.vue";
import YouMayLike from "./components/YouMayLike.vue";
import SingleSlide from "./components/SingleSlide.vue";
import TrendingThisWeek from './components/TrendingThisWeek.vue';
import Fashion from "./components/Fashion.vue";
import ShopCarousell from "./components/ShopCarousell.vue";
import Header from "./components/Header.vue";

</script>
<template>
    <Header/>
    <ShopCarousell/>
    <Fashion/>
    <TrendingThisWeek/>
    <SingleSlide/>
    <YouMayLike/>
    <LatestNews />
    <Service />
    <Footer />
</template>