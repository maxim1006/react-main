import { useEffect, useRef, useState } from 'react';

import styles from './animated-counter.module.scss';

const ONE_COUNT = 1;
const TranslateStylesMap = {
    FIRST: 0,
    SECOND: -100,
    THIRD: -200,
} as const;

const getDrumNumbers = (count: number): number[] => [count - ONE_COUNT, count, count + ONE_COUNT];

const AnimatedCounter = ({ count = 0 }: { count: number }) => {
    const [currentCount, setCurrentCount] = useState(count);
    const [translate, setTranslate] = useState<number>(TranslateStylesMap.SECOND);
    const [values, setValues] = useState(() => getDrumNumbers(count));
    const nextCountRef = useRef<number | null>(null);

    useEffect(() => {
        if (count === currentCount) return;

        if (count > currentCount) {
            setTranslate(TranslateStylesMap.THIRD);
        } else {
            setTranslate(TranslateStylesMap.FIRST);
        }

        nextCountRef.current = count;
    }, [count, currentCount]);

    const handleTransitionEnd = () => {
        if (nextCountRef.current === null) return;

        const newCount = nextCountRef.current;
        setCurrentCount(newCount);
        setValues(getDrumNumbers(newCount));
        setTranslate(TranslateStylesMap.SECOND);
        nextCountRef.current = null;
    };

    return (
        <div className={styles.drumContainer} onTransitionEnd={handleTransitionEnd}>
            {values.map(value => (
                <div
                    key={`${value}-idx`}
                    className={styles.drum}
                    style={{
                        transform: `translateY(${translate}%)`,
                        transition: translate !== TranslateStylesMap.SECOND ? 'transform 1s ease-in-out' : 'none',
                    }}
                >
                    {value}
                </div>
            ))}
        </div>
    );
};

const AnimatedCounterWrapper = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button
                onClick={() => {
                    setCount(i => ++i);
                }}
                type='button'
            >
                Up
            </button>
            <button
                onClick={() => {
                    setCount(i => --i);
                }}
                type='button'
            >
                Down
            </button>
            <AnimatedCounter count={count} />
        </>
    );
};

export const AnimatedCounterCompound = Object.assign(AnimatedCounter, {
    Wrapper: AnimatedCounterWrapper,
});
