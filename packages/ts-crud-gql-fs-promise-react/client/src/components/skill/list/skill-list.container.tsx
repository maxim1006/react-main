import React, { memo, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { commonUtilsOmitTypeName } from '../../../common.utils';
import MaterialLoader from '../../loader/MaterialLoader';
import CreateSkill from '../create/create-skill.component';
import SkillList from './skill-list.component';
import { skillFilter } from '../../../gql/cache';
import styles from './skill-list-container.module.less';
import { FilterModel } from '../../../models/filter.model';
import { useFilteredSkills } from './use-filtered-skills.hook';
import {
    GetSkillsDocument,
    GetSkillsQuery,
    useCreateSkillMutation,
    useDeleteSkillMutation,
    useUpdateSkillMutation,
} from '../../../generated/operations';

// тут все в одном файле для простоты восприятия, в проде разумеется надо разбивать
type SkillListContainerProps = {};

const SkillListContainer = memo<SkillListContainerProps>(() => {
    const { data, loading, error, refetch } = useQuery<GetSkillsQuery>(GetSkillsDocument);
    const [createSkill, { data: dataAfterCreate }] = useCreateSkillMutation();
    const [updateSkill, { data: dataAfterUpdate }] = useUpdateSkillMutation();
    const [removeSkill, { data: dataAfterDelete }] = useDeleteSkillMutation();

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

    const { filteredSkills } = useFilteredSkills(data);

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
            <h4>Filtered by typePolicies and typedefs</h4>
            {/*По идее ровно также мог бы взять обычные айтемы и отфильтровать их относительно реактивной переменной*/}
            <SkillList data={filteredSkills} />

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

// пример raw mutation
// export const BOOK_TRIPS = gql`
//     mutation BookTrips($launchIds: [ID]!) {
//         bookTrips(launchIds: $launchIds) {
//             success
//             message
//             launches {
//                 id
//                 isBooked
//             }
//         }
//     }
// `;

// export const GET_LAUNCH = gql`
//     query GetLaunch($launchId: ID!) {
//         launch(id: $launchId) {
//             ...LaunchTile
//         }
//     }
//     ${LAUNCH_TILE_DATA}
// `;

// export const LAUNCH_TILE_DATA = gql`
//     fragment LaunchTile on Launch {
//         __typename
//         id
//         isBooked
//         rocket {
//             id
//             name
//         }
//         mission {
//             name
//             missionPatch
//         }
//     }
// `;
//
// export const GET_LAUNCHES = gql`
//     query GetLaunchList($after: String) {
//         launches(after: $after) {
//             cursor
//             hasMore
//             launches {
//                 ...LaunchTile
//             }
//         }
//     }
//     ${LAUNCH_TILE_DATA}
// `;
