<script lang="ts" setup>
import StarRound from '@vicons/material/StarRound';
import StarHalfRound from '@vicons/material/StarHalfRound';
import StarBorderRound from '@vicons/material/StarBorderRound';

const props = defineProps<{
    score: number;
}>();

const totalStars = Math.trunc(props.score);
const halfStar = props.score - totalStars;
let borderStars;
if (halfStar >= 0.5) {
    borderStars = Math.trunc(5 - props.score);
} else {
    borderStars = Math.ceil(5 - props.score);
}
</script>

<template>
    <div class="flex flex-row">
        <div v-for="n in totalStars" :key="n">
            <StarRound class="h-4"></StarRound>
        </div>
        <StarHalfRound v-if="halfStar >= 0.5" class="h-4"></StarHalfRound>
        <div v-for="n in borderStars" :key="n">
            <StarBorderRound class="h-4"></StarBorderRound>
        </div>
    </div>
</template>

<style scoped></style>