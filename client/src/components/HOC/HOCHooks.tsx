import { memo } from 'react';
import { withMaterialLoader } from '@app/components/HOC/WithMaterialLoader';
import useFirestoreGetDocs from '@app/components/hooks/useFirestoreGetDocs';
import FamilyList from '@app/components/family/FamilyList';

// WithMaterialLoader  это HOC

// а этот компонент типо контейнера FamilyWithLoaderContainer, в HOCClass более наглядно
type HOCHooksProps = {
    family: any;
};

const HOCHooks = withMaterialLoader(
    memo<HOCHooksProps>(function HOCHooks() {
        const family = useFirestoreGetDocs('family');
        return <FamilyList family={family} />;
    })
);

export default HOCHooks;
