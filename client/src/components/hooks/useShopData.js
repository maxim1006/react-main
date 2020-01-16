import {useEffect} from "react";
import {firestore} from "../../firebase/firebase.utils";
import {RouteNameMap} from "../shop/shop.data";
import {useDispatch} from "react-redux";
import {shopSetData} from "../../store/actions";

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // получаю дату из fireStore
        const shopDataRef = firestore.collection("shopData");

        const shopDataUnsubscribe = shopDataRef.onSnapshot(async snapshot => {
            const shopData = snapshot.docs.reduce((acc, doc) => {
                const {title, items, id} = doc.data();

                return {
                    ...acc,
                    [id]: {
                        title, items, id,
                        routeName: RouteNameMap.get(title)
                    }
                }
            }, {});

            dispatch(shopSetData(shopData));
        });

        return () => {
            shopDataUnsubscribe && shopDataUnsubscribe();
        }
    }, []);
}
