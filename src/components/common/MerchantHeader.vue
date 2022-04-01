<script setup lang="ts">
import { ref } from 'vue';
import { merchant } from '../../models/Merchant';

import AnnouncementDetails from './AnnouncementDetails.vue';

const showDetails = ref(false);
</script>

<template>
    <Teleport to="body">
        <AnnouncementDetails :show="showDetails" @close="showDetails = false">
        </AnnouncementDetails>
    </Teleport>

    <div class="grid grid-cols-5 bg-blue-400 text-white px-4 py-4">
        <div class="col-span-1">
            <img
                class="aspect-square object-cover"
                :src="merchant.logoUrl"
                :alt="merchant.logoUrl"
            />
        </div>

        <div class="col-span-3 px-4">
            <span class="redBadge"> 品牌 </span>
            <span class="text-lg">{{ merchant.name }}</span>

            <div class="mt-2">
                <div class="text-xs">
                    <span>{{ merchant.shipper }}</span
                    >/
                    <span>{{ merchant.diversityTime }} 分钟送达</span>
                </div>
                <div class="text-xs">
                    <span class="redBadge"> 满 </span>
                    <span>在线支付满 35 减 8</span>
                </div>
            </div>
        </div>

        <div class="relative col-span-1">
            <span
                class="absolute bottom-4 text-xs redBadge"
                @click="showDetails = !showDetails"
            >
                5 个
                <i class="arrow right"></i>
            </span>
        </div>
    </div>
    <div
        class="flex flex-row bg-blue-300 text-white p-1"
        @click="showDetails = !showDetails"
    >
        <span class="redBadge"> 公告 </span>
        <div class="truncate px-2">{{ merchant.description }}</div>
        <div>
            <i class="arrow right"></i>
        </div>
    </div>
</template>

<style scoped>
.redBadge {
    @apply bg-red-400 rounded-md font-semibold whitespace-nowrap mr-1 px-2;
}
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
