import React, { memo, FC } from 'react';
import styles from './generic-component.module.scss';
import cn from 'classnames';

type GenericComponentProps = {};

const GenericComponent: FC<GenericComponentProps> = () => {
    return (
        <div className={cn(styles.host, 'taGenericComponent')}>
            {/*дженерик удобнее так как не надо на коллбеки проверки делать разные во внешних функциях*/}
            <Child prop={1} />
            {/*тут ошибка*/}
            {/*<GenericChild prop={{}} />*/}
            <GenericChildMemo<string> prop='1' />
        </div>
    );
};

type ChildProps = {
    prop: string | number | boolean;
    onClick?: (prop: ChildProps['prop']) => void;
};

const Child: FC<ChildProps> = ({ prop, onClick }) => {
    let a = 1;

    if (a === prop) return null;

    return <div onClick={() => onClick?.(prop)}>{prop}</div>;
};

type GenericChildProps<T extends string | number | boolean> = {
    prop?: T;
};

const GenericChild = <T extends string | number | boolean>({ prop }: GenericChildProps<T>) => {
    return <>{prop}</>;
};

// если убраь as typeof GenericChild то тогда не смогу прокинуть generic
const GenericChildMemo = memo(GenericChild) as typeof GenericChild;

export default memo(GenericComponent);
