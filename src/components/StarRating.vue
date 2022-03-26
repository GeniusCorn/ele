<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    score: number;
}>();
</script>

<template>
    <span v-for="n in props.score" :key="n" class="mx-2">★</span>
</template>

<style scoped></style>
