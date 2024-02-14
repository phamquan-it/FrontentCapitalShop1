<script setup lang="ts">
import HeaderTilte from './components/HeaderTilte.vue';
import BlogComponent from './components/BlogComponent.vue';
import BlogLayout from './components/BlogLayout.vue';
</script>
<template>
    <HeaderTilte/>
    <div class="md:grid grid-cols-3 w-11/12 mx-auto gap-4 py-8">
        <div class="col-span-2">
            <BlogComponent/>
            <div class="p-8 bg-slate-100">
                <p class="bg-white text-gray-500 text-sm p-6 border-l-4 border-l-gray-400">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                </p>
            </div>
            <div class="border-b">
                <p class="my-4 text-sm">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                </p>
                <p class="my-4 text-sm">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                </p>
            </div>
            <div class="flex justify-between py-3">
                <span>
                    Lily and 4 people like this
                </span>
                <ul class="flex">
                    <li>F</li>
                    <li>X</li>
                    <li>B</li>
                    <li>Be</li>
                </ul>
            </div>
            <ul class="py-3 pt-10 border-b flex  justify-between">
                <li class="flex group">
                    <div class="group-hover:bg-gray-400">
                        <img class="group-hover:opacity-20" src="./assets/preview.jpg.webp" alt="" srcset="">
                    </div>
                    <div class="flex-row justify-around ms-3">
                        <p>Prev Post</p>
                        <a href="" class="font-medium group-hover:text-red-500">Space The Final Frontier</a>
                    </div>
                </li>
                <li  class="flex group">
                    <div class="flex-row justify-around me-3 text-left">
                        <p class="text-right">Prev Post</p>
                        <a href="" class="font-medium group-hover:text-red-500">Space The Final Frontier</a>
                    </div>
                    <div class="group-hover:bg-gray-400">
                        <img class="group-hover:opacity-20" src="./assets/preview.jpg.webp" alt="" srcset="">
                    </div>
                </li>
            </ul>
            <div class="flex p-5 py-5 bg-slate-50 my-5">
                <div>
                    <img src="./assets/author.png.webp" alt="" srcset="">
                </div>
                <div class="flex flex-col justify-around ms-3">
                    <h1 class="font-medium">Harvard milan</h1>
                    <p class="text-sm">Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                </div>
            </div>
            <div class="border-y  p-5">
                <h1 class="text-lg font-medium">
                    05 Comments
                </h1>
                <div class="flex p-5 py-5 my-5" v-for="number in 3" :key="number">
                    <div>
                        <img src="./assets/comment_1.png.webp" alt="" srcset="">
                    </div>
                    <div class="flex flex-col justify-around ms-3  text-gray-500">
                        <p class="text-sm">Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                        <div class="flex justify-between">
                            <div>
                                <h1 class="font-medium inline-block text-gray-600">Emilly Blunt</h1>
                                <span class="text-sm inline-block ms-3">December 4, 2017 at 3:12 pm</span>
                            </div>
                            <div><a href="" class="uppercase">reply</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 px-0">
                <h1 class="text-lg font-medium">
                    Leave a Reply
                </h1>
                <form action="" class="py-9">
                    <textarea name="" placeholder="Write content" id="" cols="30" rows="10" class="w-full  focus:ring-red-400 focus:border-red-500 border-slate-300 text-sm"></textarea>
                    <div class="grid grid-cols-2 gap-4 mt-3">
                        <input type="text" class="border-slate-300 text-sm focus:ring-red-400 focus:border-red-500" placeholder="Name">
                        <input type="text" class="border-slate-300 text-sm py-3 focus:ring-red-400 focus:border-red-500" placeholder="Email">
                    </div>
                    <div class="grid grid-cols-1 gap-4 mt-3">
                        <input type="text" class="border-slate-300  focus:ring-red-400 focus:border-red-500" placeholder="Website">
                    </div>
                    <div class="mt-3">
                        <button class="border border-red-500 text-red-500 uppercase py-2 px-4 hover:bg-red-500 hover:text-white">Post comment</button>
                    </div>
                </form>
            </div>
        </div>
        <BlogLayout/>
    </div>
</template>