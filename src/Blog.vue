<script setup lang="ts">
import BlogLayout from './components/BlogLayout.vue';
import HeaderTilte from './components/HeaderTilte.vue';
import ListBlog from './components/ListBlog.vue';
</script>
<template>
    <HeaderTilte/>
    <div class="md:grid grid-cols-3 w-11/12 mx-auto gap-4 py-8">
        <ListBlog/>
        <BlogLayout/>
    </div>
</template>