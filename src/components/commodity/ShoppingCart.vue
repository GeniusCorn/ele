<script setup lang="ts">
import { ShoppingBagOutlined } from '@vicons/material';
import { computed, ref, watch } from 'vue';
import ShoppingList from './ShoppingList.vue';
import PaymentPanel from './PaymentPanel.vue';
import { useStore } from '../../store/index';
import { merchant } from '../../models/Merchant';

const store = useStore();

const showList = ref(false);
const showPayment = ref(false);

const totalCount = computed<number>(() => store.getTotalCount);
const totalPrice = computed<number>(() => store.getTotalPrice);

const togglePayment = () => {
    showPayment.value = !showPayment.value;
};

// * 切换购物车列表显示状态
const toggleList = () => {
    if (totalCount.value > 0) {
        showList.value = !showList.value;
    }
};

// * 当商品总数为 0 时自动关闭购物车列表
watch(totalCount, () => {
    if (totalCount.value < 1) {
        showList.value = false;
    }
});
</script>

<template>
    <Teleport to="body">
        <ShoppingList :show="showList" @close="showList = false">
        </ShoppingList>
    </Teleport>

    <Teleport to="body">
        <PaymentPanel :show="showPayment" @close="showPayment = false">
        </PaymentPanel>
    </Teleport>

    <div
        class="grid grid-cols-6 fixed inset-x-0 bottom-0 text-white bg-blue-400 h-14 z-10"
    >
        <div class="col-span-1 mt-2" @click="toggleList">
            <ShoppingBagOutlined
                class="h-14 absolute bottom-6 left-4 bg-blue-400 rounded-full"
            ></ShoppingBagOutlined>
            <div
                v-show="store.getTotalCount > 0"
                class="absolute bg-red-400 rounded-full w-6 text-center left-12 bottom-14"
            >
                {{ totalCount }}
            </div>
        </div>
        <div class="col-span-1 relative text-center" @click="toggleList">
            <div
                class="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 font-semibold"
            >
                ￥{{ totalPrice }}
            </div>
        </div>
        <div class="col-span-2 relative" @click="toggleList">
            <div class="absolute top-1/2 -translate-y-2/4 font-semibold">
                另需配送费 ￥{{ merchant.deliveryFee }}
            </div>
        </div>

        <button
            v-if="totalPrice < merchant.startingDeliveryPrice"
            class="col-span-2 bg-red-400 max-h-max font-semibold"
        >
            ￥{{ merchant.startingDeliveryPrice }} 起送
        </button>
        <button
            v-else
            class="col-span-2 bg-red-400 max-h-max font-semibold"
            @click="togglePayment"
        >
            去结算
        </button>
    </div>
</template>
