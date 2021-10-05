import { useEffect, useState } from 'react';
import { firestore } from '@app/firebase/firebase.utils';

export default function useFirestoreGetDocs(collectionName) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const collectionRef = firestore.collection(collectionName);
                const collectionSnapshot = await collectionRef.get();

                setData(collectionSnapshot.docs.map(doc => doc.data()));
            } catch (e) {
                console.log(`useFirestoreGetDocs getData ${collectionName} error `, e);
            }
        };

        getData();
    }, [collectionName]);

    return data;
}
