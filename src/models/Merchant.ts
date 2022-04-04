import { reactive } from 'vue';

import image1 from '../assets/images/mae-mu-t-0rX27Xiy0-unsplash.jpg';

export default interface Merchant {
    logoUrl: string;
    name: string;
    overallRating: number;
    serviceAttitude: number;
    productRating: number;
    shipper: string;
    diversityTime: string;
    description: string;
    deliveryFee: number;
    startingDeliveryPrice: number;
    monthlySales: number;
}

// * 模拟商家数据
export const merchant: Merchant = reactive({
    logoUrl: image1,
    name: '城里粥坊',
    overallRating: 4.6,
    serviceAttitude: 4.5,
    productRating: 4.7,
    shipper: '蜂鸟专送',
    diversityTime: '30',
    description:
        '粥在我国至少有五千年的历史了，可谓源远流长。自古就有将粥喻作“滋生育神丹”、“滋养胃气妙品”、“世间第一补人之物”。城里粥坊其烹饪粥料地秘方源于中国千年古法，再融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0 添加的良心品质深受消费者青睐，发展至今成为粥类的引领品牌。',
    deliveryFee: 4,
    startingDeliveryPrice: 28,
    monthlySales: 100,
});
