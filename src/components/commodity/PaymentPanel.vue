<script setup lang="ts">
import { computed } from 'vue';
import { merchant } from '../../models/Merchant';
import { useStore } from '../../store/index';

const props = defineProps<{
    show: boolean;
}>();

defineEmits(['close']);

const store = useStore();

const totalPrice = computed<number>(
    () => store.getTotalPrice + merchant.deliveryFee,
);
</script>

<template>
    <div
        v-if="props.show"
        class="absolute inset-0 bg-black/75 z-50 flex items-center justify-center"
    >
        <div class="bg-white w-1/2 rounded-lg">
            <div class="col-span-1 text-center text-xl py-8">
                需要支付 {{ totalPrice }} 元
            </div>
            <div class="grid grid-cols-2">
                <button class="btn rounded-bl-lg" @click="$emit('close')">
                    取消
                </button>
                <button
                    class="btn text-red-600 rounded-br-lg"
                    @click="$emit('close')"
                >
                    确定
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    @apply text-base p-4 border-gray-500 border;
}
</style>
