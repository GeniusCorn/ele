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
    tag: ['八宝酱菜'],
    time: '2022-04-01 07:34',
};

export const yangguo: Comment = {
    userAvatar: '杨过',
    userName: '杨过',
    rating: 3.8,
    comment: '',
    tag: ['100% NFC 芒果混合汁', '皮蛋瘦肉粥', '扁豆焖面'],
    time: '2022-04-02 22:14',
};

export const zhoubotong: Comment = {
    userAvatar: '周伯通',
    userName: '周伯通',
    rating: 4,
    comment: '服务态度不错',
    tag: ['南瓜粥', '皮蛋瘦肉粥', '扁豆焖面'],
    time: '2022-04-03 11:56',
};

export const weixiaobao: Comment = {
    userAvatar: '韦小宝',
    userName: '韦小宝',
    rating: 2,
    comment: '派送时间太长',
    tag: ['南瓜粥', '皮蛋瘦肉粥', '扁豆焖面'],
    time: '2022-04-04 07:24',
};

export const commentList: Comment[] = [
    weixiaobao,
    zhoubotong,
    yangguo,
    zhangwuji,
];
