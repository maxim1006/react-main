import React, { FC, memo, useEffect, useState } from 'react';
import cn from 'classnames';

type ReadCalculatePrimitivesFromPropsProps = {};

const ReadCalculatePrimitivesFromProps: FC<ReadCalculatePrimitivesFromPropsProps> = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState(0);

    return (
        <div className={cn('taReadCalculatePrimitivesFromProps')}>
            <button
                onClick={() => {
                    setId(i => ++i);
                    setName(i => ++i);
                }}
            >
                Change Id
            </button>

            <button
                onClick={() => {
                    setName(i => ++i);
                }}
            >
                Change Name
            </button>

            <Read
                options={{
                    id,
                    name,
                }}
            />

            <Calculate
                getOptions={() => ({
                    id,
                    name,
                })}
            />
        </div>
    );
};

// здесь пример как могу забрать только одно реактивное значение из объекта что useEffect вызывался лишь при изменении id
function Read({ options }: { options: Record<string, number> }) {
    const { id } = options;

    useEffect(() => {
        console.log('Read ', id);
    }, [id]);

    return <>Read</>;
}

function Calculate({ getOptions }: { getOptions: () => Record<string, number> }) {
    const { id } = getOptions();

    useEffect(() => {
        console.log('Calculate ', id);
    }, [id]);

    return <>Calculate</>;
}

export default memo(ReadCalculatePrimitivesFromProps);
