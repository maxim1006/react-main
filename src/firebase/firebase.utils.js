import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// ключ забрал тут https://console.firebase.google.com/project/react-main-1006-8eae6/settings/general/web:Y2ZhNGQ3YWQtMmY2My00NDgxLTk2ZTktMzlkZTQ3ZTA1ZjI2
const firebaseConfig = {
    apiKey: "AIzaSyDEzBGwxj8YJjznHn9G0giS0bVP3AuUUHs",
    authDomain: "react-main-1006-8eae6.firebaseapp.com",
    databaseURL: "https://react-main-1006-8eae6.firebaseio.com",
    projectId: "react-main-1006-8eae6",
    storageBucket: "react-main-1006-8eae6.appspot.com",
    messagingSenderId: "561046526414",
    appId: "1:561046526414:web:f7fbfe689f187e68eef39f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// настраиваю сервис для работы с auth
const provider = new firebase.auth.GoogleAuthProvider();
// есть куча видов попапов в данному случае беру гугловый
provider.setCustomParameters({prompts: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log("createUserProfileDocument error ", e.message);
        }
    }

    return userRef;
};



// если вдруг извне понадобится вся либа
export default firebase;
