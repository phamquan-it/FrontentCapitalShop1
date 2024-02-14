<script setup lang="ts">
import ListSlide from './ListSlide.vue';
</script>
<template>
    <div class="pt-8 pb-5">
        <div class="container m-auto border-b w-11/12 flex justify-between">
            <h1 class="text-3xl font-medium  my-5">You May Like</h1>
            <ul class="flex font-medium">
                <li class="mt-4 p-2 border-b-4 border-red-500  text-red-500">Men</li>
                <li class="mt-4 p-2 border-transparent border-b-4 hover:border-red-500  hover:text-red-500">Women</li>
                <li class="mt-4 p-2 border-transparent border-b-4 hover:border-red-500  hover:text-red-500">Baby</li>
                <li class="mt-4 p-2 border-transparent border-b-4 hover:border-red-500  hover:text-red-500">Fashion</li>
            </ul>
        </div>
        <ListSlide/>
    </div>
</template>