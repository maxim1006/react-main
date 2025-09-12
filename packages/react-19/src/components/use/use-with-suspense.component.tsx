import { memo, use, useCallback, useState } from 'react';

type UseWithSuspenseProps = Record<string, never>;

interface IUser {
    name: string;
}

const fetchUserMocked = (ms = 1000) => {
    return new Promise<IUser>(res => {
        setTimeout(() => res({ name: 'Max' }), ms);
    });
};

// Вся эта красота для 19 реакта в 18 используй suspense-with-wrap-promise.component.tsx

// Suspense должен быть вне компоненты
const UseWithSuspense = memo<UseWithSuspenseProps>(() => {
    const [userPromise, setUserPromise] = useState<Promise<IUser> | null>(null);

    let user: IUser | Record<string, never> = {};

    if (userPromise) {
        // use можно использовать в if loops
        user = use(userPromise);
    }

    const handleFetchUser = useCallback(() => {
        console.log('handleFetchUser');
        setUserPromise(fetchUserMocked());
    }, []);

    return (
        <>
            <div onClick={handleFetchUser}>Fetch user</div>
            {user && user.name}
        </>
    );
});

export { UseWithSuspense };
