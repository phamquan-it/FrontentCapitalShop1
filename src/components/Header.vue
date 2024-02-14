<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBars,faMagnifyingGlass, faUser, faCartShopping);
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>
<template>
  <div class="relative p-4">
    <div class="lg:container lg:w-11/12 m-auto flex  justify-between items-center">
      <div>
        <img src="../assets/logo.png.webp" alt="" srcset="">
      </div>
      
      <div id="accordion-collapse" data-accordion="collapse" class="absolute lg:relative z-50 w-full left-0 top-full">
          <button type="button" class="bg-slate-100 lg:hidden ms-5 mt-2 p-2 px-3 text-sm shadow" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span><font-awesome-icon icon="fa-solid fa-bars" /></span>
          </button>
        <div id="accordion-collapse-body-3" class="hidden  lg:block" aria-labelledby="accordion-collapse-heading-3">
          <ul class="bg-white lg:p-0 border border-t-0 border-gray-200 dark:border-gray-700 w-full lg:flex lg:border-none lg:justify-around lg:w-4/6 mx-auto">
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Home</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Men</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Women</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Baby collection</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Pages</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Blogs</a>
            </li>
            <li class="p-3 group lg:p-0 hover:bg-slate-500 lg:hover:bg-transparent">
              <a class="font-medium lg:group-hover:text-red-500 group-hover:text-slate-50" href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="flex gap-3">
        <li>
          <a class="text-lg hover:text-red-500" href="">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </a>
        </li>
        <li>
          <a class="text-lg hover:text-red-500" href="">
            <font-awesome-icon icon="fa-solid fa-user" />
          </a>
        </li>
        <li>
          <a class="text-lg hover:text-red-500" href="">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
