import { memo, useState } from 'react';
import OutsideChangeContextInner from './OutsideChangeContextInner';
import OutsideChangeContext from '../OutsideChangeContext';

export default memo(() => {
    const [contextValue, setContextValue] = useState(null);

    const setValue = event => {
        setContextValue(event.target.value);
    };

    return (
        <OutsideChangeContext.Provider value={{ value: contextValue, setValue }}>
            <OutsideChangeContextInner />
        </OutsideChangeContext.Provider>
    );
});
