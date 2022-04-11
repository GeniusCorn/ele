import img1 from '../assets/images/8647ffd2ebc48007ae56023309d62f09.jpeg';
import img2 from '../assets/images/ee26d776c09bf33afc67a1c54bd8409b.jpeg';
import img3 from '../assets/images/c23588f9fe16d40dc7078be492a4b8fa.jpeg';
import img4 from '../assets/images/6557e9564c133f17f1227c93bb4f9be6.jpeg';
import img5 from '../assets/images/48265c173c4b4c3283b62b7ff0c530a5.jpg';
import img6 from '../assets/images/8d97c3d36cc236510e1efcbcb60ae35c.jpeg';
import img7 from '../assets/images/f36b0234d4742fd6555578e32dc5c71d.jpeg';
import img8 from '../assets/images/src=http___5b0988e595225.cdn.sohucs.com_images_20181201_37f4a91c26f646318ee298eeff181088.jpeg&refer=http___5b0988e595225.cdn.sohucs.webp';
import img9 from '../assets/images/u=2142987921,2724248309&fm=253&fmt=auto&app=138&f=PNG.webp';
import img10 from '../assets/images/u=2433146923,3078885835&fm=253&fmt=auto&app=138&f=JPEG.webp';
import img11 from '../assets/images/src=http___img.mp.itc.cn_upload_20170628_6733ae7eec70431bb974753116d79188_th.jpg&refer=http___img.mp.itc.webp';
import img12 from '../assets/images/src=http___recipe0.hoto.cn_pic_step_l_fa_b4_5420282.jpg&refer=http___recipe0.hoto.webp';
import img13 from '../assets/images/src=http___bkimg.cdn.bcebos.com_pic_f11f3a292df5e0feaf0de878526034a85edf72b5&refer=http___bkimg.cdn.bcebos.webp';
import img14 from '../assets/images/src=http___bkimg.cdn.bcebos.com_pic_c83d70cf3bc79f3df8dcc3b72ceada11728b461083ab&refer=http___bkimg.cdn.bcebos.webp';

export interface Commodity {
    name: string;
    title: string;
    tag?: string;
    monthly_sale: number;
    praise: number;
    price: number;
    img: string;
    description?: string;

    [index: string]: any;
}

// * 模拟商家商品数据
export const stewedTofuWithBabyVegetables: Commodity = {
    name: 'stewedTofuWithBabyVegetables',
    title: '娃娃菜炖豆腐',
    tag: '精选热菜',
    monthly_sale: 43,
    praise: 92,
    price: 17,
    img: img1,
    description: '我是娃娃菜炖豆腐',
};

export const handTornCabbage: Commodity = {
    name: 'handTornCabbage',
    title: '手撕包菜',
    tag: '精选热菜',
    monthly_sale: 29,
    praise: 100,
    price: 16,
    img: img2,
    description: '我是手撕包菜',
};

export const crispyGoldenFish: Commodity = {
    name: 'crispyGoldenFish',
    title: '香酥黄金鱼',
    tag: '精选热菜',
    monthly_sale: 15,
    praise: 100,
    price: 11,
    img: img3,
    description: '我是香酥黄金鱼',
};

export const eightTreasurePickle: Commodity = {
    name: 'eightTreasurePickle',
    title: '八宝酱菜',
    tag: '爽口凉菜',
    monthly_sale: 34,
    praise: 100,
    price: 4,
    img: img4,
    description: '我是八宝酱菜',
};

export const slapCucumber: Commodity = {
    name: 'slapCucumber',
    title: '拍黄瓜',
    tag: '爽口凉菜',
    monthly_sale: 28,
    praise: 100,
    price: 9,
    img: img5,
    description: '我是拍黄瓜',
};

export const orangeJuice: Commodity = {
    name: 'orangeJuice',
    title: '100% NFC 橙汁',
    tag: '果品果汁',
    monthly_sale: 17,
    praise: 87,
    price: 7,
    img: img6,
    description: '我是 100% NFC 橙汁',
};

export const mangoMix: Commodity = {
    name: 'mangoMix',
    title: '100% NFC 芒果混合汁',
    tag: '果品果汁',
    monthly_sale: 20,
    praise: 87,
    price: 7,
    img: img7,
    description: '我是 100% NFC 芒果混合汁',
};

export const lentilCasserole: Commodity = {
    name: 'lentilCasserole',
    title: '扁豆焖面',
    tag: '小吃主食',
    monthly_sale: 288,
    praise: 96,
    price: 14,
    img: img8,
    description: '我是扁豆焖面',
};

export const scallionCake: Commodity = {
    name: 'scallionCake',
    title: '葱花饼',
    tag: '小吃主食',
    monthly_sale: 124,
    praise: 85,
    price: 10,
    img: img9,
    description: '我是葱花饼',
};

export const beefPie: Commodity = {
    name: 'beefPie',
    title: '牛肉馅饼',
    tag: '小吃主食',
    monthly_sale: 114,
    praise: 96,
    price: 12,
    img: img10,
    description: '我是牛肉馅饼',
};

export const skinnyEggAndLeanPorkPorridge: Commodity = {
    name: 'skinnyEggAndLeanPorkPorridge',
    title: '皮蛋瘦肉粥',
    tag: '特色粥品',
    monthly_sale: 331,
    praise: 98,
    price: 10,
    img: img11,
    description: '我是皮蛋瘦肉粥',
};

export const redBeanPorridge: Commodity = {
    name: 'redBeanPorridge',
    title: '红豆粥',
    tag: '特色粥品',
    monthly_sale: 45,
    praise: 95,
    price: 12,
    img: img12,
    description: '我是红豆粥',
};

export const pumpkinPorridge: Commodity = {
    name: 'pumpkinPorridge',
    title: '南瓜粥',
    tag: '特色粥品',
    monthly_sale: 93,
    praise: 91,
    price: 9,
    img: img13,
    description: '我是南瓜粥',
};

export const gardenVegetablePorridge: Commodity = {
    name: 'gardenVegetablePorridge',
    title: '田园蔬菜粥',
    tag: '特色粥品',
    monthly_sale: 23,
    praise: 96,
    price: 10,
    img: img14,
    description: '我是田园蔬菜粥',
};

export const commodityItemList: Commodity[] = [
    // 精选热菜
    stewedTofuWithBabyVegetables,
    handTornCabbage,
    crispyGoldenFish,
    // 爽口凉菜
    eightTreasurePickle,
    slapCucumber,
    // 果品果汁
    orangeJuice,
    mangoMix,
    // 小吃主食
    lentilCasserole,
    scallionCake,
    beefPie,
    // 特色粥品
    skinnyEggAndLeanPorkPorridge,
    redBeanPorridge,
    pumpkinPorridge,
    gardenVegetablePorridge,
];
