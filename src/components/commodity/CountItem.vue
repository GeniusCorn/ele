<script lang="ts" setup>
import { computed, ref } from 'vue';

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

const addThisCount = () => {
    store.addCommodity(props.title, props.price);
};

const reduceThisCount = () => {
    store.removeCommodity(props.title);
};
</script>

<template>
    <div class="flex flex-row items-center">
        <Transition name="slide-up">
            <div
                v-if="count > 0"
                class="btn outline-blue-400 bg-blue-400"
                @click="reduceThisCount"
            >
                -
            </div>
        </Transition>

        <Transition name="slide-up">
            <div v-if="count > 0" class="w-8 text-center">{{ count }}</div>
        </Transition>

        <span class="btn outline-red-400 bg-red-400" @click="addThisCount">
            +
        </span>
    </div>
</template>

<style scoped>
.btn {
    @apply rounded-full outline outline-2 w-6 h-6 flex items-center justify-center;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>