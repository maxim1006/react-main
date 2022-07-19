// чтобы инишиали не скейлилось на ios (при фокусе полей например) но при этом норм скейлилось юзером
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

import React, { memo, FC } from 'react';

type MyMetaProps = {};

const MyMeta: FC<MyMetaProps> = () => {
    return <div>MyMeta</div>;
};

export default memo(MyMeta);
