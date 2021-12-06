import React, { memo } from 'react';
import FamilyContainer from '../family/family.container';
import SkillListContainer from '../skill/list/skill-list.container';
import TracksContainer from '../tracks/tracks.container';

type GqlProps = {};

const Gql = memo<GqlProps>(() => {
    return (
        <>
            <SkillListContainer />
            <FamilyContainer />
            <TracksContainer />
        </>
    );
});

export default Gql;
