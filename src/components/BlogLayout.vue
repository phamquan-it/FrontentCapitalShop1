<script setup lang="ts">
const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    ]
</script>
<template>
    <div class="col-span-1">
            <div class="bg-slate-50 p-6">
                <input type="text" name="search" id="" class="border-gray-300 w-3/4">
                <input type="submit" value="search" class="bg-red-500 h-full w-1/4 text-slate-50 py-2">
            </div>
            <div class="bg-slate-50 p-6 mt-5">
                <h1 class="text-2xl font-medium border-b pb-2 mb-3">Category</h1>
                <ul>
                    <li class="py-3  border-b" v-for="number in 6" :key="number">
                        <a class="hover:text-red-600 text-sm text-gray-700" href="">Resaurant food(37)</a>
                    </li>
                </ul>
            </div>
            <div class="bg-slate-50 p-6 mt-5">
                <h1 class="text-2xl font-medium border-b pb-2 mb-3">Recent Post</h1>
                <ul class="divide-y divide-gray-200">
                    <li v-for="person in people" :key="person.email" class="py-4 flex">
                    <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
                        <p class="text-sm text-gray-500">{{ person.email }}</p>
                    </div>
                    </li>
                </ul>
            </div>
            <div class="bg-slate-50 p-6 mt-5">
                <h1 class="text-2xl font-medium border-b pb-2 mb-3">Tag Clouds</h1>
                <div class="flex flex-wrap">
                    <button class="bg-white border p-1 px-2 ms-2 mt-2" v-for="number in 11" :key="number">Project</button>
                </div>
            </div>
            <div class="bg-slate-50 p-6 mt-5">
                <h1 class="text-2xl font-medium border-b pb-2 mb-3">Instagram Feeds</h1>
                <div class="grid grid-cols-3 gap-3">
                    <img src="../assets/post_5.jpg.webp" alt="" srcset="" v-for="number in 6" :key="number">
                </div>
            </div>
            <div class="bg-slate-50 p-6 mt-5">
                <h1 class="text-2xl font-medium border-b pb-2 mb-3">Newsletter</h1>
                <div class="grid grid-cols-1 gap-3">
                    <input type="text" name="" class="border-gray-300 my-2 py-3" id="">
                    <button class="py-3 border bg-white uppercase border-red-500 text-sm text-red-500 hover:bg-red-500 hover:text-white">subcribe</button>
                </div>
            </div>
        </div>
</template>