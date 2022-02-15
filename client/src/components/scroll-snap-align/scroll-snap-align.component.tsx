import { memo } from 'react';
import './scroll-snap-align.component.scss';

const ScrollSnapAlign: React.FC = () => {
    return (
        <>
            Проскроллится в начало блока при скролле
            <div className='scroll-snap-align'>
                <div className='scroll-snap-align__item _align-start' />
                <div className='scroll-snap-align__item _align-end' />
                <div className='scroll-snap-align__item _align-center' />
                <div className='scroll-snap-align__item _align-none' />
            </div>
        </>
    );
};

export default memo(ScrollSnapAlign);
