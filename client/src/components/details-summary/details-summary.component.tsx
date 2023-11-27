import React, { memo, FC } from 'react';
import styles from './details-summary.module.scss';
import cn from 'classnames';

type DetailsSummaryProps = {};

const DetailsSummary: FC<DetailsSummaryProps> = () => {
    return (
        <div className={cn(styles.host, 'taDetailsSummary')}>
            DetailsSummary Example
            <details open>
                <summary>System Requirements</summary>
                <p>
                    <p className={styles.pInner}>
                        Requires a computer running an operating system. The computer must have some memory and ideally
                        some kind of long-term storage. An input device as well as some form of output device is
                        recommended.
                    </p>
                </p>
            </details>
        </div>
    );
};

export default memo(DetailsSummary);
