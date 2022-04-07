<script lang="ts" setup>
import { merchant } from '../../models/Merchant';
</script>

<template>
    <div class="p-6 bg-white">
        <div>公告与活动</div>
        <div class="p-2 text-red-500">
            {{ merchant.description }}
        </div>
        <br />
        <div class="tag">
            <span class="redBadge">减</span>
            <span>在线支付满 35 减 8</span>
        </div>
        <div class="tag">
            <span class="redBadge">折</span>
            <span>VC 无限橙果汁全场 8 折</span>
        </div>
        <div class="tag">
            <span class="redBadge">特</span>
            <span>单人精彩套餐</span>
        </div>
        <div class="tag">
            <span class="redBadge">票</span>
            <span>该商家已支持发票，请下单写好发票抬头</span>
        </div>
        <div class="tag">
            <span class="redBadge">保</span>
            <span>已加入“外卖假”计划，食品安全保障</span>
        </div>
    </div>
</template>

<style scoped>
.redBadge {
    @apply bg-red-400 rounded-md font-semibold mr-1 px-2 whitespace-nowrap text-white;
}

.tag {
    @apply border-b-2 mb-4;
}
</style>