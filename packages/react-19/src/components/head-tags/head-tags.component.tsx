import { memo, FC } from 'react';

type HeadTagsProps = NonNullable<unknown>;

// https://react.dev/reference/react-dom
const HeadTags: FC<HeadTagsProps> = () => {
    return (
        <>
            <div>HeadTags</div>
            <title>Custom title from headTags</title>
            {/*можно задавать последовательность, есть default, high*/}
            {/*это пока что не работает*/}
            <link data-precedence='high' rel='stylesheet' href='/custom.css' />
            <div className='custom'>Custom is green</div>
        </>
    );
};

export default memo(HeadTags);
