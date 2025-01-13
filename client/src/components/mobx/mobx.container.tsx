import React, { FC, memo } from 'react';
import MobxCounterContainer from '@app/components/mobx/counter/mobx-counter.container';
import MobxTodoContainer from '@app/components/mobx/todo/mobx-todo.container';

type MobxContainerProps = {};

const MobxContainer: FC<MobxContainerProps> = () => {
    return (
        <div className='taMobxContainer'>
            <MobxCounterContainer />
            <h2 />
            <MobxTodoContainer />
        </div>
    );
};

export default memo(MobxContainer);
