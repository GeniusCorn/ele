import { createRouter, createWebHashHistory } from 'vue-router';

const OrderPage = () => import('../views/OrderPage.vue');
const CommentPage = () => import('../views/CommentPage.vue');
const MerchantPage = () => import('../views/MerchantPage.vue');

const routes = [
    {
        path: '/',
        name: 'order',
        component: OrderPage,
        meta: {
            url: '/',
            title: '商品',
        },
    },
    {
        path: '/comments',
        name: 'comment',
        component: CommentPage,
        meta: {
            url: '/comments',
            title: '评论',
        },
    },
    {
        path: '/merchant',
        name: 'merchant',
        component: MerchantPage,
        meta: {
            url: '/merchant',
            title: '商家',
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

export default router;
