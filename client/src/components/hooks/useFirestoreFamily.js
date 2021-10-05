import { useEffect, useState } from 'react';
import { firestore } from '@app/firebase/firebase.utils';

export default function useFirestoreFamily() {
    const [family, setFamily] = useState(null);

    useEffect(() => {
        const getFamily = async () => {
            try {
                const familyCollectionRef = firestore.collection('family');
                const familyCollectionSnapshot = await familyCollectionRef.get();

                setFamily(familyCollectionSnapshot.docs.map(doc => doc.data()));
            } catch (e) {
                console.log('useFirestoreFamily getFamily error ', e);
            }
        };

        getFamily();
    }, []);

    return family;
}
