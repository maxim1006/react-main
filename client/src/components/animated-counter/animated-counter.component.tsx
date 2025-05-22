import { useEffect, useState } from 'react';

import styles from './animated-counter.module.scss';

const AnimatedCounter = ({ count = 0 }: { count: number }) => {
    const [values, setValues] = useState([count, count + 1, count + 2]);
    const [active, setActiveElement] = useState(count);

    const getTranslateValue = () => {
        const index = values.indexOf(active);

        if (index === 0) {
            return 0;
        }
        if (index === 1) {
            return -100;
        }
        return index * -100;
    };

    useEffect(() => {
        setActiveElement(count);
        if (values.includes(count)) {
            return;
        }
        setValues(prev => prev.concat(count));
    }, [count, values]);

    const drumElements = values.map(value => (
        <div
            key={value}
            style={{
                transform: `translateY(${getTranslateValue()}%)`,
                transition: 'transform 0.5s ease-in-out',
                height: '18px',
            }}
        >
            {value === 0 ? '' : value}
        </div>
    ));

    return <div className={styles.drumContainer}>{drumElements}</div>;
};

const AnimatedCounterWrapper = ({ count }: { count: number }) => {
    const [additional, setAdditional] = useState(count === 0 ? 0 : 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAdditional(0);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return <AnimatedCounter count={count - additional} />;
};

export const AnimatedCounterCompound = Object.assign(AnimatedCounter, {
    Wrapper: AnimatedCounterWrapper,
});
