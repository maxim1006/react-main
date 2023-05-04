import React, { memo, FC, useState } from 'react';
import styles from './css-accordion.module.scss';
import cn from 'classnames';

type CssAccordionProps = {};

const stubData = {
    header: 'Header',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores, consequuntur corporis, dicta',
    opened: false,
};

const CssAccordion: FC<CssAccordionProps> = () => {
    const [data, setData] = useState(() =>
        [...Array(3).keys()].map(i => ({ ...stubData, header: stubData.header + i }))
    );

    const handleClick = (idx: number) => () =>
        setData(i => {
            i[idx].opened = !i[idx].opened;

            return [...i];
        });

    return (
        <div className={cn(styles.host, 'taCssAccordion')}>
            <div className={styles.accordion}>
                {data.map(({ body, header, opened }, idx) => (
                    <div key={header} className={styles.accordionSection}>
                        <div className={styles.accordionHeader} onClick={handleClick(idx)}>
                            {header}
                        </div>
                        <div className={cn(styles.accordionBody, { [styles.accordionBodyOpened]: opened })}>
                            <div className={styles.accordionBodyInner}>{body}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(CssAccordion);
