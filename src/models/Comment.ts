export default interface Comment {
    userAvatar: string;
    userName: string;
    rating: number;
    comment: string;
    tag: string[];
    time: string;
}

// * 模拟用户评论数据
export const zhangwuji: Comment = {
    userAvatar: '张无忌',
    userName: '张无忌',
    rating: 5,
    comment: '不错，粥很好喝，我经常吃这一家，非常赞，以后也会常来吃，强烈推荐',
    tag: ['娃娃菜炖豆腐', '100% NFC 橙汁'],
    time: '2022-04-01 07:34',
};

export const yangguo: Comment = {
    userAvatar: '杨过',
    userName: '杨过',
    rating: 3.8,
    comment: '',
    tag: ['100% NFC 芒果混合汁', '皮蛋瘦肉粥', '手撕包菜'],
    time: '2022-04-02 22:14',
};

export const zhoubotong: Comment = {
    userAvatar: '周伯通',
    userName: '周伯通',
    rating: 4,
    comment: '服务态度不错',
    tag: ['拍黄瓜', '香酥黄金鱼', '娃娃菜炖豆腐'],
    time: '2022-04-03 11:56',
};

export const weixiaobao: Comment = {
    userAvatar: '韦小宝',
    userName: '韦小宝',
    rating: 2,
    comment: '派送时间太长',
    tag: ['100% NFC 芒果混合汁', '八宝酱菜', '娃娃菜炖豆腐'],
    time: '2022-04-04 07:24',
};

export const liangzijin: Comment = {
    userAvatar: '梁子进',
    userName: '梁子进',
    rating: 4.2,
    comment: '服务态度不错',
    tag: ['皮蛋瘦肉粥', '红豆粥', '100% NFC 橙汁'],
    time: '2022-04-05 11:09',
};

export const duguqiubai: Comment = {
    userAvatar: '独孤求败',
    userName: '独孤求败',
    rating: 4.9,
    comment: '良心店铺，推荐大家来试试看',
    tag: ['牛肉馅饼', '葱花饼', '拍黄瓜'],
    time: '2022-04-05 14:59',
};

export const mujianping: Comment = {
    userAvatar: '沐剑屏',
    userName: '沐剑屏',
    rating: 1.2,
    comment: '送货的速度跟蜗牛一样，太慢了',
    tag: ['田园蔬菜粥', '香酥黄金鱼'],
    time: '2022-04-06 19:19',
};

export const murongfu: Comment = {
    userAvatar: '慕容复',
    userName: '慕容复',
    rating: 4.7,
    comment: '粥的味道还不错',
    tag: ['田园蔬菜粥'],
    time: '2022-04-06 20:11',
};

export const commentList: Comment[] = [
    murongfu,
    mujianping,
    duguqiubai,
    liangzijin,
    weixiaobao,
    zhoubotong,
    yangguo,
    zhangwuji,
];
