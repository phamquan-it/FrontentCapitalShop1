<script setup lang="ts">

</script>
<template>
    <form class="border md:w-5/6 lg:w-3/6 m-auto shadow-lg mt-3 p-10">
        <div class="space-y-6">
            <h1 class="text-center text-2xl font-semibold">Register</h1>
            <p class="text-center">Create your account to get full access</p>
            <div class="">
                <label for="fullname" class="block text-base font-medium leading-6 text-gray-900">Full Name</label>
                <div class="mt-1">
                <div class="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 w-full">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter full name">
                </div>
                </div>
            </div>
            <div class="">
                <label for="Email" class="block text-base font-medium leading-6 text-gray-900">Email Address</label>
                <div class="mt-1">
                <div class="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 w-full">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter email address">
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
            <div class="">
                <label for="password" class="block text-base font-medium leading-6 text-gray-900">Confirm password</label>
                <div class="mt-1">
                    <div class="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500 w-full">
                        <input type="password" name="password" id="password" autocomplete="password" class="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Confirm Password">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-between gap-x-6">
            <span class="text-sm font-normal">Already have an account? <a href="" class="text-red-500">Login</a> here</span>
            <button type="submit" class=" bg-red-500 px-8 py-4 text-sm font-semibold text-white shadow-sm">Register</button>
        </div>
    </form>
</template>