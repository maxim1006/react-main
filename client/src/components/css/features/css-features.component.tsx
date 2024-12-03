import React, { memo, FC, useState } from 'react';
import styles from './css-features.module.scss';
import cn from 'classnames';

type CssFeaturesProps = {};

const CssFeatures: FC<CssFeaturesProps> = () => {
    const [dropdownOpened, setDropdownOpened] = useState(false);
    return (
        <div className={cn(styles.host, 'taCssFeatures')}>
            CssFeatures
            <input type='tel' inputMode='numeric' minLength={3} pattern='[0-9]' required className={styles.textInput} />
            <h3>:has() check</h3>
            <p />
            <div className={cn(styles.dropdown, { [`${styles.dropdownOpened}`]: dropdownOpened })}>
                <div className={styles.dropdownHeader} onClick={() => setDropdownOpened(i => !i)}>
                    DropdownHeader
                </div>
                <div className={styles.dropdownContent}>DropdownContent</div>
            </div>
        </div>
    );
};

export default memo(CssFeatures);
