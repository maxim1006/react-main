import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeSkillStatus, fetchSkills, removeSkill } from '../../../store/actions';
import SkillsItem from '../item/SkillsItem';
import customAxios from '../../../common/api/axios';
import MaterialLoaderComponent from '../../loader/MaterialLoader';
import './SkillList.scss';

const SkillList = memo(({ isLoading, items, removeItem, onStatusChange, fetchSkills }) => {
    const cancelFetchSkillRequest = customAxios.CancelToken.source();
    const cancelRemoveSkillRequest = customAxios.CancelToken.source();

    useEffect(() => {
        fetchSkills(cancelFetchSkillRequest);

        return () => {
            cancelFetchSkillRequest.cancel('SkillList fetch canceled');
            cancelRemoveSkillRequest.cancel('SkillList remove canceled');
        };
    }, []);

    return (
        <div className="skill-list">
            {isLoading ? (
                <MaterialLoaderComponent delay={300} />
            ) : (
                <ul className="skills-list">
                    {Object.values(items).map(item => (
                        <li key={item.id}>
                            <SkillsItem {...item} />

                            {/* UTF-8 dingbats*/}
                            <span onClick={_ => removeItem(item, cancelRemoveSkillRequest)}>&#10008;</span>

                            <input
                                type="checkbox"
                                checked={item.status === 'done'}
                                ref={el => el && (el.indeterminate = item.status === 'in progress')}
                                onChange={_ => onStatusChange(item)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

const mapStateToProps = (state, ownProps) => ({
    items: state.skills.items,
    isLoading: state.skills.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSkills: cancelFetchSkillRequest => {
        dispatch(fetchSkills(cancelFetchSkillRequest.token));
    },
    removeItem: (item, cancelRemoveSkillRequest) => {
        dispatch(removeSkill(item, cancelRemoveSkillRequest.token));
    },
    onStatusChange: item => {
        dispatch(changeSkillStatus(item));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
