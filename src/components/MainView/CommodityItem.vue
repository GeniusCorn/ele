<script setup lang="ts">
import CountItem from './CountItem.vue';

import { commodity } from '../../models/commodity';

const props = defineProps<commodity>();
</script>

<template>
    <div class="flex flex-row border-b-2 px-1 py-4">
        <img
            :src="props.img"
            :alt="props.name"
            class="object-cover w-20 h-20"
        />
        <div class="px-2">
            <div class="text-lg">
                {{ props.name }}
            </div>
            <span class="text-sm text-red-400">
                月售 {{ props.monthly_sale }}
            </span>
            <span class="text-sm text-red-400"> 好评 {{ props.praise }} </span>
            <div class="text-sm">￥{{ props.price }}</div>
        </div>
        <div class="flex flex-col-reverse">
            <CountItem></CountItem>
        </div>
    </div>
</template>
