import React, { memo, useCallback } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { commonUtilsOmitTypeName } from '../../../common.utils';
import MaterialLoader from '../../loader/MaterialLoader';
import CreateSkill from '../create/create-skill.component';
import SkillList from './skill-list.component';

// тут все в одном файле для простоты восприятия, в проде разумеется надо разбивать
type SkillListContainerProps = {};

// так делаю гет запрос
export const GET_SKILLS = gql`
    query GetSkills {
        skills {
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

const DELETE_SKILL = gql`
    mutation DeleteSkill($id: String!) {
        deleteSkill(id: $id) {
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
            items {
                id
                name
                completed
            }
            errors {
                field
                message
            }
        }
    }
`;

const CREATE_SKILL = gql`
    mutation CreateSkill($name: String!, $completed: Boolean!) {
        createSkill(name: $name, completed: $completed) {
            items {
                id
                name
                completed
            }
            errors {
                field
                message
            }
        }
    }
`;

const SkillListContainer = memo<SkillListContainerProps>(() => {
    const { data, loading, error, refetch } = useQuery<GetSkills>(GET_SKILLS);
    const [createSkill, { data: dataAfterCreate }] = useMutation(CREATE_SKILL);
    const [updateSkill, { data: dataAfterUpdate }] = useMutation(DELETE_SKILL);
    const [removeSkill, { data: dataAfterDelete }] = useMutation(DELETE_SKILL);

    console.log('GET_SKILLS ', data);
    console.log('CREATE_SKILL ', dataAfterCreate);
    console.log('UPDATE_SKILL ', dataAfterUpdate);
    console.log('DELETE_SKILL ', dataAfterDelete);

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

    return (
        <>
            <button type="button" onClick={() => refetch()}>
                Refetch family
            </button>
            <CreateSkill onCreate={onCreate} />
            <SkillList data={data} loading={loading} onUpdate={onUpdate} onRemove={onRemove} />
        </>
    );
});

export default SkillListContainer;
