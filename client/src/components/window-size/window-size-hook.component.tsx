import { memo } from 'react';
import { useWindowSize } from '@app/hooks/window-size.hook';

type WindowSizeHookProps = {};

const WindowSizeHook = memo<WindowSizeHookProps>(function WindowSizeHook() {
    const { height, width } = useWindowSize();
    return (
        <div>
            Window width - {width}, height - {height}
        </div>
    );
});

export default WindowSizeHook;
