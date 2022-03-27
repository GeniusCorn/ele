<script setup lang="ts">
import { shop } from '../../models/shop';
import StarRating from '../utils/StarRating.vue';

const props = defineProps<{
    show: boolean;
}>();

defineEmits(['close']);
</script>

<template>
    <div v-if="props.show" class="detailsContainer" @click="$emit('close')">
        <span class="">{{ shop.name }}</span>
        <span>
            <StarRating :score="shop.score"></StarRating>
        </span>
        <br />
        <span>优惠信息</span>
        <div>
            <div>
                <span class="redBadge">减</span>
                <span>在线支付满 35 减 8</span>
            </div>
            <div>
                <span class="redBadge">折</span>
                <span>VC 无限橙果汁全场 8 折</span>
            </div>
            <div>
                <span class="redBadge">特</span>
                <span>单人精彩套餐</span>
            </div>
            <div>
                <span class="redBadge">票</span>
                <span>该商家已支持发票，请下单写好发票抬头</span>
            </div>
            <div>
                <span class="redBadge">保</span>
                <span>已加入“外卖假”计划，食品安全保障</span>
            </div>
        </div>
        <br />
        <div>商家公告</div>
        <span>{{ shop.description }}</span>
    </div>
</template>

<style scoped>
.detailsContainer {
    @apply grid grid-cols-1 justify-items-center bg-slate-400 text-white p-4 opacity-90 absolute inset-0;
}
.redBadge {
    @apply bg-red-400 rounded-md font-semibold mr-1 px-2 whitespace-nowrap;
}
</style>
