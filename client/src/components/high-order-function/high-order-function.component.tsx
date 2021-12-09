import React, { memo } from 'react';

type HighOrderFunctionProps = {};

const HighOrderFunction = memo<HighOrderFunctionProps>(function HighOrderFunction() {
    // good
    const goodClick = (route: string) => {
        return () => {
            console.log(route);
        };
    };

    // bad
    const badClick = (route: string) => {
        console.log(route);
    };

    return (
        <>
            {/*good*/}
            <button type='button' onClick={goodClick('/logout')}>
                Good
            </button>

            {/*bad*/}
            <button
                type='button'
                onClick={() => {
                    badClick('/logout');
                }}
            >
                Bad
            </button>
        </>
    );
});

export default HighOrderFunction;
