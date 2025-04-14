import React, { FC, memo } from 'react';
import useFetch from '@app/components/hooks-components/useFetch';

type CommonErrorsUseFetchProps = {};

const CommonErrorsUseFetch: FC<CommonErrorsUseFetchProps> = () => {
    // тут про то что надо использовать signal в fetch
    const { refetch, data } = useFetch({ url: 'https://jsonplaceholder.typicode.com/users' });

    console.log({ data });

    return (
        <button type='button' onClick={refetch}>
            fetch
        </button>
    );
};

export default memo(CommonErrorsUseFetch);
