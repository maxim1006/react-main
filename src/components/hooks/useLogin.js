import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {useEffect, useState} from "react";

export default () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // подписка на sign in через гугл
        const authSubscription = auth.onAuthStateChanged(async user => {
            // тут провряю так как user может быть null когда sign out
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot((snapshot) => {
                    setUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            } else {
                setUser(null);
            }
        });

        return () => {
            authSubscription();
        }
    }, []);

    return user;
}
