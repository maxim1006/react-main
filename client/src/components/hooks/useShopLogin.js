import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { shopSetCurrentUser } from '../../store/actions';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let onSnapshotSubscription;

        // подписка на sign in через гугл, инитится при появлении компонента
        const authSubscription = auth.onAuthStateChanged(async user => {
            // тут провряю так как user может быть null когда sign out
            if (user) {
                const userRef = await createUserProfileDocument(user);

                // могу дату из userRef получить так
                // const snapshot = await userRef.get();
                // console.log(snapshot.data());

                // а могу так, когда по какой-то причине snapshot у DocumentReference или CollectionReference
                // поменяется сработает этот коллбек
                onSnapshotSubscription = userRef.onSnapshot(snapshot => {
                    // аля mapDispatchToProps
                    dispatch(
                        shopSetCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                        }),
                    );
                });
            } else {
                dispatch(shopSetCurrentUser(false));
            }
        });

        return () => {
            // unsubscribe
            authSubscription();

            if (onSnapshotSubscription) {
                onSnapshotSubscription();
            }
        };
    }, [dispatch]);
};
