import { memo } from 'react';
import { useScript } from '@app/hooks/script.hook';

type ScriptHookProps = {};

const ScriptHook = memo<ScriptHookProps>(function ScriptHook() {
    const { loading, error } = useScript('https://code.jquery.com/jquery-3.6.0.min.js');

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    return <div>Window width: {window.$?.(window).width()}</div>;
});

export default ScriptHook;
