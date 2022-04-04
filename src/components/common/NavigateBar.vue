<script setup lang="ts"></script>

<template>
    <div class="grid grid-cols-3 justify-items-center my-2">
        <router-link to="/">
            <span class="item">商品</span>
        </router-link>
        <router-link to="/comments">
            <span class="item">评论</span>
        </router-link>
        <router-link to="/merchant"><span class="item">商家</span></router-link>
    </div>
</template>

<style scoped>
.item {
    @apply text-xl;
}
</style>
