<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import BScroll from '@better-scroll/core';
import { commentList } from '../../models/Comment';
import CommentContent from './CommentContent.vue';

// 滚动列表
const listRef = ref();
onMounted(() => {
    BScroll(listRef.value, {
        probeType: 3,
    });
});

const listLength = computed(() => commentList.length);

const satisfactionListLength = computed(() => {
    let count = 0;
    commentList.forEach((element) => {
        if (element.rating > 3.5) {
            count += 1;
        }
    });
    return count;
});

const spitListLength = computed(() => {
    let count = 0;
    commentList.forEach((element) => {
        if (element.rating < 3.5) {
            count += 1;
        }
    });
    return count;
});

const list = ref(commentList);

const isCommentList = ref(true);
const isSatisFactionList = ref(false);
const isSpitList = ref(false);
const isOnlyReadComments = ref<boolean>(false);

const changeToCommentList = () => {
    isCommentList.value = true;
    isSatisFactionList.value = false;
    isSpitList.value = false;

    list.value = commentList;
};

const changToSatisFactionList = () => {
    isCommentList.value = false;
    isSatisFactionList.value = true;
    isSpitList.value = false;

    list.value = commentList.filter((element) => element.rating > 3.5);
};

const changeToSpitList = () => {
    isCommentList.value = false;
    isSatisFactionList.value = false;
    isSpitList.value = true;

    list.value = commentList.filter((element) => element.rating < 3.5);
};
</script>

<template>
    <div class="bg-white">
        <div class="flex flex-row bg-white">
            <div
                :class="{ active: isCommentList }"
                class="tag"
                @click="changeToCommentList"
            >
                全部 {{ listLength }}
            </div>
            <div
                :class="{ active: isSatisFactionList }"
                class="tag"
                @click="changToSatisFactionList"
            >
                满意 {{ satisfactionListLength }}
            </div>
            <div
                :class="{ active: isSpitList }"
                class="tag"
                @click="changeToSpitList"
            >
                吐槽 {{ spitListLength }}
            </div>
        </div>

        <div class="mx-8 my-2 py-6 border-y">
            <label>
                <input
                    v-model="isOnlyReadComments"
                    class="h-6 w-6 rounded-full"
                    style="color: rgb(96, 165, 250)"
                    type="checkbox"
                />
                <span class="ml-2">只看有内容的评价</span>
            </label>
        </div>

        <div ref="listRef" class="overflow-hidden h-screen">
            <!-- 该 div 为包裹 scroll 的容器 -->
            <div class="pt-4 pb-96">
                <div class="pb-32">
                    <div v-for="(comment, index) in list" :key="index">
                        <div v-if="isOnlyReadComments">
                            <div v-if="comment.comment.length !== 0">
                                <CommentContent
                                    :avator="comment.userAvatar"
                                    :comment="comment.comment"
                                    :name="comment.userName"
                                    :rating="comment.rating"
                                    :tag="comment.tag"
                                    :time="comment.time"
                                ></CommentContent>
                            </div>
                        </div>
                        <div v-else>
                            <CommentContent
                                :avator="comment.userAvatar"
                                :comment="comment.comment"
                                :name="comment.userName"
                                :rating="comment.rating"
                                :tag="comment.tag"
                                :time="comment.time"
                            ></CommentContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tag {
    @apply border my-2 mx-4 p-2;
}

.active {
    @apply bg-blue-400 text-white;
}
</style>
