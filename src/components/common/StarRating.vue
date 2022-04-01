<script setup lang="ts">
import StarRound from '@vicons/material/StarRound';
import StarHalfRound from '@vicons/material/StarHalfRound';

const props = defineProps<{
    score: number;
}>();

const total = Math.trunc(props.score);
const half = props.score - total;
</script>

<template>
    <div class="flex flex-row">
        <div v-for="n in total" :key="n">
            <StarRound class="h-4"></StarRound>
        </div>
        <StarHalfRound v-if="half >= 0.5" class="h-4"></StarHalfRound>
    </div>
</template>

<style scoped></style>
