'use client';

import React, { FC, memo } from 'react';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';

type MyAboutClientProps = {};

const MyAboutClient: FC<MyAboutClientProps> = () => {
    // useSelectedLayoutSegment is a Client Component hook that lets you read the active route segment one level below the Layout it is called from. Те читаю активные уровни под этим сегментом
    const segment = useSelectedLayoutSegment(); // в /about/inner будет inner
    const segments = useSelectedLayoutSegments(); // в /about/inner будет [inner]

    console.log({ segment, segments });

    return (
        <div>
            MyAboutClient
            <br /> segment: {segment}
            <br /> segments: {segments}
        </div>
    );
};

export default memo(MyAboutClient);
