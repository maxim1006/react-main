import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

export default () => {
    const [family, setFamily] = useState(null);

    const getFamily = async () => {
        try {
            const familyCollectionRef = firestore.collection("family");
            const familyCollectionSnapshot = await familyCollectionRef.get();

            setFamily(familyCollectionSnapshot.docs.map(doc => doc.data()));
        } catch (e) {
            console.log("useFirestoreFamily getFamily error ", e);
        }
    };

    useEffect(() => {
        getFamily();
    }, []);

    return family;
};
