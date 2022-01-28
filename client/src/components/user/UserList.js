import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { fetchUsers } from '@app/store/actions';
import './UserList.scss';
import { selectIsLoadingUsers, selectUsersArray } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';
import MaterialLoader from '../loader/MaterialLoader';

const UserList = memo(({ fetchUsers, users, isLoadingUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

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

const mapStateToProps = createStructuredSelector({
    users: selectUsersArray,
    isLoadingUsers: selectIsLoadingUsers,
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
