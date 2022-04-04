<script setup lang="ts">
import { useStore } from '../../store/index';
import CountItem from './CountItem.vue';

const props = defineProps<{
    show: boolean;
}>();

defineEmits(['close']);

const store = useStore();
</script>

<template>
    <div v-show="props.show" class="absolute bottom-14">
        <div class="flex flex-col-reverse w-screen h-screen bg-white/75">
            <div
                v-for="(item, index) in store.list"
                :key="index"
                class="relative bg-white"
            >
                <div class="grid grid-cols-12 text-xl border-b-4 w-sceen p-4">
                    <div class="col-span-7">
                        {{ item.title }}
                    </div>
                    <div class="justify-self-center col-span-3 pr-4">
                        ￥{{ item.price * item.count }}
                    </div>
                    <CountItem
                        :title="item.title"
                        :price="item.price"
                        class="justify-self-end col-span-2"
                    ></CountItem>
                </div>
            </div>

            <div class="relative text-lg bg-slate-200 h-12 opacity-100">
                <span class="absolute top-1/2 -translate-y-2/4 px-4"
                    >购物车</span
                >
                <span
                    class="absolute top-1/2 -translate-y-2/4 right-0 px-4 text-blue-400"
                    @click="store.emptyList"
                    >清空</span
                >
            </div>
        </div>
    </div>
</template>
