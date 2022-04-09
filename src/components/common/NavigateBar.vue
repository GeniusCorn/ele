<script lang="ts" setup>
import { computed, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = reactive({
    commodity: false,
    comment: false,
    merchant: false,
});
watch(route, () => {
    const url = computed(() => route.meta.url);
    if (url.value === '/') {
        isActive.commodity = true;
        isActive.comment = false;
        isActive.merchant = false;
    } else if (url.value === '/comments') {
        isActive.commodity = false;
        isActive.comment = true;
        isActive.merchant = false;
    } else {
        isActive.commodity = false;
        isActive.comment = false;
        isActive.merchant = true;
    }
});
</script>

<template>
    <div class="grid grid-cols-3 justify-items-center my-2 h-fit">
        <router-link to="/">
            <div :class="{ isActive: isActive.commodity }" class="item">
                商品
            </div>
        </router-link>
        <router-link to="/comments">
            <div :class="{ isActive: isActive.comment }" class="item">评论</div>
        </router-link>
        <router-link to="/merchant">
            <div :class="{ isActive: isActive.merchant }" class="item">
                商家
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.item {
    @apply text-lg text-center;
}

.isActive {
    @apply underline decoration-solid decoration-blue-400 underline-offset-4;
}
</style>