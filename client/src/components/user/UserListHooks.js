import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { fetchUsers } from '../../store/actions';
import './UserList.scss';
import { selectIsLoadingUsers, selectUsersArray } from '../../store/selectors';
import MaterialLoader from '../loader/MaterialLoader';

export default memo(() => {
    const dispatch = useDispatch();
    const isLoadingUsers = useSelector(selectIsLoadingUsers);
    const users = useSelector(selectUsersArray);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return isLoadingUsers ? (
        <MaterialLoader />
    ) : (
        <ul className='user-list'>
            {users.map(user => (
                <li className='user-list__item' key={user.id}>
                    <User {...user} />
                </li>
            ))}
        </ul>
    );
});
