<script setup lang="ts">
/* add icons to the library */
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import HeaderTilte from './components/HeaderTilte.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <HeaderTilte/>
    <div class="p-4 w-11/12 m-auto grid-flow-row-dense">
        <div class="grid grid-cols-12 text-gray-500 text-sm mb-3">
            <div class="col-span-7">Product</div>
            <div class="col-span-2">Price</div>
            <div class="col-span-2">Quantity</div>
            <div>Total</div>
        </div>
        <div class="grid grid-cols-12 py-3 border-b">
            <div class="col-span-7 flex items-center">
                <p>Minimalistic shop for multipurpose use</p>
            </div>
            <div class="col-span-2 flex items-center">$360.00</div>
            <div class="col-span-2 flex">
                <div class="grid grid-cols-2 grid-rows-2 border">
                    <div class="row-span-2 p-3 border-r">1</div>
                    <div class="text-center">+</div>
                    <div class="text-center border-t">-</div>
                </div>
            </div>
            <div class="flex items-center">$720.00</div>
        </div>
        <div class="grid grid-cols-12 py-5 border-b">
            <div class="col-span-7">
                <button class="py-3 px-4 bg-red-500 rounded-full text-sm text-white font-medium">Update Cart</button>
            </div>
            <div class="col-span-5">
                <button class="py-3 px-4 bg-red-500 rounded-full text-sm text-white font-medium -mx-6">Close Coupon</button>
            </div>
        </div>
        <div class="grid grid-cols-12 py-5 border-b">
            <div class="col-span-7"></div>
            <div class="col-span-5 text-slate-600 flex justify-between w-11/12">
                <span>Subtotal</span>
                <span>$2160.00</span>
            </div>
        </div>
        <div class="grid grid-cols-12 py-5 border-b">
            <div class="md:col-span-7"></div>
            <ul class="col-span-full lg:col-span-5 text-slate-600 w-11/12">
                <li class="flex justify-between py-1">
                    <span>Shipping</span>
                    <div class="flex items-center gap-x-3">
                        <label for="push-nothing" class="block leading-6">Flat Rate: $5.00</label>
                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-transparent">
                    </div>
                </li>
                <li class="flex justify-end py-1">
                    <div class="flex items-center gap-x-3">
                        <label for="push-nothing" class="block leading-6">Free Shipping</label>
                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-transparent">
                    </div>
                </li>
                <li class="flex justify-end py-1">
                    <div class="flex items-center gap-x-3">
                        <label for="push-nothing" class="block leading-6">Flat Rate: $10.00 </label>
                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-transparent">
                    </div>
                </li>
                <li class="flex justify-end py-1">
                    <div class="flex items-center gap-x-3">
                        <label for="push-nothing" class="block leading-6">Local Delivery: $2.00 </label>
                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-red-600 focus:ring-transparent">
                    </div>
                </li>
                <li class="text-sm font-medium text-right">Calculate Shipping </li>
                <li class="flex-col justify-end">
                    <div class="mt-2 w-3/4 ms-auto flex justify-end">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        </select>
                    </div>
                    <div class="mt-2 w-3/4 ms-auto flex justify-end">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Select a States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        </select>
                    </div>
                        <input type="text" name="username" id="username"
                            autocomplete="username"
                            class="block border-gray-200 mt-3  ms-auto" placeholder="Postcode/Zipcode">
                    <div class="mt-2 w-full flex justify-end pr-3">
                        <button class="py-3 px-4 bg-red-500 rounded-full text-sm text-white font-medium">Update details</button>
                    </div> 
                </li>
            </ul>
        </div>
        <div class="py-5">
            <button class="py-3 px-4 bg-red-500 rounded-full text-sm text-white font-medium">Continue Shopping</button>
            <button class="py-3 px-4 bg-red-500 rounded-full text-sm text-white font-medium ms-3">Proceed to checkout</button>
        </div>
    </div>
</template>