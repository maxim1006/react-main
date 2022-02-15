import { memo } from 'react';
import { useLocation } from '@app/hooks/useLocation';
import MaterialLoaderComponent from '@app/components/loader/MaterialLoader';

type ClassBasedHooksProps = {};

const ClassBasedHooks = memo<ClassBasedHooksProps>(function ClassBasedHooks() {
    const {
        data: { latitude, longitude },
        errorMessage,
    } = useLocation();

    let position = null;

    if (latitude) {
        position = (
            <div>
                latitude:
                {latitude}
                longitude:
                {longitude}
            </div>
        );
    } else {
        position = (
            <div
                style={{
                    position: 'relative',
                    pointerEvents: 'none',
                }}
            >
                {errorMessage || <MaterialLoaderComponent />}
            </div>
        );
    }

    return position;
});

export default ClassBasedHooks;
