// https://firebase.google.com/docs/firestore/
import { firestore } from "../../firebase/firebase.utils";

export default () => {
    // documentRef returns documentSnapshot (свойства exists, data())
    // collectionRef returns querySnapshot
    //
    // firestore всегда вернет объект, даже если в нем ничего нет

    (async () => {
        // могу делать запросы так, но удобнее в 1 строку
        // const dataRef = firestore.collection("users").doc("Fe43bmvlRGjsGckD2cCi").collection("items").doc("DWrElWdcybAS717MdYl1");
        const docRef = firestore.doc("/users/95F0cuAvdGNApLKtCspJlSdrfWe2");
        const collectionRef = firestore.collection("/users");

        console.log("docRef ", docRef); // DocumentReference, has: set(), get(), update(), delete()
        console.log("collectionRef ", collectionRef); // CollectionReference, has: add()

        // добавить коллекцию с рандомным id
        // если в collectionRef.doc() передать аргумент, то это будет id
        const newDoc = collectionRef.doc();
        console.log("newDoc ", newDoc);
        // await collection.add({
        //     name: "Boots"
        // });

        // получаю данные документа
        const snapshot = await docRef.get(); // DocumentSnapshot, has: exists property для проверки существует ли такой документ
        console.log("snapshot doc data ", snapshot.data()); // возвращаю объект с датой

        // получаю все доки из коллекции
        const querySnapshot = await collectionRef.get(); // CollectionSnapshot/QuerySnapshot
        // можем проверить есть ли документы в querySnapshot c помощью querySnapshot.empty()
        const querySnapshotDocsData = querySnapshot.docs.map(doc => doc.data());
        console.log(
            "all docs from querySnapshotDocsData ",
            querySnapshotDocsData
        );

        // получаю все доки из коллекции 2
        collectionRef.onSnapshot(async snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            console.log("all docs from querySnapshotDocsData 2 ", data);
        });

        // нереально использовать из-за большой вложенности
        const collections = await fetch(
            "https://firestore.googleapis.com/v1/projects/react-main-1006-8eae6/databases/(default)/documents/family"
        );
        const collectionsJson = await collections.json();
        console.log("all docs from fetch ", collectionsJson);

        // записываю набор доков в коллекцию
        const newCollectionRef = firestore.collection("family");
        const newBatch = firestore.batch();
        const names = ["Max", "Aliya", "Lili", "Alice"];
        const ages = ["32", "33", "4", "0"];

        [...Array(4)].forEach((i, index) => {
            const newDoc = newCollectionRef.doc();

            newBatch.set(newDoc, {
                name: names[index],
                age: ages[index]
            });
        });

        // записать батч в firestore
        // await newBatch.commit();
    })();

    return "Firestore";
};
