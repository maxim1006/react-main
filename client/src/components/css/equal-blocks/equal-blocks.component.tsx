import React, { memo, FC } from 'react';
import styles from './equal-blocks.module.scss';
import cn from 'classnames';

type EqualBlocksProps = {};

const EqualBlocks: FC<EqualBlocksProps> = () => {
    return (
        <div className={cn(styles.host, 'taEqualBlocks')}>
            <article className={styles.block}>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cumque deleniti dignissimos dolorem
                    eaque, id molestiae optio, perferendis, possimus quae temporibus tenetur vitae. Ab adipisci amet
                    animi architecto asperiores, doloremque, error in ipsum nemo nobis porro quod, ratione repellat
                    repellendus vitae! Aliquid amet delectus minus nostrum optio sed ullam!
                </p>
                <input type='checkbox' className={styles.checkbox} />
            </article>
            <article className={styles.block}>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cumque deleniti dignissimos dolorem
                    eaque, id molestiae optio, perferendis, possimus quae temporibus tenetur vitae. Ab adipisci amet
                    animi architecto asperiores, doloremque, error in ipsum nemo nobis porro quod, ratione repellat
                    repellendus vitae! Aliquid amet delectus minus nostrum optio sed ullam!Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. A ad cumque deleniti dignissimos dolorem eaque, id molestiae optio,
                    perferendis, possimus quae temporibus tenetur vitae. Ab adipisci amet animi architecto asperiores,
                    doloremque, error in ipsum nemo nobis porro quod, ratione repellat repellendus vitae! Aliquid amet
                    delectus minus nostrum optio sed ullam!
                </p>
                <input type='checkbox' className={styles.checkbox} />
            </article>
            <article className={styles.block}>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cumque deleniti dignissimos dolorem
                    eaque, id molestiae optio, perferendis, possimus quae temporibus tenetur vitae. Ab adipisci amet
                    animi architecto asperiores, doloremque, error in ipsum nemo nobis porro quod, ratione repellat
                    repellendus vitae! Aliquid amet delectus minus nostrum optio sed ullam!Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. A ad cumque deleniti dignissimos dolorem eaque, id molestiae optio,
                    perferendis, possimus quae temporibus tenetur vitae. Ab adipisci amet animi architecto asperiores,
                    doloremque, error in ipsum nemo nobis porro quod, ratione repellat repellendus vitae! Aliquid amet
                    delectus minus nostrum optio sed ullam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    ad cumque deleniti dignissimos dolorem eaque, id molestiae optio, perferendis, possimus quae
                    temporibus tenetur vitae. Ab adipisci amet animi architecto asperiores, doloremque, error in ipsum
                    nemo nobis porro quod, ratione repellat repellendus vitae! Aliquid amet delectus minus nostrum optio
                    sed ullam!
                </p>
                <input type='checkbox' className={styles.checkbox} />
            </article>
        </div>
    );
};

export default memo(EqualBlocks);
