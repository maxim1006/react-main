import React, { memo, FC, useEffect } from 'react';

type MatchVsTestProps = {};

const MatchVsTest: FC<MatchVsTestProps> = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const regexp = /\w/g;
            const regexp1 = new RegExp('\\w', 'g');

            // клево использовать match и для проверки на регексп, чтобы не париться с test!!!
            const matchResult = e.key.match(regexp);

            matchResult
                ? console.log(`e.key match ${regexp} with `, e.key, matchResult)
                : console.log(`e.key doesn't match ${regexp} with `, e.key, matchResult);

            const testResult = regexp1.test(e.key);

            testResult
                ? console.log(`e.key test ${regexp1} with `, e.key, testResult)
                : console.log(`e.key doesn't test ${regexp1} with `, e.key, testResult);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return <div>MatchVsTest</div>;
};

export default memo(MatchVsTest);
