import React, { memo, FC } from 'react';

type NotFoundProps = {};

const NotFound: FC<NotFoundProps> = () => {
    return <div>NotFound Main</div>;
};

export default memo(NotFound);
