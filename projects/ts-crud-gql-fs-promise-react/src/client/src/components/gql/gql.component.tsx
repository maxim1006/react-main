import React, { memo } from 'react';
import FamilyContainer from '../family/family.container';

type GqlProps = {};

const Gql = memo<GqlProps>(() => {
    return (
        <>
            <FamilyContainer />
        </>
    );
});

export default Gql;
