import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import './pro-tabs.scss';

type ProTabsProps = {};

const Component1 = () => <>Component1</>;
const Component2 = () => <>Component2</>;

export interface ShowcaseProps {
    selectedKey?: ShowcaseComponentsEnum;
}

export interface ShowcaseComponentItem {
    id: ShowcaseComponentsEnum;
    name: string;
}

export enum ShowcaseComponentsEnum {
    Component1,
    Component2,
}

export const showcaseComponentItems: ShowcaseComponentItem[] = [
    { id: ShowcaseComponentsEnum.Component1, name: 'Component 1' },
    { id: ShowcaseComponentsEnum.Component2, name: 'Component 2' },
];

const ProTabs = memo<ProTabsProps>(function ProTabs() {
    const [searchString, setSearchString] = useState('');
    const [menuItems] = useState<ShowcaseComponentItem[]>(showcaseComponentItems);
    const [filteredMenuItems, setFilteredMenuItems] = useState<ShowcaseComponentItem[]>(menuItems);
    const [selectedKeys, setSelectedKeys] = useState<ShowcaseComponentsEnum>(ShowcaseComponentsEnum.Component1);

    const handleSearchChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
        event => {
            setSearchString(event.target.value);
            setFilteredMenuItems(
                menuItems.filter(item =>
                    item.name.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()),
                ),
            );
        },
        [setSearchString, setFilteredMenuItems, menuItems],
    );

    const handleItemSelection = (idx: ShowcaseComponentsEnum) => setSelectedKeys(idx);

    const componentMap: Record<ShowcaseComponentsEnum, JSX.Element> = {
        [ShowcaseComponentsEnum.Component1]: <Component1 />,
        [ShowcaseComponentsEnum.Component2]: <Component2 />,
    };

    return (
        <div className='wrapper'>
            <div className='left'>
                <input value={searchString} type='text' onChange={e => handleSearchChange(e)} />
                <ul>
                    {filteredMenuItems.map(({ id, name }) => (
                        <li onClick={() => handleItemSelection(id)} key={id}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='right'>{componentMap[selectedKeys]}</div>
        </div>
    );
});

export default ProTabs;
