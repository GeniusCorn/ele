<script setup lang="ts">
import MerchantHeader from './components/common/MerchantHeader.vue';
import NavigateBar from './components/common/NavigateBar.vue';
</script>

<template>
    <div class="container mx-auto">
        <MerchantHeader></MerchantHeader>
        <NavigateBar></NavigateBar>
        <router-view></router-view>
    </div>
</template>

<style>
html {
    overflow: hidden;
}
</style>
