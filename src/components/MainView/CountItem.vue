<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref<number>(0);

const addCount = () => {
    count.value += 1;
};

const reduceCount = () => {
    count.value -= 1;
};

const isInvisible = ref(true);
watch(count, () => {
    if (count.value > 0) {
        isInvisible.value = false;
    } else {
        isInvisible.value = true;
    }
});
</script>

<template>
    <div class="flex flex-row items-center">
        <span
            :class="{ invisible: isInvisible }"
            class="btn outline-blue-400 bg-blue-400"
            @click="reduceCount"
        >
            -
        </span>

        <span :class="{ invisible: isInvisible }" class="w-8 text-center">
            {{ count }}
        </span>

        <span class="btn outline-red-400 bg-red-400" @click="addCount">
            +
        </span>
    </div>
</template>

<style scoped>
.btn {
    @apply rounded-full outline outline-2 w-4 h-4 flex items-center justify-center;
}
</style>
