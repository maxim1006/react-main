import { memo } from 'react';
import MaterialLoader from '../../loader/MaterialLoader';
import useGetLazyRequest from '../../hooks/useGetLazyRequest';

const AxiosFamily = memo(() => {
    const { data: family, refetch, loading } = useGetLazyRequest({ url: 'family' });

    return (
        <>
            <button
                onClick={() => {
                    refetch();
                }}
            >
                refetch
            </button>
            {loading ? (
                <MaterialLoader />
            ) : (
                <ul>
                    {family?.map(({ name, id, age }) => (
                        <li key={id}>
                            {name}:{age}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
});

export default AxiosFamily;
