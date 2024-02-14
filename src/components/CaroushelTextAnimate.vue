<script setup lang="ts">

</script>
<template>
    <h1 class="text-2xl text-red-500">Fashion sale</h1>
</template>

<script lang="ts">
import { defineComponent, PropType,Component } from 'vue';

export default defineComponent({
    props: {
        dynamicComponent: {
        type: Object as PropType<Component>,
        required: true
        }
    }
});
</script>