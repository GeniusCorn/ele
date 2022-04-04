<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';

import { useStore } from '../../store/index';

const props = defineProps<{
    title: string;
    price: number;
}>();

const store = useStore();

const isInvisible = ref<boolean>(true);
const count = computed<number>(
    () => store.getCommodityByTitle(props.title)?.count as number,
);

// * 刷新 count,根据 count 刷新按钮及数字可视化
const setIsInvisibleByCount = () => {
    if (count.value > 0) {
        isInvisible.value = false;
    } else {
        isInvisible.value = true;
    }
};

const addThisCount = () => {
    store.addCommodity(props.title, props.price);
    setIsInvisibleByCount();
};

const reduceThisCount = () => {
    store.removeCommodity(props.title);
    setIsInvisibleByCount();
};

// * 挂载时刷新 count，用于购物车列表
onMounted(() => {
    setIsInvisibleByCount();
});

// * count 状态发生变化时刷新
watch(count, () => {
    setIsInvisibleByCount();
});
</script>

<template>
    <div class="flex flex-row items-center">
        <span
            :class="{ invisible: isInvisible }"
            class="btn outline-blue-400 bg-blue-400"
            @click="reduceThisCount"
        >
            -
        </span>

        <span :class="{ invisible: isInvisible }" class="w-8 text-center">
            {{ count }}
        </span>

        <span class="btn outline-red-400 bg-red-400" @click="addThisCount">
            +
        </span>
    </div>
</template>

<style scoped>
.btn {
    @apply rounded-full outline outline-2 w-6 h-6 flex items-center justify-center;
}
</style>
