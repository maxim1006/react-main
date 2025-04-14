import { memo } from 'react';
import { withMaterialLoader } from '@app/components/HOC/with-loader/with-material-loader.hoc';
import useFirestoreGetDocs from '@app/components/hooks-components/useFirestoreGetDocs';
import FamilyList from '@app/components/family/FamilyList';
import { FamilyMemberModel } from '@app/models/family.model';

// WithMaterialLoader  это HOC

// а этот компонент типо контейнера FamilyWithLoaderContainer, в HOCClass более наглядно
type HocWithmaterialLoaderProps = {
    family: any;
};

const HocWithMaterialLoader = withMaterialLoader(
    memo<HocWithmaterialLoaderProps>(function HOCHooks() {
        const family = useFirestoreGetDocs('family') as unknown as FamilyMemberModel[];

        return <FamilyList family={family} />;
    }),
);

export default HocWithMaterialLoader;
