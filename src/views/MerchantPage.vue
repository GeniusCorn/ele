<script lang="ts" setup>
import BScroll from '@better-scroll/core';
import { onMounted, ref } from 'vue';
import RatingContent from '../components/merchant/RatingContent.vue';
import AnnouncemetContent from '../components/merchant/AnnouncemetContent.vue';
import ActualView from '../components/merchant/ActualView.vue';
import MerchantInformation from '../components/merchant/MerchantInformation.vue';

const viewRef = ref();
onMounted(() => {
    BScroll(viewRef.value, {
        probeType: 1,
        click: true,
    });
});
</script>

<template>
    <div ref="viewRef" class="h-screen overflow-hidden bg-slate-200">
        <!--包裹 scroll 的容器-->
        <div class="pb-96">
            <RatingContent></RatingContent>
            <br />
            <AnnouncemetContent></AnnouncemetContent>
            <br />
            <ActualView></ActualView>
            <br />
            <MerchantInformation></MerchantInformation>
        </div>
    </div>
</template>

<style scoped>
.height {
    min-height: 1px;
}
</style>