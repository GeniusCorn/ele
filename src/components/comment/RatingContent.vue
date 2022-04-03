<script lang="ts" setup>
import { merchant } from '../../models/Merchant';
import StarRating from '../common/StarRating.vue';
</script>

<template>
    <div class="grid grid-cols-2 py-4 bg-white">
        <div class="flex flex-col items-center border-r-4">
            <div class="text-3xl text-red-400">
                {{ merchant.overallRating }}
            </div>
            <div>综合评分</div>
            <div>高于周边商家 88.8%</div>
        </div>
        <div class="pl-2">
            <div class="flex flex-row items-center">
                <span class="pr-2">服务态度</span>
                <span>
                    <StarRating :score="merchant.serviceAttitude"></StarRating>
                </span>
                <span class="pl-2">
                    {{ merchant.serviceAttitude }}
                </span>
            </div>

            <div class="flex flex-row items-center">
                <span class="pr-2">商品评分</span>
                <span>
                    <StarRating :score="merchant.productRating"></StarRating>
                </span>
                <span class="pl-2">
                    {{ merchant.productRating }}
                </span>
            </div>
            <div>送达时间 {{ merchant.diversityTime }} 分钟</div>
        </div>
    </div>
</template>