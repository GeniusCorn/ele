<script lang="ts" setup>
import { computed, ref } from 'vue';
import Comment, { commentList } from '../../models/Comment';
import CommentContent from './CommentContent.vue';

const props = defineProps<{
    title?: string;
}>();

const computedList = ref<Comment[]>([]);
const tempList = ref<Comment[]>([]);
if (props.title) {
    commentList.forEach((element) => {
        if (element.tag.includes(props.title as string)) {
            tempList.value.push(element);
        }
    });
    computedList.value = tempList.value;
} else {
    computedList.value = commentList;
}

const listLength = computed(() => computedList.value.length);

const satisfactionListLength = computed(() => {
    let count = 0;
    computedList.value.forEach((element) => {
        if (element.rating > 3.5) {
            count += 1;
        }
    });
    return count;
});

const spitListLength = computed(() => {
    let count = 0;
    computedList.value.forEach((element) => {
        if (element.rating < 3.5) {
            count += 1;
        }
    });
    return count;
});

const list = ref(computedList.value);

const isCommentList = ref(true);
const isSatisFactionList = ref(false);
const isSpitList = ref(false);
const isOnlyReadComments = ref<boolean>(false);

const changeToCommentList = () => {
    isCommentList.value = true;
    isSatisFactionList.value = false;
    isSpitList.value = false;

    list.value = computedList.value;
};

const changToSatisFactionList = () => {
    isCommentList.value = false;
    isSatisFactionList.value = true;
    isSpitList.value = false;

    list.value = computedList.value.filter((element) => element.rating > 3.5);
};

const changeToSpitList = () => {
    isCommentList.value = false;
    isSatisFactionList.value = false;
    isSpitList.value = true;

    list.value = computedList.value.filter((element) => element.rating < 3.5);
};
</script>

<template>
    <div class="bg-white">
        <div class="flex flex-row">
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

        <div v-for="(comment, index) in list" :key="index" class="min-h-0">
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
        <!--        <CommentContent-->
        <!--            v-for="(comment, index) in list"-->
        <!--            :key="index"-->
        <!--            :avator="comment.userAvatar"-->
        <!--            :comment="comment.comment"-->
        <!--            :name="comment.userName"-->
        <!--            :rating="comment.rating"-->
        <!--            :tag="comment.tag"-->
        <!--            :time="comment.time"-->
        <!--        ></CommentContent>-->
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