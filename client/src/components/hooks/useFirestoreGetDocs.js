import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

export default collectionName => {
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const collectionRef = firestore.collection(collectionName);
            const collectionSnapshot = await collectionRef.get();

            setData(collectionSnapshot.docs.map(doc => doc.data()));
        } catch (e) {
            console.log(
                `useFirestoreGetDocs getData ${collectionName} error `,
                e
            );
        }
    };

    useEffect(() => {
        getData();
    }, [collectionName]);

    return data;
};
