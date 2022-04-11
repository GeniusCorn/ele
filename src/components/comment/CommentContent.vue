<script lang="ts" setup>
import { computed } from 'vue';
import { Icon } from '@vicons/utils';
import PeopleAltFilled from '@vicons/material/PeopleAltFilled';
import ThumbUpOffAltRound from '@vicons/material/ThumbUpOffAltRound';

import StarRating from '../common/StarRating.vue';

const props = defineProps<{
    avator: string;
    name: string;
    rating: number;
    comment: string;
    tag: string[];
    time: string;
}>();

const name = computed(() => {
    const firstChar = props.name.charAt(0);
    const lastChar = props.name.charAt(props.name.length - 1);
    let char = firstChar;
    if (props.name.length === 2) {
        char += '*';
    } else {
        for (let i = 0; i < props.name.length - 2; i += 1) {
            char += '*';
        }
    }

    char += lastChar;
    return char;
});
</script>

<template>
    <div class="flex flex-row">
        <Icon class="ml-8" color="rgb(96, 165, 250)" size="42">
            <PeopleAltFilled class="border-2 rounded-full"></PeopleAltFilled>
        </Icon>

        <div class="ml-4">
            <div class="grid grid-cols-2 w-fit">
                <div>
                    {{ name }}
                </div>
                <div>
                    {{ props.time }}
                </div>
            </div>
            <div class="flex flex-row items-center">
                <StarRating :score="props.rating"></StarRating>
                <div class="ml-2">
                    {{ props.rating }}
                </div>
            </div>
            <br />
            <div class="pr-12">{{ props.comment }}</div>
            <br />
            <div class="flex flex-row pr-8">
                <Icon color="rgb(96, 165, 250)" size="30">
                    <ThumbUpOffAltRound></ThumbUpOffAltRound>
                </Icon>

                <div class="flex flex-wrap pr-2">
                    <div v-for="item in props.tag" :key="item">
                        <div
                            class="border-2 p-1 mx-2 mb-1 text-sm truncate hover:text-clip"
                        >
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mx-8 my-4" />
</template>