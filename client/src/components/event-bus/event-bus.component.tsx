import React, { memo, FC, useState, useEffect } from 'react';
import eventBus from '@app/components/event-bus/event-bus';

type EventBusProps = {};

const EventBus: FC<EventBusProps> = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    console.warn(eventBus);

    useEffect(() => {
        eventBus.subscribe('counter', () => setCounter);
    }, [counter]);

    useEffect(() => eventBus.subscribe('counter1', () => setCounter1), [counter1]);

    return (
        <div>
            <button
                type='button'
                onClick={() => {
                    setCounter(i => ++i);
                }}
            >
                subscribe
            </button>
            <br />
            <button
                type='button'
                onClick={() => {
                    setCounter1(i => ++i);
                }}
            >
                subscribe and unsubscribe
            </button>
        </div>
    );
};

export default memo(EventBus);
