import { FC, memo, useCallback, useState } from 'react';
import customAxios from '../../common/api/axios';
import MaterialLoaderComponent from '../loader/MaterialLoader';

const GetRequestHookOnCbComponent: FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [familyData, setFamilyData] = useState([]);

    const onClick = useCallback(async () => {
        if (isSending) return;

        setIsSending(true);

        try {
            const { data } = await customAxios.get('family');
            setFamilyData(data);
            setIsSending(false);
        } catch (e) {
            console.log('GetRequestHookOnCbComponent error ', e);
        }
    }, [isSending]);

    return (
        <>
            <button type='button' onClick={onClick}>
                FetchFamily
            </button>
            {isSending ? (
                <MaterialLoaderComponent />
            ) : (
                <ul>
                    {familyData.map(({ name, age, id }) => {
                        return (
                            <li key={id}>
                                name: {name} age: {age}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default memo(GetRequestHookOnCbComponent);
