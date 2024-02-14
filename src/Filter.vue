<script setup lang="ts">
import HeaderTilte from './components/HeaderTilte.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { FwbRange } from 'flowbite-vue'
onMounted(() => {
    initFlowbite();
})

const min = ref(0)
const max = ref(20)


import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>
<template>
    <Header/>
    <HeaderTilte/>
    <div class="grid grid-cols-4 gap-5 w-10/12 m-auto mt-8">
        <div class="row-span-1">
            <div class="border w-full px-3 py-6">
                <div class="mt-2">
                    <select id="category" name="country" autocomplete="country-name" class="block w-full rounded-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Category</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
                <div class="mt-4">
                    <select id="type" name="country" autocomplete="country-name" class="block w-full rounded-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Type</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
                <div class="mt-4">
                    <select id="size" name="country" autocomplete="country-name" class="block w-full rounded-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Size</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
                <div class="mt-4">
                    <select id="country" name="coun" autocomplete="country-name" class="block w-full rounded-full border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Color</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
                <div class="mt-3">
                    <h1 class="text-lg font-medium">Price</h1>
                    <fwb-range v-model="min" :max="20" :min="0" label="Min:" class="range" />
                    <fwb-range v-model="max" :max="20" :min="0" label="Max:" class="range" />

                </div>
                <div class="mt-3">
                    <h1 class="text-lg font-medium">Filter by Genres</h1>
                    <div class="flex h-6 items-center">
                        <input id="item1" name="candidates1" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="item1" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="item2" name="candidates2" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="item2" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="item3" name="candidates3" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="item3" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="item4" name="candidates4" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="item4" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="item5" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="item5" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                </div>
                <div class="mt-3">
                    <h1 class="text-lg font-medium">Filter by Brand</h1>
                    <div class="flex h-6 items-center">
                        <input id="br1" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="br1" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="br2" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="br2" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="br3" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="br3" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="br4" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="br4" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                    <div class="flex h-6 items-center">
                        <input id="br5" name="candidates[]" type="checkbox" class="h-4 w-4 rounded-full border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="br5" class="ms-2 text-sm text-gray-700">History</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-3 grid grid-cols-3 grid-rows-3 gap-2 gap-x-6">
            <div class="max-w-sm rounded text-center group p-3" v-for="person in numbers" :key="person">
                <div class="relative overflow-hidden">
                <img class="w-full transition duration-300 ease-in-out group-hover:scale-110" src="./assets/latest8.jpg.webp" alt="Sunset in the mountains">
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
        </div>
    </div>
    <Footer/>
</template>