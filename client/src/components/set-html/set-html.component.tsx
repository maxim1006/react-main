import React, { memo, FC, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';

type SetHtmlProps = {};

const SetHtml: FC<SetHtmlProps> = () => {
    const ref = useRef<any>();
    const ref1 = useRef<any>();

    useLayoutEffect(() => {
        // алерт не отработает, так как будет sanitized
        ref.current.setHTML(`<img src="" onerror="alert('hacked')">`);
        ref1.current.setHTML(`<h2>Tag will be shown as tag</h2>`);
    }, []);

    return (
        <div className={cn('taSetHtml')}>
            <div ref={ref} />
            <div ref={ref1} />
        </div>
    );
};

export default memo(SetHtml);
