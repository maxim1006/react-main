import React, { memo } from 'react';
import WithMaterialLoader from './WithMaterialLoader';
import useFirestoreGetDocs from '../hooks/useFirestoreGetDocs';
import FamilyList from '../family/FamilyList';

// WithMaterialLoader  это HOC
const FamilyWithLoader = WithMaterialLoader(FamilyList);

// а этот компонент типо контейнера FamilyWithLoaderContainer, в HOCClass более наглядно
export default memo(() => {
    const family = useFirestoreGetDocs('family');
    return <FamilyWithLoader family={family} isLoading={!family} />;
});
