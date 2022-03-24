<script setup lang="ts">
import { shop } from '../models/shop';
</script>

<template>
    <div class="flex flex-row bg-blue-400 text-white px-4 py-4">
        <img class="aspect-square object-cover w-24 h-24" :src="shop.logoUrl" />

        <div class="px-4">
            <span
                class="border-red-400 border-2 bg-red-400 rounded-md font-semibold"
            >
                品牌
            </span>
            <span class="px-2">{{ shop.name }}</span>

            <div class="flex flex-col mt-6">
                <div class="text-xs">
                    <span>{{ shop.shipper }}</span
                    >/
                    <span>{{ shop.diversityTime }} 分钟送达</span>
                </div>
                <div class="text-xs">
                    <span
                        class="border-red-400 bg-red-400 rounded-md font-semibold"
                    >
                        满
                    </span>
                    <span>在线支付满 35 减 8</span>
                </div>
            </div>
        </div>

        <div class="relative">
            <span
                class="absolute bottom-4 text-xs border-red-400 bg-red-400 rounded-md font-semibold px-2 whitespace-nowrap"
            >
                5 个
                <i class="arrow right"></i>
            </span>
        </div>
    </div>
    <div class="flex flex-row bg-blue-300 text-white p-1">
        <span
            class="border-red-400 bg-red-400 rounded-md font-semibold whitespace-nowrap"
        >
            公告
        </span>
        <div class="truncate px-2">{{ shop.descripton }}</div>
        <div>
            <i class="arrow right"></i>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}

.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}
</style>
