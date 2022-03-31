import { commodityItemList } from './Commodity';

const TagList = new Set<string>();

commodityItemList.forEach((item) => {
    TagList.add(item.tag as string);
});

export default TagList;
