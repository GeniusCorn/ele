import img1 from '../assets/images/8647ffd2ebc48007ae56023309d62f09.jpeg';
import img2 from '../assets/images/ee26d776c09bf33afc67a1c54bd8409b.jpeg';
import img3 from '../assets/images/c23588f9fe16d40dc7078be492a4b8fa.jpeg';
import img4 from '../assets/images/6557e9564c133f17f1227c93bb4f9be6.jpeg';
import img5 from '../assets/images/48265c173c4b4c3283b62b7ff0c530a5.jpg';
import img6 from '../assets/images/8d97c3d36cc236510e1efcbcb60ae35c.jpeg';
import img7 from '../assets/images/f36b0234d4742fd6555578e32dc5c71d.jpeg';

export interface Commodity {
    name: string;
    title: string;
    tag?: string;
    monthly_sale: number;
    praise: number;
    price: number;
    img: string;
    description: string;
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
];
