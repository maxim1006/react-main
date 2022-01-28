import React, { memo, useCallback, useState } from 'react';
import { useEventListener } from '@app/hooks/event-listener.hook';

type EventListenerHookProps = {};

const EventListenerHook = memo<EventListenerHookProps>(function EventListenerHook() {
    const [key, setKey] = useState('');
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    const keyDownCb = useCallback((e: KeyboardEvent) => {
        setKey(e.key);
    }, []);

    const resizeCb = useCallback((e: Event) => {
        console.log(e);
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
    }, []);

    useEventListener<KeyboardEvent>({
        eventType: 'keydown',
        callback: keyDownCb,
    });

    useEventListener<MouseEvent>({
        eventType: 'resize',
        callback: resizeCb,
        debounceTime: 1000,
    });

    return (
        <ul>
            <li>Last Key: {key}</li>
            <li>Window width: {width}</li>
            <li>Window height: {height}</li>
        </ul>
    );
});

export default EventListenerHook;
