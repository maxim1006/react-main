// https://firebase.google.com/docs/firestore/
import {firestore} from "../../firebase/firebase.utils";

export default () => {

    (async () => {
        const data = await firestore.collection("users").doc("Fe43bmvlRGjsGckD2cCi").collection("items").doc("DWrElWdcybAS717MdYl1");
        const doc = await firestore.doc("/users/Fe43bmvlRGjsGckD2cCi/items/DWrElWdcybAS717MdYl1");
        const collection = await firestore.collection("/users/Fe43bmvlRGjsGckD2cCi/items");

        console.log(data);
        console.log(doc);
        console.log(collection);

        // добавить коллекцию с рандомным id
        // await collection.add({
        //     name: "Boots"
        // });

        // получаю данные документа
        // const snapshot = await doc.get();
        // console.log(snapshot.data());

        // получаю все доки из коллекции
        // const querySnapshot = await collection.get();
        // console.log(querySnapshot);

        // querySnapshot.docs.forEach((doc) => console.log(doc.data()));

    })();

    return "Firestore"
}
