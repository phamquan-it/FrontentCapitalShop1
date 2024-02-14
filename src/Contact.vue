<script setup  lang="ts">
import HeaderTilte from './components/HeaderTilte.vue';
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
    <HeaderTilte/>
    <div class="container md:w-11/12 m-auto my-10">
        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7449.327055193636!2d105.8253386!3d21.006120600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2sru!4v1701901887155!5m2!1svi!2sru" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="mt-10">
            <h1 class="text-2xl font-semibold">Get in touch</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-x-10">
                <div class="col-span-2">
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="3" class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter message"></textarea>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="mt-4 border">
                            <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                        </div>
                        <div class="mt-4 border">
                            <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                        </div>
                    </div>
                    <div class="mt-4 border">
                        <input type="text" name="username" id="username" autocomplete="username" class="block  p-5 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                    </div>
                    <button class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-sm p-3 px-5 mt-4">Send</button>
                </div>
                <div>
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
            </div>
        </div>
    </div>
</template>