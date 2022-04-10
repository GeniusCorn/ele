<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import BScroll from '@better-scroll/core';
// import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import CommodityItem from './CommodityItem.vue';

import { commodityItemList } from '../../models/Commodity';
import TagList from '../../models/TagList';

// 左右两侧滑动
const tagRef = ref();
const commodityRef = ref();

let scrollTag: any;
let scrollCommodity: any;
onMounted(() => {
    // TODO: 由于样本数据不足，尚未进行测试
    scrollTag = new BScroll(tagRef.value, {
        probeType: 3,
        click: true,
    });

    scrollCommodity = new BScroll(commodityRef.value, {
        probeType: 3,
        click: true,
    });
});

onBeforeUnmount(() => {
    scrollTag.destroy();
    scrollCommodity.destroy();
});

// * 点击左侧菜单，右侧菜单跳转对应标签
const tagListRefs = ref<any>([]);
const commodityListRefs = ref<any>([]);

const scrollTo = (event: Event) => {
    // * 手动刷新 scroll，解决路由切换后该功能失效
    scrollTag.refresh();
    scrollCommodity.refresh();

    const eventTargetHTML = (event.target as HTMLLIElement).innerHTML;

    commodityListRefs.value.forEach((element: HTMLElement) => {
        if (eventTargetHTML === element.innerHTML) {
            scrollCommodity.scrollToElement(element, 500, 0, -22);
        }
    });
};

// TODO: 右侧菜单吸顶
</script>

<template>
    <div class="grid grid-cols-4 bg-gray-100 h-screen">
        <ul ref="tagRef" class="col-span-1 text-xl">
            <!-- 该空 div 为包裹 scroll 的容器 -->
            <div>
                <li
                    v-for="(item, index) in TagList"
                    :key="index"
                    :ref="
                        (el: any) => {
                            tagListRefs.push(el);
                        }
                    "
                    @click="scrollTo"
                >
                    {{ item }}
                </li>
            </div>
        </ul>

        <div ref="commodityRef" class="col-span-3 overflow-hidden h-4/5">
            <!-- 该 div 为包裹 scroll 的容器，添加足够大的底部内边距保证 scroll 内容显示完全 -->
            <div class="pt-4 pb-24">
                <div v-for="(tag, tagIndex) in TagList" :key="tagIndex">
                    <div
                        :ref="
                        (el: any) => {
                            commodityListRefs.push(el);
                        }
                    "
                        class="text-xl mb-4"
                    >
                        {{ tag }}
                    </div>

                    <div
                        v-for="(commodity, commodityIndex) in commodityItemList"
                        :key="commodityIndex"
                    >
                        <div v-if="commodity.tag === tag">
                            <CommodityItem
                                :img="commodity.img"
                                :monthly_sale="commodity.monthly_sale"
                                :name="commodity.name"
                                :praise="commodity.praise"
                                :price="commodity.price"
                                :title="commodity.title"
                                class="bg-white"
                            ></CommodityItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
li {
    @apply m-2 py-2 border-b-2;
}
</style>