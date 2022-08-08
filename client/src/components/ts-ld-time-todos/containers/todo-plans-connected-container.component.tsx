import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodoPlans, store } from '../store';
import TodoPlans from '../components/plans/todo-plans.component';
import { TodosAppState } from '../store/state';
import { ISimpleMap } from '@app/models/simple-map.model';
import { IPlan } from '@app/models/plan.model';
import MaterialLoader from '../../loader/MaterialLoader';
import customAxios from '../../../common/api/axios';
import { CancelTokenSource } from 'axios';

const TodoPlansConnectedContainer = ({
    plans,
    isLoading,
    fetchTodoPlans,
}: {
    plans: ISimpleMap<IPlan>;
    isLoading: boolean;
    fetchTodoPlans: (cancelToken: CancelTokenSource) => void;
}) => {
    useEffect(() => {
        const cancelRemoveSkillRequest = customAxios.CancelToken.source() as CancelTokenSource;

        fetchTodoPlans(cancelRemoveSkillRequest);

        return () => cancelRemoveSkillRequest.cancel('TodoPlansConnectedContainer fetchTodoPlans canceled');
    }, [fetchTodoPlans]);

    return isLoading ? <MaterialLoader /> : <TodoPlans plans={plans} />;
};

const mapStateToProps = (state: TodosAppState) => {
    return {
        plans: state.plans.plans,
        isLoading: state.plans.isLoading,
    };
};

const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({
    fetchTodoPlans: (cancelFetchSkillRequest: any) => {
        dispatch(fetchTodoPlans(cancelFetchSkillRequest.token) as any);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(TodoPlansConnectedContainer));
