import { useImperativeHandle } from 'react';

// https://reactjs.org/docs/hooks-reference.html#useimperativehandle
type ListProps<ItemType> = {
    items: ItemType[];
    innerRef?: React.Ref<{ scrollToItem(item: ItemType): void }>;
};

export default function TypescriptImperativeHandleHooks<ItemType>(props: ListProps<ItemType>): null {
    useImperativeHandle(props.innerRef, () => ({
        scrollToItem() {},
    }));
    return null;
}
