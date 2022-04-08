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
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
html {
    overflow: hidden;
}
</style>