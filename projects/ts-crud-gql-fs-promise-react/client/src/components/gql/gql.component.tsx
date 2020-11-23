import React, { memo } from 'react';
import FamilyContainer from '../family/family.container';
import SkillListContainer from '../skill/list/skill-list.container';

type GqlProps = {};

const Gql = memo<GqlProps>(() => {
    return (
        <>
            <SkillListContainer />
            <FamilyContainer />
        </>
    );
});

export default Gql;
