<script lang="ts" setup>
import StarsRound from '@vicons/material/StarsRound';
import { computed } from 'vue';
import StarRating from '../common/StarRating.vue';
import { merchant } from '../../models/Merchant';
import { commentList } from '../../models/Comment';
import { useStore } from '../../store/index';

const store = useStore();
const isCollect = computed(() => store.collect);
const collectMerchant = () => {
    store.toggleCollect();
};
</script>

<template>
    <div class="p-6 flex justify-between bg-white">
        <div>
            <div class="text-xl">
                {{ merchant.name }}
            </div>
            <div class="flex flex-row items-center">
                <StarRating :score="merchant.overallRating"></StarRating>
                <div class="mx-2">({{ commentList.length }})</div>
                <div>
                    月售
                    {{ merchant.monthlySales }}
                    单
                </div>
            </div>
        </div>
        <div class="text-center" @click="collectMerchant">
            <StarsRound :class="{ isCollect: isCollect }"></StarsRound>
            <span :class="{ isCollect: isCollect }"> 收藏 </span>
        </div>
    </div>

    <div class="px-6 bg-white">
        <div class="border-t-2 py-4 grid grid-cols-3 text-center">
            <div class="border-r-2">
                起送价
                <div class="text-2xl">
                    {{ merchant.startingDeliveryPrice }}
                    <span class="text-base">元</span>
                </div>
            </div>
            <div class="border-r-2">
                商家配送
                <div class="text-2xl">
                    {{ merchant.deliveryFee }}
                    <span class="text-base">元</span>
                </div>
            </div>
            <div>
                平均配送时间
                <div class="text-2xl">
                    {{ merchant.diversityTime }}
                    <span class="text-base">分钟</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.isCollect {
    @apply text-orange-300;
}
</style>