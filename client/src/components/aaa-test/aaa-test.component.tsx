import React, { FC, memo, useMemo, useReducer } from 'react';
import cn from 'classnames';
import { generateUUID } from '@app/common/utils/generate.utils';

type AAATestProps = {};

const AAATest: FC<AAATestProps> = () => {
    const ids = useMemo(() => [generateUUID(), generateUUID(), generateUUID()], []);
    // const idsUuid = [uuidv4(), uuidv4(), uuidv4()];

    const [value, refresh] = useReducer(
        i => ++i,
        0,
        i => i,
    );

    return (
        <div className={cn('taAAATest')}>
            <button
                onClick={() => {
                    refresh();
                }}
            >
                value: {value}
            </button>
            <ul>
                {ids.map((id, idx) => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
        </div>
    );
};

export default memo(AAATest);
