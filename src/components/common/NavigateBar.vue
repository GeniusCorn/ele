<script lang="ts" setup></script>

<template>
    <div class="grid grid-cols-3 justify-items-center my-2 h-fit">
        <router-link to="/">
            <div class="item">商品</div>
        </router-link>
        <router-link to="/comments">
            <div class="item">评论</div>
        </router-link>
        <router-link to="/merchant">
            <div class="item">商家</div>
        </router-link>
    </div>
</template>

<style scoped>
.item {
    @apply text-lg text-center;
}
</style>
