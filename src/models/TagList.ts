import Commodity, { commodityItemList } from './Commodity';

const TagList = new Set<string>();

commodityItemList.forEach((item: Commodity) => {
    TagList.add(item.tag as string);
});

export default TagList;
