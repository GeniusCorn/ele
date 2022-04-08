<script lang="ts" setup>
import { ref } from 'vue';
import CountItem from './CountItem.vue';

import { Commodity } from '../../models/Commodity';
import CommodityDetail from './CommodityDetail.vue';

const props = defineProps<Commodity>();

const showDetail = ref(false);

const showCommodityDetail = () => {
    showDetail.value = !showDetail.value;
};
</script>

<template>
    <Teleport to="body">
        <CommodityDetail
            :name="props.name"
            :price="props.price"
            :show="showDetail"
            :title="props.title"
            @close="showDetail = false"
        >
        </CommodityDetail>
    </Teleport>

    <div class="relative grid grid-cols-3 border-b-4 px-1 py-2">
        <img
            :alt="props.name"
            :src="props.img"
            class="object-cover w-20 h-20 col-span-1"
            @click="showCommodityDetail"
        />
        <div class="col-span-2" @click="showCommodityDetail">
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
            <CountItem :price="props.price" :title="props.title"></CountItem>
        </div>
    </div>
</template>