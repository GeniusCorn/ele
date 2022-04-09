<script lang="ts" setup>
import MerchantHeader from './components/common/MerchantHeader.vue';
import NavigateBar from './components/common/NavigateBar.vue';
</script>

<template>
    <div class="mx-auto h-screen">
        <div class="h-fit">
            <MerchantHeader></MerchantHeader>
            <NavigateBar></NavigateBar>
        </div>
        <div class="h-screen">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <Component :is="Component"></Component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style>
html {
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>