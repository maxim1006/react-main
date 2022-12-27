import { memo } from 'react';

export default memo(({ name, status, ...restProps }) => (
    <span className='skills-item' {...restProps}>
        {name} -{status}
    </span>
));
