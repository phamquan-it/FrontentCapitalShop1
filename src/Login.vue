<script setup lang="ts">

</script>
<template>
    <form class="border md:w-5/6 lg:w-3/6 m-auto shadow-lg mt-3 p-10">
        <div class="space-y-6">
            <h1 class="text-center text-2xl font-semibold">Login</h1>
            <p class="text-center">Enter Login details to get access</p>
            <div class="">
                <label for="username" class="block text-base font-medium leading-6 text-gray-900">Username</label>
                <div class="mt-1">
                <div class="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 w-full">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Username / Email address">
                </div>
                </div>
            </div>
            <div class="">
                <label for="password" class="block text-base font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-1">
                    <div class="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 w-full">
                        <input type="password" name="password" id="password" autocomplete="password" class="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter Password">
                    </div>
                </div>
            </div>
            <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3 justify-between items-center">
                    <div class="flex h-6 items-center">
                        <input id="username" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-transparent">
                        <label for="comments" class="text-base font-medium leading-6 text-gray-900 ms-3">Keep Me Logged In</label>
                    </div>
                    <span class="text-sm text-red-500 font-medium">Forgot Password</span>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-between gap-x-6">
            <span class="text-sm font-normal">Don’t have an account? <a href="" class="text-red-500">Sign Up</a> here</span>
            <button type="submit" class=" bg-red-500 px-8 py-4 text-sm font-semibold text-white shadow-sm">Login</button>
        </div>
    </form>
</template>