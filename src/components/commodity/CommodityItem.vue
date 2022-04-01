<script setup lang="ts">
import CountItem from './CountItem.vue';

import { Commodity } from '../../models/Commodity';

const props = defineProps<Commodity>();
</script>

<template>
    <div class="relative grid grid-cols-3 border-b-4 px-1 py-2">
        <img
            :src="props.img"
            :alt="props.name"
            class="object-cover w-20 h-20 col-span-1"
        />
        <div class="col-span-2">
            <div class="text-lg">
                {{ props.title }}
            </div>
            <span class="text-sm text-red-400">
                月售 {{ props.monthly_sale }}
            </span>
            <span class="text-sm text-red-400"> 好评 {{ props.praise }} </span>
            <div class="text-sm">￥{{ props.price }}</div>
        </div>
        <div class="absolute bottom-4 right-2">
            <CountItem :title="props.title" :price="props.price"></CountItem>
        </div>
    </div>
</template>
