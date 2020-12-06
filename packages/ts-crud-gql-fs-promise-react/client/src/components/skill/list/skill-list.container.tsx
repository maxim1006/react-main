import React, { memo, useCallback } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { commonUtilsOmitTypeName } from '../../../common.utils';
import MaterialLoader from '../../loader/MaterialLoader';
import CreateSkill from '../create/create-skill.component';
import SkillList from './skill-list.component';
import { GetSkills } from './__generated__/GetSkills';
import { skillFilter } from '../../../gql/cache';
import styles from './skill-list-container.module.less';
import { FilterModel } from '../../../models/filter.model';

// тут все в одном файле для простоты восприятия, в проде разумеется надо разбивать
type SkillListContainerProps = {};

// так делаю гет запрос
export const GET_SKILLS = gql`
    query GetSkills {
        skills {
            id
            filteredItems @client {
                id
                name
                completed
            }
            items {
                id
                name
                completed
            }
            errors {
                message
                field
            }
        }
    }
`;

const DELETE_SKILL = gql`
    mutation DeleteSkill($id: String!) {
        deleteSkill(id: $id) {
            id
            items {
                id
                name
                completed
            }
            errors {
                message
                field
            }
        }
    }
`;

const UPDATE_SKILL = gql`
    mutation UpdateSkill($input: SkillInput!) {
        updateSkill(input: $input) {
            id
            items {
                id
                name
                completed
            }
            errors {
                message
                field
            }
        }
    }
`;

const CREATE_SKILL = gql`
    mutation CreateSkill($name: String!, $completed: Boolean!) {
        createSkill(name: $name, completed: $completed) {
            id
            items {
                id
                name
                completed
            }
            errors {
                message
                field
            }
        }
    }
`;

const SkillListContainer = memo<SkillListContainerProps>(() => {
    const { data, loading, error, refetch } = useQuery<GetSkills>(GET_SKILLS);
    const [createSkill, { data: dataAfterCreate }] = useMutation(CREATE_SKILL);
    const [updateSkill, { data: dataAfterUpdate }] = useMutation(UPDATE_SKILL);
    const [removeSkill, { data: dataAfterDelete }] = useMutation(DELETE_SKILL);

    // console.log('GET_SKILLS ', data);
    // console.log('CREATE_SKILL ', dataAfterCreate);
    // console.log('UPDATE_SKILL ', dataAfterUpdate);
    // console.log('DELETE_SKILL ', dataAfterDelete);

    const onCreate = useCallback(
        ({ name, completed }) => {
            createSkill({ variables: { name, completed } });
        },
        [createSkill]
    );

    const onUpdate = useCallback(
        skill => {
            updateSkill({ variables: { input: commonUtilsOmitTypeName(skill) } });
        },
        [updateSkill]
    );

    const onRemove = useCallback(
        skill => {
            removeSkill({ variables: { id: skill.id } });
        },
        [removeSkill]
    );

    if (loading) return <MaterialLoader />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const onFilterClick = (filter: FilterModel) => {
        skillFilter(filter);
    };

    return (
        <div style={{ marginBottom: 100 }}>
            <h3 className={styles.title}>Filtered Skills</h3>
            <div>
                Filters:{' '}
                {['All', 'Completed'].map((i, idx) => (
                    <span className={styles.filter} onClick={() => onFilterClick(i as FilterModel)} key={idx}>
                        {i}
                    </span>
                ))}
            </div>
            <SkillList data={data?.skills?.filteredItems} />

            <h3 className={styles.title}>All Skills</h3>
            <CreateSkill onCreate={onCreate} />
            <SkillList data={data?.skills?.items} loading={loading} onUpdate={onUpdate} onRemove={onRemove} />

            <p className={styles.block}>
                <button type="button" onClick={() => refetch()}>
                    Refetch Skills
                </button>
            </p>
        </div>
    );
});

export default SkillListContainer;
