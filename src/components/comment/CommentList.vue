<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import CommentContent from './CommentContent.vue';
import Comment, { commentList } from '../../models/Comment';

const props = defineProps<{
    title?: string;
}>();

const rawList = computed<Comment[]>(() => commentList);
const computedList = ref<Comment[]>([]);

if (props.title) {
    rawList.value.forEach((element) => {
        if (element.tag.includes(props.title as string)) {
            computedList.value.push(element);
        }
    });
} else {
    computedList.value = commentList;
}

const tempList = computedList;

const listLength = computed(() => tempList.value.length);

const satisfactionListLength = computed(() => {
    let count = 0;
    tempList.value.forEach((element) => {
        if (element.rating > 3.5) {
            count += 1;
        }
    });
    return count;
});

const spitListLength = computed(() => {
    let count = 0;
    tempList.value.forEach((element) => {
        if (element.rating < 3.5) {
            count += 1;
        }
    });
    return count;
});

const listType = reactive({
    all: true,
    satIsFaction: false,
    spit: false,
});

const showList = ref(computedList.value);
const toggleList = (type: string) => {
    if (type === 'all') {
        listType.all = true;
        listType.satIsFaction = false;
        listType.spit = false;
        showList.value = computedList.value;
    } else if (type === 'satIsFaction') {
        listType.all = false;
        listType.satIsFaction = true;
        listType.spit = false;
        showList.value = computedList.value.filter(
            (element) => element.rating > 3.5,
        );
    } else if (type === 'spit') {
        listType.all = false;
        listType.satIsFaction = false;
        listType.spit = true;
        showList.value = computedList.value.filter(
            (element) => element.rating < 3.5,
        );
    }
};

const isOnlyReadContent = ref<boolean>(false);
</script>

<template>
    <div class="bg-white">
        <div class="flex flex-row">
            <div
                :class="{ active: listType.all }"
                class="tag"
                @click="toggleList('all')"
            >
                全部 {{ listLength }}
            </div>
            <div
                :class="{ active: listType.satIsFaction }"
                class="tag"
                @click="toggleList('satIsFaction')"
            >
                满意 {{ satisfactionListLength }}
            </div>
            <div
                :class="{ active: listType.spit }"
                class="tag"
                @click="toggleList('spit')"
            >
                吐槽 {{ spitListLength }}
            </div>
        </div>

        <div class="mx-8 my-2 py-6 border-y">
            <label>
                <input
                    v-model="isOnlyReadContent"
                    class="h-6 w-6 rounded-full"
                    style="color: rgb(96, 165, 250)"
                    type="checkbox"
                />
                <span class="ml-2">只看有内容的评价</span>
            </label>
        </div>

        <div v-for="comment in showList" :key="comment.comment" class="min-h-0">
            <div v-if="isOnlyReadContent">
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
</template>

<style scoped>
.tag {
    @apply border my-2 mx-4 p-2;
}

.active {
    @apply bg-blue-400 text-white;
}
</style>