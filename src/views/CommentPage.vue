<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BScroll from '@better-scroll/core';
import ObserveDOM from '@better-scroll/observe-dom';
import RatingContent from '../components/comment/RatingContent.vue';
import CommentList from '../components/comment/CommentList.vue';

BScroll.use(ObserveDOM);
const viewRef = ref();
onMounted(() => {
    BScroll(viewRef.value, {
        probeType: 1,
        click: true,
        observeDOM: true,
    });
    console.log(viewRef.value);
});
</script>
<template>
    <div ref="viewRef" class="bg-slate-200 overflow-hidden h-4/5">
        <div>
            <RatingContent></RatingContent>
            <br />
            <CommentList></CommentList>
        </div>
    </div>
</template>