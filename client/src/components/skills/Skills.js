import { memo } from 'react';
import SkillList from './list/SkillList';
import SkillControls from './controls/SkillControls';
import SkillSearch from './search/SkillSearch';

export default memo(() => {
    const items = {
        0: {
            id: 0,
            name: 'React',
            status: 'In progress',
        },
        1: {
            id: 1,
            name: 'Angular',
            status: 'Done',
        },
    };

    return (
        <div className='skills'>
            <SkillSearch />

            <SkillList items={items} />

            <SkillControls />
        </div>
    );
});
