<script setup lang="ts">
    import HeaderTilte from './components/HeaderTilte.vue';
    import vueRatingInput from 'vue-rating-input'
    import "vue-rating-input/dist/style.css";

    import { ref, Ref } from 'vue'

    const value:Ref<number | undefined> = ref()
    import { FwbTab, FwbTabs } from 'flowbite-vue'

    const activeTab = ref('first')
</script>
<template>
    <HeaderTilte/>
    <div class="container m-auto lg:w-11/12  bg-red-500 my-5 p-8 px-16 grid md:grid-cols-3 gap-3 text-slate-100">
        <img src="./assets/latest7.jpg.webp" class="w-full" alt="">
        <div class="h-full flex flex-col justify-around w-full col-span-2">
            <div class="w-full">
                <h1 class="text-4xl">The Rage of Dragons</h1>
                <p class="text-sm font-medium mt-3">By Evan Winter</p>
            </div>

            <div>
                <h1 class="text-3xl">$50.00</h1>
                <div class="flex items-center">
                    <vueRatingInput :modelValue="value" @update:modelValue="value = $event" />
                    (120 reviews)
                </div>
                
            </div>
            <div>
                <button  
                class="px-5 py-3 bg-slate-50 rounded-full text-gray-500 hover:bg-red-500 border hover:border-white hover:text-white">
                    Add  To Cart
                </button>
                <button class="px-4 py-3 border border-white rounded-full ms-3 hover:bg-white hover:text-red-500">Share</button>
            </div>
        </div>
    </div>
    <div class="w-10/12 mx-auto">
        <fwb-tabs v-model="activeTab" variant="underline"  class="">
            <fwb-tab name="first" title="Description" class="df">
            Lorem ipsum dolor...wert
            </fwb-tab>
            <fwb-tab name="second" title="Author">
            Lorem ipsum dolor...
            </fwb-tab>
            <fwb-tab name="third" title="Comments">
            Lorem ipsum dolor...
            </fwb-tab>
            <fwb-tab name="four" title="Review">
                Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
            </fwb-tab>
        </fwb-tabs>
    </div>
</template>