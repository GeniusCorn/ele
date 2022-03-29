<script setup lang="ts">
import { ShoppingBagOutlined } from '@vicons/material';
</script>

<template>
    <div
        class="grid grid-cols-6 fixed inset-x-0 bottom-0 text-white bg-blue-400 h-14"
    >
        <div class="col-span-1 mt-2">
            <ShoppingBagOutlined
                class="h-14 absolute bottom-6 left-4 bg-blue-400 rounded-full"
            ></ShoppingBagOutlined>
            <div
                class="absolute bg-red-400 rounded-full w-6 text-center left-12 bottom-14"
            >
                0
            </div>
        </div>
        <div class="col-span-1 relative text-center">
            <div
                class="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 font-semibold"
            >
                ￥0
            </div>
        </div>
        <div class="col-span-2 relative">
            <div class="absolute top-1/2 -translate-y-2/4 font-semibold">
                另需配送费 ￥4 元
            </div>
        </div>

        <button class="col-span-2 bg-red-400 max-h-max font-semibold">
            ￥28 起送
        </button>
    </div>
</template>
