import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { getFamilyAction } from '@app/old_store/actions';

const FamilySagaComponent = () => {
    const dispatch = useDispatch();

    return (
        <button type='button' onClick={() => dispatch(getFamilyAction())}>
            Get family
        </button>
    );
};

export default memo(FamilySagaComponent);
