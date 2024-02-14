<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onMounted } from "vue";
import { VueSlickCarousel, ListSlickMethods } from "vue-slick-ts";
import type { SlickInstance } from "vue-slick-ts";
import "vue-slick-ts/dist/css/slick.css";

const carousel = ref<SlickInstance | null>(null);

const handleInit = (e: JQuery.Event, instance: SlickInstance) => {
  console.log(e, instance);
};
const responsiveSettings = [
  
  {
    breakpoint: 1024, // Breakpoint for large screens
    settings: {
      slidesToShow: 4, // Number of slides to show on large screens
      slidesToScroll: 1, // Number of slides to scroll on large screens
    },
  },
  {
    breakpoint: 768, // Breakpoint for medium screens
    settings: {
      slidesToShow: 2, // Number of slides to show on medium screens
      slidesToScroll: 1, // Number of slides to scroll on medium screens
    },
  },
  {
    breakpoint: 480, // Breakpoint for small screens
    settings: {
      slidesToShow: 1, // Number of slides to show on small screens
      slidesToScroll: 1, // Number of slides to scroll on small screens
    },
  },
];

onMounted(() => {
  carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY);
});

//icon

/* import specific icons */
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faHeart,
  faMagnifyingGlassPlus,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faAngleLeft,faMagnifyingGlassPlus,faHeart,faMagnifyingGlass, faUser, faCartShopping);

</script>
<template>
  <div class="container mx-auto p-3">
    <VueSlickCarousel
      :slides-to-show="4"
      :mobile-first="true"
      ref="carousel"
      @init="handleInit"
      :center-padding="'100px'"
      :autoplay-speed="1000"
      :responsive="responsiveSettings"
    >
    <div class="w-full rounded text-center group p-3">
      <div class="relative overflow-hidden">
       <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="../assets/latest8.jpg.webp" alt="Sunset in the mountains">
       <ul class="hidden group-hover:flex absolute bg-white border w-3/4 left-10 bottom-2 flex justify-around">
        <li class="py-3 hover:bg-red-500 w-full group-child"><a class="" href="">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
        </a></li>
        
       </ul>
      </div>
      <div class="px-6">
        <h1 class=" text-gray-700 text-base  mt-5 group-hover:text-red-500">Cashmerge Tank + Bag</h1>
      </div>
      <div class="px-6 pt-1 pb-2">
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-gray-500 group-hover:text-gray-700 mr-2 mb-2">
          $98.00
        </span>
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-yellow-700 mr-2 mb-2 line-through">
          $120.00
        </span>
      </div>
    </div>
    <div class="max-w-sm rounded text-center group p-3">
      <div class="relative overflow-hidden">
       <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="../assets/latest8.jpg.webp" alt="Sunset in the mountains">
       <ul class="hidden group-hover:flex absolute bg-white border w-3/4 left-10 bottom-2 flex justify-around">
        <li class="py-3 hover:bg-red-500 w-full group-child"><a class="" href="">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
        </a></li>
        
       </ul>
      </div>
      <div class="px-6">
        <h1 class=" text-gray-700 text-base  mt-5 group-hover:text-red-500">Cashmerge Tank + Bag</h1>
      </div>
      <div class="px-6 pt-1 pb-2">
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-gray-500 group-hover:text-gray-700 mr-2 mb-2">
          $98.00
        </span>
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-yellow-700 mr-2 mb-2 line-through">
          $120.00
        </span>
      </div>
    </div>
    <div class="max-w-sm rounded text-center group p-3">
      <div class="relative overflow-hidden">
       <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="../assets/latest8.jpg.webp" alt="Sunset in the mountains">
       <ul class="hidden group-hover:flex absolute bg-white border w-3/4 left-10 bottom-2 flex justify-around">
        <li class="py-3 hover:bg-red-500 w-full group-child"><a class="" href="">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
        </a></li>
        
       </ul>
      </div>
      <div class="px-6">
        <h1 class=" text-gray-700 text-base  mt-5 group-hover:text-red-500">Cashmerge Tank + Bag</h1>
      </div>
      <div class="px-6 pt-1 pb-2">
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-gray-500 group-hover:text-gray-700 mr-2 mb-2">
          $98.00
        </span>
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-yellow-700 mr-2 mb-2 line-through">
          $120.00
        </span>
      </div>
    </div>
    <div class="max-w-sm rounded text-center group p-3">
      <div class="relative overflow-hidden">
       <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="../assets/latest8.jpg.webp" alt="Sunset in the mountains">
       <ul class="hidden group-hover:flex absolute bg-white border w-3/4 left-10 bottom-2 flex justify-around">
        <li class="py-3 hover:bg-red-500 w-full group-child"><a class="" href="">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
        </a></li>
        
       </ul>
      </div>
      <div class="px-6">
        <h1 class=" text-gray-700 text-base  mt-5 group-hover:text-red-500">Cashmerge Tank + Bag</h1>
      </div>
      <div class="px-6 pt-1 pb-2">
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-gray-500 group-hover:text-gray-700 mr-2 mb-2">
          $98.00
        </span>
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-yellow-700 mr-2 mb-2 line-through">
          $120.00
        </span>
      </div>
    </div>
    <div class="max-w-sm rounded text-center group p-3">
      <div class="relative overflow-hidden">
       <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="../assets/latest8.jpg.webp" alt="Sunset in the mountains">
       <ul class="hidden group-hover:flex absolute bg-white border w-3/4 left-10 bottom-2 flex justify-around">
        <li class="py-3 hover:bg-red-500 w-full group-child"><a class="" href="">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-heart" />
        </a></li>
        <li class="py-3 hover:bg-red-500 w-full group-child"><a href="">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
        </a></li>
        
       </ul>
      </div>
      <div class="px-6">
        <h1 class=" text-gray-700 text-base  mt-5 group-hover:text-red-500">Cashmerge Tank + Bag</h1>
      </div>
      <div class="px-6 pt-1 pb-2">
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-gray-500 group-hover:text-gray-700 mr-2 mb-2">
          $98.00
        </span>
        <span class="inline-block rounded-full px-1 py-1 text-md font-medium text-yellow-700 mr-2 mb-2 line-through">
          $120.00
        </span>
      </div>
    </div>
    </VueSlickCarousel>
  </div>
</template>
