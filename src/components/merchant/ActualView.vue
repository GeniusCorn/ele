<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import BScroll from '@better-scroll/core';
import img1 from '../../assets/images/merchant/andrea-de-santis-hEyVmHdl01s-unsplash.jpg';
import img2 from '../../assets/images/merchant/max-zhang-doAVI2HgQe4-unsplash.jpg';
import img3 from '../../assets/images/merchant/max-zhang-qIF0v5cCB9I-unsplash.jpg';
import img4 from '../../assets/images/merchant/the-blowup-hiK8FD142XU-unsplash.jpg';

const imgList = reactive([img1, img2, img3, img4]);

const listRef = ref();

onMounted(() => {
    BScroll(listRef.value, {
        scrollX: true,
        probeType: 3,
    });
});
</script>

<template>
    <div class="p-6 bg-white">
        <div>商家实景</div>
        <div ref="listRef" class="overflow-hidden w-screen py-2">
            <ul class="inline-block whitespace-nowrap">
                <li
                    v-for="img in imgList"
                    :key="img"
                    class="inline-block w-44 h-24 mr-2"
                >
                    <img :alt="img" :src="img" class="object-cover" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>