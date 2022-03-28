import { commodityItemList } from './commodity';

const tagList = new Set<string>();

commodityItemList.forEach((item) => {
    tagList.add(item.tag as string);
});

export default tagList;
