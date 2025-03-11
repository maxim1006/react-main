import cn from 'classnames';
import React, { memo, useEffect, useState } from 'react';

import { withMaterialLoader } from '@app/components/HOC/with-loader/with-material-loader.hoc';
import FamilyList from '@app/components/family/FamilyList';
import { firestore } from '@app/firebase/firebase.utils';
import { FamilyMemberModel } from '@app/models/family.model';

type FamilyWithLoaderContainerProps = {};

const FamilyWithLoader = withMaterialLoader<{ family: any }>(FamilyList);

const FamilyWithLoaderContainer = memo<FamilyWithLoaderContainerProps>(() => {
    const [family, setFamily] = useState<FamilyMemberModel[]>();

    useEffect(() => {
        (async () => {
            try {
                const collectionRef = firestore.collection('family');
                const collectionSnapshot = await collectionRef.get();
                const family = collectionSnapshot.docs.map(doc => doc.data()) as FamilyMemberModel[];
                setFamily(family);
            } catch (e) {
                console.log(`useFirestoreGetDocs getData ${'family'} error `, e);
            }
        })();
    }, []);

    return (
        <div className={cn('taFamilyWithLoaderContainer')}>
            <FamilyWithLoader family={family} isLoading={!family} />;
        </div>
    );
});

export { FamilyWithLoaderContainer };
