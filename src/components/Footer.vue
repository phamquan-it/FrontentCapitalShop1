<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */

/* import specific icons */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCartShopping);
</script>
<template>
  <div class="footer bg-slate-800 text-slate-50 pt-5">
    <div class="container m-auto mt-12">
      <div
        class="grid md:grid-cols-3 lg:grid-cols-4 gap-10 border-b border-gray-500 pb-8"
      >
        <div>
          <span class="text-2xl">Subscribe Newsletter</span>
          <p class="text-sm">Subscribe newsletter to get 5% on all products.</p>
        </div>
        <div class="col-span-2">
          <div class="block md:flex rounded-md">
            <input
              type="text"
              name="username"
              id="username"
              autocomplete="username"
              class=" block flex-1 border-0 bg-white p-3 focus-visible:outline-none text-gray-900 placeholder:text-gray-600"
              placeholder="Enter your email"
            />
            <button class="ms-3 bg-red-500 p-3 text-sm font-semibold">
              Subcrible
            </button>
          </div>
        </div>
        <div class="flex justify-around text-2xl ps-4 pe-4">
          <a href="#">
            <img
              src="../assets/facebook.png"
              class="h-6 w-6"
              alt=""
              srcset=""
            />
          </a>
          <a href="#">
            <img
              src="../assets/instagram.png"
              class="h-6 w-6"
              alt=""
              srcset=""
            />
          </a>
          <a href="#">
            <img src="../assets/youtube.png" class="h-6 w-6" alt="" srcset="" />
          </a>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-b border-gray-500 pt-5 pb-12"
      >
        <div class="col-span-2">
          <img src="../assets/logo2_footer.png .webp" alt="" srcset="" />
        </div>
        <div class="text-lg">
          <h1 class="mb-5 font-medium">Shop Men</h1>
          <ul class="text-sm leading-7">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>
        <div class="text-lg">
          <h1 class="mb-5 font-medium">Shop Women</h1>
          <ul class="text-sm leading-7">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>
        <div class="text-lg">
          <h1 class="mb-5 font-medium">Baby Collection</h1>
          <ul class="text-sm leading-7">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>
        <div class="text-lg">
          <h1 class="mb-5 font-medium">Quick Links</h1>
          <ul class="text-sm leading-7">
            <li>Track Your Order</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>Carrier</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div class="text-center p-5">
        Copyright ©2023 All rights reserved | This template is made with by
        <span class="text-red-500">Colorlib</span>
      </div>
    </div>
  </div>
</template>
